import { CustomerInterface } from '../../interfaces/CustomerInterface';
import { CustomerModel } from '../../models/index';

export class CustomerService {

    constructor() {
        console.log('CustomerService constructor');
    }

    public list = async (offset: number, count: number) => {
        console.log('getCustomers, offset:' + offset + ' count:' + count);
        let users : CustomerInterface[] = [];
        try {
            const query =
                CustomerModel.find(
                    {
                        deletedAt : null,
                    },
                    null,
                    {
                        skip : offset,
                        limit : count,
                    });
            users = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return users;
    }

    public get = async (id: string) => {
        console.log('getCustomer');
        let customer: CustomerInterface | null | undefined;
        try {
            const query = CustomerModel
                .findOne(
                {
                    _id : id,
                    deletedAt : null,
                },
                );
            customer = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return customer;
    }

    public update = async (customer: CustomerInterface) => {
        console.log('update customer');
        try {
            const query = CustomerModel
                .findOneAndUpdate(
                {
                    _id : customer.id,
                },
                {
                    firstName : customer.firstName,
                    lastName : customer.lastName,
                    contacts: customer.contacts,
                    orders: customer.orders,
                    comments: customer.comments,
                    updatedAt: new Date(),
                },
                );
            await query.exec();
        } catch (err) {
            console.error(err);
        }
        return customer;
    }

    public save = (customer: CustomerInterface) => {
        return new CustomerModel(customer).save();
    }

    public remove = async (id: string) => {
        console.log('remove customer');
        try {
            const query = CustomerModel
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
