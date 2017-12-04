import { Schema } from 'mongoose';

export const orderSchema: Schema = new Schema({
    customerId: Schema.Types.ObjectId,
    companyId: Schema.Types.ObjectId,
    objectAddress: Object,
    cleaningType: String,
    daysOfWeek: [Number],
    desiredDateTime: Date,
    regularity: String,
    status: String,
    createdAt: Date,
    deletedAt: Date,
});
