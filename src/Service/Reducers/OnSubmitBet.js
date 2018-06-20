export function OnSubmitBet(state = false, action) {
    switch (action.type) {
        case 'ON_SUBMIT_BET':
            return action.payload;

        default:
            return state;
    }
}