import express from "express";
const router = express.Router();

router.post("/api/v1/login", (req, res) => {
    res.json({login: true});
});

router.post("/api/v1/register", (req, res) => {
    res.json({register: true});
});

export default router;