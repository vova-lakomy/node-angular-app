import { Request, Response, NextFunction } from 'express';
import { companyService, userService } from '../../services/index';
import { CompanyInterface } from '../../interfaces/CompanyInterface';
import { Company } from '../../interfaces/impl/Company';
import { User } from '../../interfaces/impl/User';
import { UserInterface } from '../../interfaces/UserInterface';

export class CompanyController {

    constructor() {
        console.log('CompanyController constructor');
    }

    public list = (req: Request, res: Response, next: NextFunction) => {
        const offset: number = Number(req.query['offset'] || 0);
        const count: number = Number(req.query['count'] || 10);
        companyService.list(offset, count)
            .then((companyList: CompanyInterface[]) => {
                res.json(Company.fromList(companyList));
                res.end();
            })
            .catch((error) => {
                console.error(error);
                next(error);
            });

    }

    public get = (req: Request, res: Response, next: NextFunction) => {
        console.log('CompanyController: get ');
        const id = req.params['companyId'];
        companyService.get(id).then((companyInterface: CompanyInterface) => {
            const company = Company.fromCompany(companyInterface);
            userService.getByOwnerId(company.id)
                .then((user: UserInterface) => {
                    company.user = User.fromUser(user);
                    res.json(company);
                    res.end();
                })
                .catch((error) => {
                    console.error(error);
                    next(error);
                });
        }).catch((error) => {
            console.error(error);
            next(error);
        });
    }

    public save = (req: Request, res: Response, next: NextFunction) => {
        console.log('CompanyController: save ');
        const { email, password, role, ownerId } = req.body;
        const company: CompanyInterface = {
            // todo
        };
        companyService.save(company)
            .then((result) => {
                res.send(result._id);
                res.end('saved...');
            })
            .catch((error) => {
                res.end(error);
            });
    }

    public update = (req: Request, res: Response, next: NextFunction) => {
        console.log('CompanyController: update ');
        const { id, email, password, role, ownerId } = req.body;
        const user: CompanyInterface = {
            // todo
        };
        companyService.update(user)
            .then((updatedUser: CompanyInterface) => {
                res.send(updatedUser);
                res.end();
            })
            .catch((error) => {
                res.end(error);
            });
    }

    public remove = (req: Request, res: Response, next: NextFunction) => {
        console.log('CompanyController: remove ');
        const { id } = req.body;
        companyService.remove(id).then(() => {
            res.end('removed');
        }).catch((error) => {
            console.error(error);
            res.end('error');
        });
    }

}
