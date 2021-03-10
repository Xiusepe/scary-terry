import mongoose from 'mongoose';

const favCharacterSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
);

favCharacterSchema.index({ user: 1, id: 1 }, { unique: true });

export const FavCharacter = mongoose.model('fav-character', favCharacterSchema);
