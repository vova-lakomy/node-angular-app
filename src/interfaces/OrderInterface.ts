export interface OrderInterface {
    id?: string;
    customerId?: string;
    companyId?: string;
    objectAddress?: Object;
    cleaningType?: CleaningType;
    daysOfWeek?: [number];
    desiredDateTime?: Date;
    regularity?: CleanRegularity;
    status?: OrderStatus;
    createdAt?: Date;
    deletedAt?: Date;
    updatedAt?: Date;
}
