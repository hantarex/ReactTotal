export function Check(state=null, action) {
    switch (action.type) {
        case 'SET_CHECK':
            return action.payload;
        default:
            return state;
    }
}