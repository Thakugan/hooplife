import { Comment } from './comment';

export class User {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	dateCreated: Date;
	comments: Comment[];
	rating: number;
	year: string;
	rank: string;
	gamesPlayed: number;
	wins: number;
	losses: number;
}
