import {setData} from "../Actions/setData";
import {MainLoadingActions} from "../Actions/MainLoadingAction";

export default function() {
    let data = {
        attempts: 9,
        info: 'test <b>1231</b>',
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
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
            {
                id: 2,
                date: "31.06",
                time: "21:00",
                team_1:{
                    name: "Португалия",
                    flag: "flag-pt"
                },
                team_2:{
                    name: "Швеция",
                    flag: "flag-se"
                }
            },
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