import {setHistory} from "../Actions/setHistory";
import {HistoryLoadingActions} from "../Actions/HistoryLoadingAction";
import axios from 'axios';

export default function() {
    // let data = {
    //     bets: [
    //         {
    //             id: 1,
    //             date: "30.06",
    //             time: "19:00",
    //             check: "1231",
    //             teams:{
    //                 4:{
    //                     name: "Россия",
    //                     flag: "flag-ru"
    //                 },
    //                 5:{
    //                     name: "Бразилия",
    //                     flag: "flag-br"
    //                 },
    //             },
    //             bet: {
    //                 bets_type: 3,
    //                 value: {
    //                     4: 12,
    //                     5: 1,
    //                 }
    //             },
    //             result: "В ожидании матча"
    //         },
    //         {
    //             id: 2,
    //             date: "30.06",
    //             time: "19:00",
    //             check: "1231",
    //             teams:{
    //                 4:{
    //                     name: "Россия",
    //                     flag: "flag-ru"
    //                 },
    //                 5:{
    //                     name: "Бразилия",
    //                     flag: "flag-br"
    //                 },
    //             },
    //             bet: {
    //                 bets_type: 2,
    //                 value: 45
    //             },
    //             result: "Нет"
    //         },
    //         {
    //             id: 1,
    //             date: "30.06",
    //             time: "19:00",
    //             check: "1231",
    //             teams:{
    //                 4:{
    //                     name: "Россия",
    //                     flag: "flag-ru"
    //                 },
    //                 5:{
    //                     name: "Бразилия",
    //                     flag: "flag-br"
    //                 },
    //             },
    //             bet: {
    //                 bets_type: 1,
    //                 value: 4
    //             },
    //             result: "Да"
    //         },
    //     ]
    // };
    // We return a function instead of an action object
    // return (dispatch) => {
    //     setTimeout(() => {
    //         // This function is able to dispatch other action creators
    //         dispatch(setHistory(data));
    //         dispatch(HistoryLoadingActions(false))
    //     }, 500);
    // };
    return (dispatch) => {
        axios.defaults.withCredentials = true;
        axios.post("http://workgit_56/personal/index.php?op=totalizator&use=get_history").then(res => {
            dispatch(setHistory(res.data));
            dispatch(HistoryLoadingActions(false))
        })
    };
}