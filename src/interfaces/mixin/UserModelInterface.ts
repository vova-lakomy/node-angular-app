import { Document } from 'mongoose';
import { UserInterface } from '../UserInterface';

export interface UserModelInterface extends UserInterface, Document {
}
