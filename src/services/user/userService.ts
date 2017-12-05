import { UserInterface } from '../../interfaces/UserInterface';
import { User } from '../../models/index';

export class UserService {

    private instance : UserService;

    constructor() {
    }

    public listAsync = async () => {
        console.log('getUsers');
        let users : UserInterface[] = [];
        try {
            console.log('listAsync');
            users = await User.find({});
            console.log('users');
            console.log(users);
        } catch (err) {
            console.error(err);
        }
        return users;
    }

    public getInstance() :UserService {
        if (this.instance == null) {
            this.instance = new UserService();
        }
        return this.instance;
    }
}
