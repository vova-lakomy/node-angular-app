import { UserService } from './user/userService';

export const userService = new UserService().getInstance();
