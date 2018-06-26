export function Bet(state={}, action) {
    switch (action.type) {
        case 'SET_BET':
            return action.payload;
        case "CLEAR_BET":
            delete state[3];
            return state;
        default:
            return state;
    }
}