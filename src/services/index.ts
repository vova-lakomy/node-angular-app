import { UserService } from './user/userService';
import { CustomerService } from './customer/customerService';
import { OrderService } from './order/orderService';
import { CompanyService } from './company/companyService';

export const userService = new UserService();
export const customerService = new CustomerService();
export const orderService = new OrderService();
export const companyService = new CompanyService();
