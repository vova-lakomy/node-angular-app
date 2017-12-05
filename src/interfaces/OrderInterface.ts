export interface OrderInterface {
    customerId: string;
    companyId: string;
    objectAddress: Object;
    cleaningType: CleaningType;
    daysOfWeek: [Number];
    desiredDateTime: Date;
    regularity: CleanRegularity;
    status: OrderStatus;
    createdAt: Date;
    deletedAt: Date;
}
