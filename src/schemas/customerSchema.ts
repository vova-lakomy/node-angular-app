import { Schema } from 'mongoose';

export const customerSchema: Schema = new Schema({
    firstName: String,
    lastName: String,
    contacts: Object,
    orders: [Schema.Types.ObjectId],
    comments: [Schema.Types.ObjectId],
    createdAt: Date,
    deletedAt: Date,
});
