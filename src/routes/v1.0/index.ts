import { userController } from '../../controllers';

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
];

