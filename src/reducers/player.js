
const player = (state, action) => {
    switch (action.type) {
        case 'PLAYERS:ADD':
            return {
                id: action.id,
                name: action.name
            };

        default:
            return state;
    }
};

export default player;
