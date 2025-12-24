import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();

app.use(express.json());

//routes
app.use("/books", bookRoutes);
//error handling
app.use(errorHandler);

export default app;
