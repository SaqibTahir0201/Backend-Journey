import express from "express"
import path from "path"
import post from "./routes/post.js"
const port = 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());    
app.use(express.urlencoded({ extended: true }));



app.use("/api/posts", post)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

