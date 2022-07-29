import express from "express";
const Projects = express.Router();

Projects.get("/", (req, res) => {
  res.render("Projects.ejs");
});

export default Projects;
