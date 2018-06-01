export const selectMatches = (match) => {
    return {
        type: "MATCH_SELECTED",
        payload: match
    }
};