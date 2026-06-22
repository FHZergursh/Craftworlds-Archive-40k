import express from "express"
import unitTableRouter from "./routes/unitTableRouter.js";
import 'dotenv/config';
import { setupDB } from "./db/db.js";


const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(cors())

app.use('/api/table', unitTableRouter)

setupDB().then(
  app.listen(port, () => {
  console.log(`app listening on port ${port}`);
}));