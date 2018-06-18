import {setData} from "../Actions/setData";
import {MainLoadingActions} from "../Actions/MainLoadingAction";

export default function() {
    let data = {
        attempts: 9,
        info: 'test',
        matches: [
            {
                id: 1,
                date: "30.06",
                time: "19:00",
                team_1:{
                    name: "Россия",
                    flag: "flag-ru"
                },
                team_2:{
                    name: "Бразилия",
                    flag: "flag-br"
                }
            }
        ]
    }
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(setData(data));
            dispatch(MainLoadingActions(false))
        }, 500);
    };
}