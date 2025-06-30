// server/routes/users.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Sign up with email only
router.post("/signup", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
      await user.save();
    }
    res.status(200).json({ message: "Signed up", user });
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
});

export default router;
