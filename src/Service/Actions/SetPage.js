export const SetPage = (data, type = "PAGE_SET") => {
    return {
        type: type,
        payload: data
    }
};