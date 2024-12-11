const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ProductModel, UserModel, connectToDb } = require("./db");
const { JWT_SECRET, auth } = require("./auth");
const { iplTeams } = require("../data/iplTeams");
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL || "https://ipl-ecom.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.use(express.json());
connectToDb();

app.get("/", (req, res) => {
  res.send("Server is healthy");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const pw = req.body.password;

    const user = await UserModel.findOne({
      email,
    });

    if (user) {
      const pwMatch = await bcrypt.compare(pw, user.password);

      if (pwMatch) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

        res.send({
          message: "User logged in successfully",
          iplTeam: user.iplTeam,
          token,
        });
      }
    } else {
      res.status(403).send({
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Error while signing up",
    });
  }
});

app.post("/register", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const pw = req.body.password;
    const iplTeam = iplTeams[Math.floor(Math.random() * 10)];

    const user = await UserModel.findOne({
      email,
    });

    if (user) {
      res.status(403).send({
        message: "Account already exists",
      });
      return;
    }

    const hashedPw = await bcrypt.hash(pw, 10);
    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPw,
      iplTeam,
    });

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);

    res.status(201).send({
      message: "Registered successfully",
      token,
      iplTeam,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      error: "An error occurred",
    });
  }
});

app.get("/products", auth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    if (!user) {
      res.status(404).send({
        message: "User not found",
      });
    }

    const products = await ProductModel.find({
      iplTeam: user.iplTeam,
    }).exec();

    if (!products) {
      res.status(404).send({
        message: "Product not found",
      });
    } else {
      res
        .status(200)
        .send({ products, iplTeam: user.iplTeam, userName: user.name });
    }
  } catch (err) {
    console.log(err);

    res.send("An error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server is up on http://localhost:${port}`);
});
