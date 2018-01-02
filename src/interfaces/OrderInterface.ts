import { CleaningType } from '../enumerations/cleaningType';
import { CleanRegularity } from '../enumerations/cleanRegularity';
import { OrderStatus } from '../enumerations/orderStatus';

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
