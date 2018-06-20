export function DataMatch(state=null, action) {
    switch (action.type) {
        case 'SET_MATCH':
            return action.payload;
        default:
            return state;
    }
}