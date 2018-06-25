import {setData} from "../Actions/setData";
import {MainLoadingActions} from "../Actions/MainLoadingAction";
import {setSubmitBet} from "../Actions/setSubmitBet";
import axios from 'axios';
import {setDataMatch} from "../Actions/setDataMatch";
import GetDataMatch from "./GetDataMatch";
import {changeCondition} from "../Actions/changeCondition";
import {SetCheck} from "../Actions/SetCheck";
import qs from 'querystring';

export default function (data) {
    return (dispatch) => {
        dispatch(setSubmitBet(true));
        axios.post("http://workgit_56/personal/index.php?op=totalizator&use=set_bet", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(res => {
            dispatch(setSubmitBet(false));
        }).catch(error => {
            dispatch(setSubmitBet(false));
            dispatch(GetDataMatch(data.matchInfo.match_id));
            dispatch(changeCondition(1));
            dispatch(SetCheck(null));
        })
    };
}