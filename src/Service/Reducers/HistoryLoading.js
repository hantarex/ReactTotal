export function HistoryLoading(state = false, action) {
    switch (action.type) {
        case 'HISTORY_LOADING':
            return action.payload;

        default:
            return state;
    }
}