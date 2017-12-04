import { Document } from 'mongoose';
import { CustomerInterface } from '../CustomerInterface';

export interface CustomerModelInterface extends CustomerInterface, Document {
}
