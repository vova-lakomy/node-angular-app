import { UserRole } from '../enumerations/userRole';

export interface UserInterface{
    id?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    ownerId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
