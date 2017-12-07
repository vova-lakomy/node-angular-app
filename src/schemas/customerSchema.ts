import { Schema } from 'mongoose';

export const customerSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    contacts: Object,
    orders: [String],
    comments: [String],
    createdAt: Date,
    deletedAt: Date,
    updatedAt: Date,
});
