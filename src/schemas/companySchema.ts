import { Schema } from 'mongoose';

export const companySchema: Schema = new Schema({
    shortName: String,
    fullName: String,
    description: String,
    pricing: Object,
    contacts: Object,
    orders: [String],
    createdAt: Date,
    deletedAt: Date,
    updatedAt: Date,
});
