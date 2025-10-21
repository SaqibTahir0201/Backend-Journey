import express from "express";
import path from "path";
import post from "./routes/post.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
const port = 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// middleware
app.use(logger);

// routes
app.use("/api/posts", post);

//error handler (after using routes)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
