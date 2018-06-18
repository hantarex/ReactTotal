export function DataMatch(state=[], action) {
    switch (action.type) {
        case 'SET_MATCH':
            return action.payload;
        default:
            return state;
    }
}