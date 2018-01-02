import { UserInterface } from '../../interfaces/UserInterface';
import { UserModel } from '../../models';
import { User } from '../../interfaces/impl/User';

export class UserService {

    constructor() {
        console.log('UserService constructor');
    }

    public list = async (offset: number, count: number) => {
        console.log('getUsers, offset:' + offset + ' count:' + count);
        let users : UserInterface[] = [];
        try {
            const query =
                UserModel.find(
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
        console.log('getUser');
        let user: UserInterface | null | undefined;
        try {
            const query = UserModel
                .findOne(
                {
                    _id : id,
                    deletedAt : null,
                },
                );
            user = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return user;
    }

    public getByOwnerId = async (id?: string) => {
        console.log('getUserByOwnerId');
        let user: UserInterface | null | undefined;
        try {
            const query = UserModel
                .findOne(
                {
                    ownerId: id,
                    deletedAt: null,
                },
                );
            user = await query.exec();
        } catch (err) {
            console.error(err);
        }
        return user;
    }

    public update = async (user: UserInterface) => {
        console.log('update user');
        try {
            const query = UserModel
                .findOneAndUpdate(
                {
                    _id : user.id,
                },
                {
                    email : user.email,
                    password : user.password,
                    role: user.role,
                    ownerId: user.ownerId,
                    updatedAt: new Date(),
                },
            );
            await query.exec();
        } catch (err) {
            console.error(err);
        }
        return user;
    }

    public save = (user: UserInterface) => {
        console.log('UserService save()');
        console.log(user);
        return new UserModel(user).save();
    }

    public remove = async (id: string) => {
        console.log('remove user');
        try {
            const query = UserModel
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
