interface Model {
	id?: string;
}

export interface MatchTeam {
	name: string;
	score?: number;
}

export interface Match extends Model {
	startDate?: string;
	home: MatchTeam;
	away: MatchTeam;
	locked?: boolean;
}

export interface MatchSet extends Model {
	name: string;
	matches: Match[];
}

export interface Game extends Model {
	name: string;
	matchSetId?: string;
}

export interface MatchScore {
	home?: number;
	away?: number;
}

export interface Bet {
	bet: MatchScore;
	matchId: string;
	points?: number;
}

export interface HandA<T> {
	home: T;
	away: T
}
