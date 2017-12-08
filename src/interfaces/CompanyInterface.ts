export interface CompanyInterface {
    id?: string;
    shortName?: string;
    fullName?: string;
    description?: string;
    pricing?: Object;
    contacts?: Object;
    orders?: [string];
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
