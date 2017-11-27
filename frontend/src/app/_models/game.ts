import { Comment } from './comment';

export class Game {
	game_id: number;
	location_id: number;
	description: string;
	minimum_rating: number;
	time_created: Date;
	date_of_game: Date;
	time_of_game: string;
	creator_id: number;
	comments: Comment;
}
