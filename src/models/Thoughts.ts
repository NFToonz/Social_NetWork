import { Schema, Types, model, type Document } from 'mongoose';

// Define the Thought interface
// This interface is used to define the structure of a thought document
// It extends the Document interface from mongoose
// The Thought interface includes the following properties:
interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: Types.ObjectId[];
}

// Define the schema for the Thought model
// The schema defines the structure of a thought document
// It includes the following properties:
const ThoughtSchema = new Schema<IThought>({
    thoughtText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [{ type: Types.ObjectId, ref: 'Reaction' }]
    });


// Add a Thought virtual for reactionCount
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Ensure virtuals are included when converting to JSON
ThoughtSchema.set('toJSON', { virtuals: true });
ThoughtSchema.set('toObject', { virtuals: true });

export const Thought = model<IThought>('Thought', ThoughtSchema);