import { Comment } from './comment';

export class Location {
	name: string;
	photoName: string;
	address: string;
	description: string;
	comments: Comment[];
	rating: number;
}
