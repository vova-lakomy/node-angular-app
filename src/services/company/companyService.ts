import { CompanyInterface } from '../../interfaces/CompanyInterface';
import { CompanyModel } from '../../models/index';

export class CompanyService {

    constructor() {
        console.log('CompanyService constructor');
    }

    public list = async (offset: number, count: number) => {
        console.log('getCompanies, offset:' + offset + ' count:' + count);
        let companies : CompanyInterface[] = [];
        try {
            const query =
                CompanyModel.find(
                    {
                        deletedAt : null,
                    },
                    null,
                    {
                        skip : offset,
                        limit : count,
                    });
            companies = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return companies;
    }

    public get = async (id: string) => {
        console.log('getCompany');
        let company: CompanyInterface | null | undefined;
        try {
            const query = CompanyModel
                .findOne(
                {
                    _id : id,
                    deletedAt : null,
                },
                );
            company = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return company;
    }

    public update = async (company: CompanyInterface) => {
        console.log('update order');
        try {
            const query = CompanyModel
                .findOneAndUpdate(
                {
                    _id : company.id,
                },
                {
                    shortName : company.shortName,
                    fullName : company.fullName,
                    description: company.description,
                    pricing: company.pricing,
                    contacts: company.contacts,
                    orders: company.orders,
                    updatedAt: new Date(),
                },
                );
            await query.exec();
        } catch (err) {
            console.error(err);
        }
        return company;
    }

    public save = (order: CompanyInterface) => {
        return new CompanyModel(order).save();
    }

    public remove = async (id: string) => {
        console.log('remove order');
        try {
            const query = CompanyModel
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
