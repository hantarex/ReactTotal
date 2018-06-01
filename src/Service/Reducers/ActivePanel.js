const activePanel = (state=null, action) => {
    switch (action.type) {
        case "MATCH_SELECTED":
            return action.payload.id;
        default:
            return state;
    }
};

export default activePanel;