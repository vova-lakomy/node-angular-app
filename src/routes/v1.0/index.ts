import { companyController, assetsController, userController } from '../../controllers';

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
    {
        path : '/',
        method : 'GET',
        middleware : [assetsController.index],
    },
    {
        path : '/*.js',
        method : 'GET',
        middleware : [assetsController.get],
    },
    {
        path : '/*.css',
        method : 'GET',
        middleware : [assetsController.get],
    },
    {
        path : '/*.img',
        method : 'GET',
        middleware : [assetsController.get],
    },
    {
        path : '/*.png',
        method : 'GET',
        middleware : [assetsController.get],
    },
    {
        path : '/*.ico',
        method : 'GET',
        middleware : [assetsController.get],
    },
];

