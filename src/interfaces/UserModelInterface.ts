import { Document } from 'mongoose';
import { UserInterface } from './UserInterface';

export interface UserModelInterface extends UserInterface, Document {
    // custom methods for model would be defined here
}
