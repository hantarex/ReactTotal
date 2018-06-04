import {selectMatches} from "../Actions/SelectMacthes";
import {setLoading} from "../Actions/setLoading";

export default function(match) {
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(setLoading(true));
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(selectMatches(match));
            dispatch(setLoading(false));
        }, 5000);
    };
}