import { UserController } from './user-controller/index';
import { CompanyController } from './company-controller/companyController';
import { AssetsController } from './htmlResponseController/index';

export const userController = new UserController();
export const companyController = new CompanyController();
export const assetsController = new AssetsController();
