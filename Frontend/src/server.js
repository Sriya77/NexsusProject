const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const mongoURI = "mongodb+srv://<username>:<password>@cluster.mongodb.net/videosDB";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const videoSchema = new mongoose.Schema({
  title: String,
  thumbnail: String,
  duration: String,
  author: String,
});

const Video = mongoose.model("Video", videoSchema);

app.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching videos" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
