import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = async (req, res) => {
  const newPlayer = new Player(req.body);

  try {
    const player = await newPlayer.save();
    res.json(player);
  } catch (e) {
    res.send(e);
  }
};
