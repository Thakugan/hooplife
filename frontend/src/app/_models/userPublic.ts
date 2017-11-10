
import { Comment } from './comment';

export class UserPublic{
	username: string;
	firstName: string;
	lastName: string;
	rating: number;
	year: string;
	rank: string;
	gamesPlayed: number;
	wins: number;
	losses: number;
	email: string;
	comments: Comment[];
}