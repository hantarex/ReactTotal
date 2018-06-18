import {setDataMatch} from "../Actions/setDataMatch";
import {MatchLoadingActions} from "../Actions/MatchLoadingAction";

export default function() {
    let data = {
        match_id: 1,
        date: "30.06",
        game_type: "1/8",
        time: "19:00",
        place: "Лужники",
        team_1:{
            team_id: 4,
            name: "Россия",
            flag: "flag-ru"
        },
        team_2:{
            team_id: 5,
            name: "Бразилия",
            flag: "flag-br"
        },
        bets: {
            active:{
                bets_id: 1,
                check: 1234,
                value: {
                    team_id:4,
                    name: "Россия",
                    flag: "flag-ru"
                }
            }
        }
    }
    // We return a function instead of an action object
    return (dispatch) => {
        dispatch(MatchLoadingActions(true));
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(setDataMatch(data));
            dispatch(MatchLoadingActions(false))
        }, 500);
    };
}