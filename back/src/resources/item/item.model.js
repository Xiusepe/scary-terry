import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 50,
      required: true,
      trim: true
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'complete', 'pastdue'],
      required: true
    },
    due: Date,
    notes: String,
    createdBy: {
      ref: 'user',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    },
    list: {
      ref: 'list',
      required: true,
      type: mongoose.SchemaTypes.ObjectId
    }
  },
  { timestamps: true }
);
itemSchema.index({ list: 1, name: 1 }, { unique: true });
export const Item = mongoose.model('item', itemSchema);
