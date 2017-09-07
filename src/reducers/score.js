
const score = (state = [0], action) => {
    switch (action.type) {
        case 'PLAYERS:ADD':
        case 'GAME:RESTART':
            return [0];

        case 'PLAYERS:ADD_PLAYER_SCORE':
            return [...state, action.score];

        default:
            return state;
    }
};

export default score;
