export function SelectedCondition(state="1", action) {
    switch (action.type) {
        case 'CHANGE_CONDITION':
            return action.payload;
        default:
            return state;
    }
}