export interface CustomerInterface {
    firstName: string;
    lastName: string;
    contacts: Object;
    orders: [string];
    comments: [string];
    createdAt: Date;
    deletedAt: Date;
}
