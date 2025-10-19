const { Router } = require("express");

const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
    {
    text: "Nice Car!",
    user: "Samantha",
    added: new Date()
  },
    {
    text: "Shut up!",
    user: "Blake",
    added: new Date()
  },
];

router.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));

module.exports = router;
