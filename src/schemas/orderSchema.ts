import { Schema } from 'mongoose';

export const orderSchema: Schema = new Schema({
    customerId: String,
    companyId: String,
    objectAddress: Object,
    cleaningType: String,
    daysOfWeek: [Number],
    desiredDateTime: Date,
    regularity: String,
    status: String,
    createdAt: Date,
    deletedAt: Date,
    updatedAt: Date,
});
