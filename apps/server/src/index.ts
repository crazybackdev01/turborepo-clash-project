import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

console.log(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", (req: Request, res: Response) => {
  res.render("welcome.ejs");
});

app.listen(PORT, () => {
  console.log(`Listenening 💕💕 ${PORT}`);
});
