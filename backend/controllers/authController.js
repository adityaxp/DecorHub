const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
    });

    try {
      await newUser.save();
      res.status(201).json({ message: "Account created successfully" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  logInUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong credentials provide a valid email");
      const decryptPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET
      );
      const decryptedPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

      decryptedPassword !== req.body.password &&
        res.status(401).json("Wrong Password");
      const userToken = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;
      res.status(200).json({ ...userData, token: userToken });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
