import { Request, Response } from "express";
import { model } from "mongoose";
import reactionSchema from "../models/Reactions.js";

// Create Reaction model
const Reaction = model("Reaction", reactionSchema);

// Controller methods
export const getReactions = async (req: Request, res: Response) => {
  try {
    const reactions = await Reaction.find();
    res.status(200).json(reactions);
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
};

export const createReaction = async (req: Request, res: Response) => {
  try {
    const newReaction = await Reaction.create(req.body);
    res.status(201).json(newReaction);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
  }
};

export const deleteReaction = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedReaction = await Reaction.findByIdAndDelete(id);
    if (!deletedReaction) {
      return res.status(404).json({ error: "Reaction not found" });
    }
    res.status(200).json(deletedReaction);
  } catch (err) {
    res.status(400).json({ error: err instanceof Error ? err.message : "An unknown error occurred" });
}
};

