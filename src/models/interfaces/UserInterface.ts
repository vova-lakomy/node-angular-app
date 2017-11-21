import { Document } from 'mongoose';

export interface UserModel extends Document {
    name: string;
    email: string;
    createdAt: Date;
    modifiedAt: Date;
}
