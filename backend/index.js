import express from "express"
import unitRoutes from "./routes/unitRoutes.js";
import cors from "cors"
import { initBlogTable, initSimpleProfileTable } from "./db/setupDB.js";
import blogRoutes from "./routes/blogRoutes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.use("/api/simpleunits", unitRoutes)
app.use("/api/blogs", blogRoutes)

initSimpleProfileTable()
initBlogTable()

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`)
})