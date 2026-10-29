/**
 * Middleware: validateContact
 * Validates incoming contact form data before passing to controller.
 */
const validateContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const errors = {};

  // Name
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'A valid email address is required.';
  }

  // Message
  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (message.trim().length > 5000) {
    errors.message = 'Message must be under 5,000 characters.';
  }

  // Subject is optional — but cap length
  if (subject && (typeof subject !== 'string' || subject.trim().length > 120)) {
    errors.subject = 'Subject must be under 120 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Sanitize and attach to request
  req.contactData = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject ? subject.trim() : 'New message from portfolio',
    message: message.trim(),
  };

  next();
};

module.exports = { validateContact };
