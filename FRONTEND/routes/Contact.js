import express from "express";
const Contact = express.Router();

Contact.get("/", (req, res) => {
  res.render("Contact.ejs");
});

export default Contact;
