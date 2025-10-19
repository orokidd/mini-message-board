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

router.get("/", (req, res) => res.render("index", { messages: messages }));

router.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user: user, text: text, added: new Date() });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const { id } = req.params;
  const message = messages[id];
  res.render("message", { message: message });
});

module.exports = router;
