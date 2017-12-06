import { UserInterface } from '../../interfaces/UserInterface';
import { UserModel } from '../../models/index';

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
            const query = UserModel.findById(id); // todo: filter deleted
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
