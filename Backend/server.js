import express from "express";
import dotenv from "dotenv";
import database from "nedb";
import path from "path";
const app = express();

// configs
dotenv.config({ path: path.join(".env") });
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// DATABASE & POST ROUTES
const forms = new database({
  filename: "database/forms.db",
  autoload: true,
});

app.post("/contact", async (req, res) => {
  const DATABASE = [
    {
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      email: req.body.email,
      message: req.body.message,
      date: req.body.date,
    },
  ];

  try {
    forms.insert({
      DATABASE: DATABASE,
    });
    res.redirect("http://localhost:3000/");
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT;

console.log(`Connected to Database`);

app.listen(process.env.PORT, () =>
  console.log(`Backend is running PORT: ${PORT}`)
);
