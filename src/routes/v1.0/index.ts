import { companyController, userController } from '../../controllers';

export const routes = [
    {
        path : '/api/users/',
        method : 'GET',
        middleware : [userController.list],
    },
    {
        path : '/api/users/:userId',
        method : 'GET',
        middleware : [userController.get],
    },
    {
        path : '/api/users/submit',
        method : 'POST',
        middleware : [userController.save],
    },
    {
        path : '/api/users/update',
        method : 'POST',
        middleware : [userController.update],
    },
    {
        path : '/api/users/remove',
        method : 'POST',
        middleware : [userController.remove],
    },
    {
        path : '/api/companies/',
        method : 'GET',
        middleware : [companyController.list],
    },
    {
        path : '/api/companies/:companyId',
        method : 'GET',
        middleware : [companyController.get],
    },
    {
        path : '/api/companies/submit',
        method : 'POST',
        middleware : [companyController.save],
    },
    {
        path : '/api/companies/update',
        method : 'POST',
        middleware : [companyController.update],
    },
    {
        path : '/api/companies/remove',
        method : 'POST',
        middleware : [companyController.remove],
    },
];

