import axios from 'axios';
import qs from 'querystring';
import {setDataMatch} from "../Actions/setDataMatch";
import {MatchLoadingActions} from "../Actions/MatchLoadingAction";
import {SetCheck} from "../Actions/SetCheck";
import {SetAttempts} from "../Actions/SetAttempts";
import {SetBet} from "../Actions/SetBet";

export default function(data) {
    // let data_tmp = {
    //     match_id: 1,
    //     date: "30.06",
    //     game_type: "1/8",
    //     time: "19:00",
    //     place: "Лужники",
    //     checks: [
    //         1234,
    //         55666
    //     ],
    //     team_1:{
    //         team_id: 4,
    //         name: "Россия",
    //         flag: "flag-ru"
    //     },
    //     team_2:{
    //         team_id: 5,
    //         name: "Бразилия",
    //         flag: "flag-br"
    //     },
    //     bets: {
    //         active:[
    //             {
    //                 bets_id: 1,
    //                 bets_type: 1,
    //                 check: 1234,
    //                 value: {
    //                     team_id:4,
    //                     name: "Россия",
    //                     flag: "flag-ru"
    //                 }
    //             }
    //         ],
    //         bets:[
    //             {
    //                 bets_type: 1,
    //                 value: {
    //                     team_1:{
    //                         team_id: 4,
    //                         name: "Россия",
    //                         flag: "flag-ru"
    //                     },
    //                     team_2:{
    //                         team_id: 5,
    //                         name: "Бразилия",
    //                         flag: "flag-br"
    //                     }
    //                 }
    //             },
    //             {
    //                 bets_type: 2,
    //             },
    //             {
    //                 bets_type: 3,
    //                 value: {
    //                     team_1:{
    //                         team_id: 4,
    //                         name: "Россия",
    //                         flag: "flag-ru"
    //                     },
    //                     team_2:{
    //                         team_id: 5,
    //                         name: "Бразилия",
    //                         flag: "flag-br"
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // };
    //
    // const setDefaultCheck = (data) => {
    //     let check = null;
    //     if(data.checks.length > 0){
    //         check = data.checks[0];
    //     }
    //     return SetCheck(check);
    // };
    // // We return a function instead of an action object
    // return (dispatch) => {
    //     dispatch(MatchLoadingActions(true));
    //     setTimeout(() => {
    //         // This function is able to dispatch other action creators
    //         dispatch(setDataMatch(data));
    //         dispatch(setDefaultCheck(data));
    //         dispatch(MatchLoadingActions(false))
    //     }, 500);
    // };

    let post = {
        id: data
    };

    const setDefaultCheck = (data) => {
        let check = null;
        if(Object.keys(data.checks).length > 0){
            check = Object.keys(data.checks)[0];
        }
        return SetCheck(check);
    };

    return (dispatch) => {
        dispatch(MatchLoadingActions(true));
        axios.defaults.withCredentials = true;
        axios.post("http://workgit_56/personal/index.php?op=totalizator&use=match_info", post,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(res => {
            dispatch(setDataMatch(res.data));
            dispatch(SetAttempts(Object.keys(res.data.checks).length));
            dispatch(SetBet(null, "CLEAR_BET"));
            dispatch(setDefaultCheck(res.data));
            dispatch(MatchLoadingActions(false));
        })
    };
}