import express from 'express';
const router = express.Router();
const auth = require("../middlewares/auth");
const { Personas } = require("../models/personas");


router.get("/", auth, async (req, res) => {
    let personas = await Personas.findAll();
    res.send(personas);
})

module.exports = router;