export const SetErrorBlock = (data, type) => {
    return {
        type: type,
        payload: data
    }
};