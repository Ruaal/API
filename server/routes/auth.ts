import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwt from 'jsonwebtoken';
const auth = require("../middlewares/auth");
import config from 'config';
const { User } = require("../models/users");


router.use(passport.initialize());

router.post("/login", async (req, res) => {
    console.log("Login");
    const body = req.body;
    let user = await User.findOne({ where: { username: body.username } });
    if (!user) return res.status(404).send("El usuario no existe");

    const validPassword = await bcrypt.compare(body.password, user.password);
    if(!validPassword) return res.status(401).send("Usuario o contraseña incorrecta");
    
    const token = jwt.sign({ username: user.username }, config.get("jwtPrivateKey"));
    res.send(token);
    console.log("User logged");
});

router.post("/register", async (req, res) => {
    console.log("Register");
    const body = req.body;
    if(!body.username) return res.status(400).send("El usuario no puede estar vacio")

    let user = await User.findOne({ where: { username: body.username } });   
    if (user) return res.status(409).send("El usuario ya se encuentra registrado.");

    const salt = await bcrypt.genSalt(10);
    const pwd = await bcrypt.hash(body.password, salt);
    user = await User.create({ username: body.username, password: pwd });
    res.send("Registrado correctamente");
});


module.exports = router;