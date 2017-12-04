import { Document } from 'mongoose';
import { OrderInterface } from '../OrderInterface';

export interface OrderModelInterface extends OrderInterface, Document {
}
