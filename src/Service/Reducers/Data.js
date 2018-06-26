export function Data(state=[], action) {
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'SET_ATTEMPTS':
            return {
                ...state,
                ...{attempts: action.payload}
            };
        default:
            return state;
    }
}