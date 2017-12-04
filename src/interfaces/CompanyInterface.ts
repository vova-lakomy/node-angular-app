export interface CompanyInterface {
    shortName: string;
    fullName: string;
    description: string;
    pricing: Object;
    contacts: Object;
    orders: [string];
    createdAt: Date;
    deletedAt: Date;
}
