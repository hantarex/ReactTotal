export function Data(state=[], action) {
    switch (action.type) {
        case 'SET':
            return action.payload;
        case 'SET_ATTEMPTS':
            return {
                ...state,
                ...{attempts: action.payload}
            };
        case "SET_BET_MATCH":
            Object.keys(state.matches).forEach((num, key) => {
                if(state.matches[key].id === action.payload){
                    state.matches[key].active=1;
                }
            });
            return {
                ...state
            };
        default:
            return state;
    }
}