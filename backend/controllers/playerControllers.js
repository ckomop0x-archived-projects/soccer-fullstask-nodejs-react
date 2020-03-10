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

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (e) {
    res.send(e);
  }
};

export const getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);

    console.log(req.params);

    res.json(player);
  } catch (e) {
    res.send(e);
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.json(player);
  } catch (e) {
    res.send(e);
  }
};

export const deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id);
    res.json({message: 'Player removed'});
  } catch (e) {
    res.send(e);
  }
};
