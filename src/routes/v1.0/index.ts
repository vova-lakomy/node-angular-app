import { userController } from '../../controllers';

export const routes = [
    {
        path : '/api/users/',
        method : 'GET',
        middleware : [userController.getAll],
    },
    {
        path : '/api/users/:userId',
        method : 'GET',
        middleware : [userController.get],
    },
];

