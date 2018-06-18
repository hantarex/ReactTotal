export function MatchLoading(state = true, action) {
    switch (action.type) {
        case 'MATCH_LOADING':
            return action.payload;

        default:
            return state;
    }
}