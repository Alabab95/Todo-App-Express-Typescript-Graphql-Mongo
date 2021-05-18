import mongoose from '../providers/Database';

const Schema = mongoose.Schema;
// Define the Todo Schema
export const CommentSchema = new mongoose.Schema(
  {
    _id : mongoose.Schema.Types.ObjectId,
    text: {
      type: String
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    todo: {
      type: Schema.Types.ObjectId,
      ref:'Todo',
      required: true
    }
    
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
