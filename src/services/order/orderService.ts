import { OrderModel } from '../../models';
import { OrderInterface } from '../../interfaces/OrderInterface';

export class OrderService {

    constructor() {
        console.log('OrderService constructor');
    }

    public list = async (offset: number, count: number) => {
        console.log('getOrders, offset:' + offset + ' count:' + count);
        let orders : OrderInterface[] = [];
        try {
            const query =
                OrderModel.find(
                    {
                        deletedAt : null,
                    },
                    null,
                    {
                        skip : offset,
                        limit : count,
                    });
            orders = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return orders;
    }

    public get = async (id: string) => {
        console.log('getOrder');
        let order: OrderInterface | null | undefined;
        try {
            const query = OrderModel
                .findOne(
                {
                    _id : id,
                    deletedAt : null,
                },
                );
            order = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return order;
    }

    public update = async (order: OrderInterface) => {
        console.log('update order');
        try {
            const query = OrderModel
                .findOneAndUpdate(
                {
                    _id : order.id,
                },
                {
                    customerId : order.customerId,
                    companyId : order.companyId,
                    objectAddress: order.objectAddress,
                    cleaningType: order.cleaningType,
                    daysOfWeek: order.daysOfWeek,
                    desiredDateTime: order.desiredDateTime,
                    regularity: order.regularity,
                    status: order.status,
                    updatedAt: new Date(),
                },
                );
            await query.exec();
        } catch (err) {
            console.error(err);
        }
        return order;
    }

    public save = (order: OrderInterface) => {
        return new OrderModel(order).save();
    }

    public remove = async (id: string) => {
        console.log('remove order');
        try {
            const query = OrderModel
                .findOneAndUpdate(
                {
                    _id : id,
                },
                {
                    deletedAt : new Date(),
                },
                );
            await query.exec();
        } catch (err) {
            console.error(err);
        }
    }
}
