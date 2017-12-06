import * as mongoose from 'mongoose';
import { UserModelInterface } from '../interfaces/mixin/UserModelInterface';
import { CompanyModelInterface } from '../interfaces/mixin/CompanyModelInterface';
import { CustomerModelInterface } from '../interfaces/mixin/CustomerModelInterface';
import { OrderModelInterface } from '../interfaces/mixin/OrderModelInterface';
import { userSchema } from '../schemas/userSchema';
import { companySchema } from '../schemas/companySchema';
import { customerSchema } from '../schemas/customerSchema';
import { orderSchema } from '../schemas/orderSchema';

export const CompanyModel = mongoose.model<CompanyModelInterface>('Company', companySchema);
export const CustomerModel = mongoose.model<CustomerModelInterface>('Customer', customerSchema);
export const OrderModel = mongoose.model<OrderModelInterface>('Order', orderSchema);
export const UserModel = mongoose.model<UserModelInterface>('User', userSchema);
