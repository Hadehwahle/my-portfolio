const express = require("express");
const router = express.Router();
const { validateContact } = require("../middleware/validateContact");
const { sendContactEmail } = require("../controllers/contactController");

// POST /api/contact
router.post("/", validateContact, sendContactEmail);

module.exports = router;
