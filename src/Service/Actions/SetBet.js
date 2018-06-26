export const SetBet = (data, type = "SET_BET") => {
    return {
        type: type,
        payload: data
    }
};