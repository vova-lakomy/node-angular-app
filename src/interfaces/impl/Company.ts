import { CompanyInterface } from '../CompanyInterface';
import { User } from './User';

export class Company implements CompanyInterface {

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
    user?: User;
    
    constructor() {
    }

    static fromCompany(company: CompanyInterface): Company {
        const companyInstance: Company = new Company();
        companyInstance.id = company.id;
        companyInstance.shortName = company.shortName;
        companyInstance.fullName = company.fullName;
        companyInstance.description = company.description;
        companyInstance.pricing = company.pricing;
        companyInstance.contacts = company.contacts;
        companyInstance.orders = company.orders;
        companyInstance.createdAt = company.createdAt;
        companyInstance.deletedAt = company.deletedAt;
        companyInstance.updatedAt = company.updatedAt;
        return companyInstance;
    }

    static fromList(companyList: CompanyInterface[]): Company[] {
        const list: Company[] = [];
        companyList.forEach((company) => {
            list.push(this.fromCompany(company));
        });
        return list;
    }
    
    
}
