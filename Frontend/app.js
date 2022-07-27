import express from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();

// DOTENV CONFIG
dotenv.config({ path: path.join(".env") });

// LiveReload Temporary
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
const Public = path.dirname("Public");
const liveServer = livereload.createServer();
liveServer.watch(Public);
app.use(connectLiveReload());

// STATICS
app.set("view engine", "ejs");
app.set("views", "pages");
app.use(express.static("public"));
app.use(express.static("public/assets"));
app.use(express.static("public/assets/icons"));
app.use(express.static("public/assets/images"));
app.use(express.static("public/css"));
app.use(express.static("public/css/components-css"));
app.use(express.static("public/layouts"));
app.use(express.static("global"));
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { Date: new Date() });
});

// DATABASE & POST ROUTES

app.post("http://localhost:3001/contact");

const PORT = process.env.PORT;

app.listen(process.env.PORT, () =>
  console.log(`Frontend is running PORT: ${PORT}`)
);