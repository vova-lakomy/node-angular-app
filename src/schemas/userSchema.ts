import { Schema } from 'mongoose';

export const userSchema: Schema = new Schema({
    email: String,
    password: String,
    role: String,
    ownerId: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
});

userSchema.pre('save', (next) => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});
