import { User } from './../user/user';

export class Project {
    id: string;
    description: String;
    ownerId: string;
    owner: User;
}
