import { Schema } from 'mongoose';

export const companySchema: Schema = new Schema({
    email: String,
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

companySchema.pre('save', function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});
