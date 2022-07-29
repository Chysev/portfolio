import express from "express";
const Home = express.Router();

Home.get("/", (req, res) => {
  res.render("Home.ejs");
});

export default Home;
