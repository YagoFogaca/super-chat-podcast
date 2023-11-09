import express, { Router } from "express";
import cors from "cors";

import { userProvider } from "./app/providers/user.providers.js";

const app = express();
const port = 3000;
const router = Router();
const user = userProvider(router);

app.use(express.json());
app.use(cors());
app.use("/users", user.Routes());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
