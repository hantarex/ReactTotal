export function Bet(state={}, action) {
    switch (action.type) {
        case 'SET_BET':
            return action.payload;
        default:
            return state;
    }
}