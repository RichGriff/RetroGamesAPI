import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  platforms: [String],
  developer: { type: String, required: true },
  rating: { type: Number, required: true },
  releaseDate: { type: Date, required: true },
  image: { type: String, required: true },
  playOptions: [String]
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
