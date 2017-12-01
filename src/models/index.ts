import { Model } from 'mongoose';
import { UserModelInterface } from '../interfaces/UserModelInterface';

export interface ModelInterface {
    user: Model<UserModelInterface>;
}


