import express from 'express';
const router = express.Router();
import path from 'path';

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../views") });
});

module.exports = router;