import expressLayouts from "express-ejs-layouts";
import express from "express";
import path from "path";
const app = express();
const PORT = 3000;

// LiveServer || Temporary
import livereload from "livereload";
import connectLiveReload from "connect-livereload";
const Public = path.dirname("Public");
const liveServer = livereload.createServer();
liveServer.watch(Public);
app.use(connectLiveReload());

// ENGINE & LAYOUTS
app.set("view engine", "ejs");
app.set("views", "pages");
app.set("layout", "App/App.ejs");
app.use(expressLayouts);

// STATIC FILES
app.use(express.static("aos"));
app.use(express.static("global"));
app.use(express.static("public"));
app.use(express.static("public/assets"));
app.use(express.static("public/assets/icons"));
app.use(express.static("public/assets/images"));
app.use(express.static("public/css"));
app.use(express.static("public/css/components-css"));
app.use(express.static("public/layouts"));

// ROUTES

import Home from "./routes/Home.js";
import Projects from "./routes/Projects.js";
import Contact from "./routes/Contact.js";

app.use("/", Home);
app.use("/Projects", Projects);
app.use("/Contact", Contact);

app.listen(PORT);
