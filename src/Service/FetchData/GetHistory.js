import {setHistory} from "../Actions/setHistory";
import {HistoryLoadingActions} from "../Actions/HistoryLoadingAction";

export default function() {
    let data = {
        bets: [
            {
                id: 1,
                date: "30.06",
                time: "19:00",
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
                bet: {
                    bets_type: 3,
                    value: {
                        4: 12,
                        5: 1,
                    }
                }
            },
            {
                id: 2,
                date: "30.06",
                time: "19:00",
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
                bet: {
                    bets_type: 2,
                    value: 4
                }
            },
            {
                id: 1,
                date: "30.06",
                time: "19:00",
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
                bet: {
                    bets_type: 1,
                    value: 4
                }
            },
        ]
    };
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(setHistory(data));
            dispatch(HistoryLoadingActions(false))
        }, 500);
    };
}