export function activePanel(state=null, action) {
    switch (action.type) {
        case "MATCH_SELECTED":
            return action.payload.id;
        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.payload;

        default:
            return state;
    }
}