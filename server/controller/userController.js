import { User } from '../models/userModel.js';
import { autoCatchFn } from '../lib/autoCatchFn.js'; // ensure this is imported

// Render a contact form page (if you plan to serve it via a view)
export const renderContactForm = autoCatchFn(async (req, res) => {
    res.status(200).json({ message: "Contact form endpoint active" });
});

// Handle form submission
export const contactForm = autoCatchFn(async (req, res) => {
    const { firstName, lastName, email, message } = req.body || {};

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "None of the fields must be empty" });
    }

    try {
        await User.create({ firstName, lastName, email, message });
        return res.status(200).json({ success: "Message has been sent" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Message could not be sent" });
    }
});
