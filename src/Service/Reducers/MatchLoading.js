export function MatchLoading(state = false, action) {
    switch (action.type) {
        case 'MATCH_LOADING':
            return action.payload;

        default:
            return state;
    }
}