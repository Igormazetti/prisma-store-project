import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 6060;

app.listen(port);
console.log("listeting at", port);
