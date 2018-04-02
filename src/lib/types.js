// @flow

export type Player = {
    id: number,
    name: string
};

export type Players = PlayersByIdState;
export type ScoreList = number[];
export type Scores = { [id: number]: ScoreList };

export type GameState = {
    stage: number
};

export type RoundState = {
    score: number,
    winner: number
};

export type GoalState = number;

export type PlayersByIdState = {
    [id: number]: Player
};

export type AllPlayerIdsState = number[];

export type PlayerScoresState = { [id: number]: ScoreList };

export type PlayerState = {
    id: string,
    name: string
};

export type PlayersState = {
    byId: PlayersByIdState,
    allIds: AllPlayerIdsState
};

export type State = {
    players: PlayersState,
    game: GameState,
    goal: GoalState,
    round: RoundState,
    scores: PlayerScoresState
};

export type Action =
    | { type: 'GOAL:SET', goal: number }
    | { type: 'PLAYERS:ADD', name: string, id: number }
    | { type: 'PLAYERS:REMOVE', id: number }
    | { type: 'PLAYERS:ADD_PLAYER_SCORE', id: number, score: number }
    | { type: 'GAME:SET_STAGE', stage: number }
    | { type: 'GAME:RESTART' }
    | { type: 'GAME:RESET' }
    | { type: 'GAME:START' }
    | { type: 'ROUND:SET_WINNER', id: number }
    | { type: 'ROUND:ADD_SCORE', value: number }
    | { type: 'ROUND:SUBTRACT_SCORE', value: number }
    | { type: "ERROR_MESSAGE", message: string };

export type Dispatch = (action: Action | ThunkAction) => any;
export type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
