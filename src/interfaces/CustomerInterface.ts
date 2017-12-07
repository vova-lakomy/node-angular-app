export interface CustomerInterface {
    id?: string;
    firstName?: string;
    lastName?: string;
    contacts?: Object;
    orders?: [string];
    comments?: [string];
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
