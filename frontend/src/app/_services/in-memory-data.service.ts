import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../_models/user';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { firstName: "Jenn", lastName: "Le", username: "thakugan", email: "jennl@smu.edu", dateCreated: new Date(), comments: null, rating: 4, year: "Junior", rank: "B-Ball Queen", gamesPlayed: 20, wins: 10, losses: 10}
    ]

    return { users };
  }
}
