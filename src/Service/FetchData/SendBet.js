import {setSubmitBet} from "../Actions/setSubmitBet";
import axios from 'axios';
import GetDataMatch from "./GetDataMatch";
import {changeCondition} from "../Actions/changeCondition";
import {SetCheck} from "../Actions/SetCheck";

export default function (data) {
    return (dispatch) => {
        dispatch(setSubmitBet(true));
        axios.defaults.withCredentials = true;
        axios.post("http://workgit_56/personal/index.php?op=totalizator&use=set_bet", data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(res => {
            dispatch(setSubmitBet(false));
            dispatch(GetDataMatch(data.matchInfo.match_id));
            dispatch(changeCondition(1));
            dispatch(SetCheck(null));
        }).catch(error => {
            dispatch(setSubmitBet(false));
            dispatch(GetDataMatch(data.matchInfo.match_id));
            dispatch(changeCondition(1));
            dispatch(SetCheck(null));
        })
    };
}