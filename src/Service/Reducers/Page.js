export function Page(state="", action) {
    switch (action.type) {
        case 'PAGE_SET':
            return action.payload;
        default:
            return state;
    }
}