import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(
      audioUpload.duration % 60
    )}`;

    const songData = {
      name,
      desc,
      album,
      image: imageUpload.secure_url,
      file: audioUpload.secure_url,
      duration,
    };

    const song = new songModel(songData);
    await song.save();
    res.json({ success: true, message: "Song added" });
  } catch (error) {
    console.error("Error adding song:", error);
    res.json({ success: false, message: error.message || "Unknown error" });
  }
};

const listSong = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const allSongs = await songModel.find({});
    res.json({ success: true, songs: allSongs });
  } catch (error) {
    res.json({ success: false });
  }
};

const removeSong = async (req, res) => {
  try {
    // Retrieve song ID from either body or query parameters
    const songId = req.body.id || req.query.id;

    if (!songId) {
      console.error("No song ID provided");
      return res
        .status(400)
        .json({ success: false, message: "Song ID is required" });
    }

    const result = await songModel.findByIdAndDelete(songId);
    if (!result) {
      console.error("Song not found");
      return res
        .status(404)
        .json({ success: false, message: "Song not found" });
    }

    res.json({ success: true, message: "Song removed" });
  } catch (error) {
    console.error("Error removing song:", error); // Log the error for debugging
    res
      .status(500)
      .json({ success: false, message: error.message || "Unknown error" });
  }
};

export { addSong, listSong, removeSong };
