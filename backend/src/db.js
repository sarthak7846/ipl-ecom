const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  iplTeam: String,
});

const Product = new Schema({
  title: String,
  image: String,
  price: Number,
  mrp: Number,
  iplTeam: String,
});

const UserModel = mongoose.model("users", User);
const ProductModel = mongoose.model("products", Product);

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  UserModel,
  ProductModel,
  connectToDb,
};
