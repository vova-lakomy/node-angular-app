import * as mongoose from 'mongoose';
import { UserModelInterface } from '../interfaces/mixin/UserModelInterface';
import { userSchema } from '../schemas/userSchema';

export const User = mongoose.model<UserModelInterface>('User', userSchema);



