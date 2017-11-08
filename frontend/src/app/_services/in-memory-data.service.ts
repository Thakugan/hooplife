import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../_models/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { firstName: "Jenn", lastName: "Le", username: "thakugan", email: "jennl@smu.edu", password: "pass", dateCreated: new Date()}
    ]

    return { users };
  }
}
