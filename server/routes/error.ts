import express from 'express';
const router = express.Router();
import path from 'path';

router.get("/", (_, res) => {
  res
    .status(404)
    .sendFile("error.html", { root: path.join(__dirname, "../views") });
});

module.exports = router;