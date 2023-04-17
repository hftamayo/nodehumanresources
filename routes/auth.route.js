import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
    res.json({login: true});
});

router.post("/register", (req, res) => {
    res.json({register: true});
});

export default router;