import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

var detail = ""

app.get("/", (req, res) => {
  res.sendFile(__dirname +  "/public/index.html");
  // next();
});

app.post("/submit" , (req,res) => {
  // Outputs a Dictionary in the terminal
  // { street: 'Hollinrake', pet: 'Scooby' }
  detail = ""
  console.log(req.body)
  detail += req.body.street.toString() + " " +  req.body.pet.toString() + "👨‍🎤🎸"
  res.redirect("/new");
})

app.get("/new", (req,res) => {
  res.send(`<h1> Your BandName Is </h1> <h2> ${detail} </h2>`)
});