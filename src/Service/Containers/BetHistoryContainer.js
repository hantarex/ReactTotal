import React from 'react';
import {connect} from "react-redux";
import ReactLoading from 'react-loading';
import StyleLoading from "../Styles/StyleLoading";
import {css} from 'aphrodite';
import GetHistory from "../FetchData/GetHistory";

const BetHistoryContainer = ({history, getHistory}) => {
    if (history === null) {
        getHistory();
        return (
            <div className="info">
                <div>
                    <ReactLoading className={css(StyleLoading.loading_match)} type="spin" color="#099fd1"
                                  height={50} width={50}/>
                </div>
            </div>
        )
    }
    return (
        <div className="info">
            <div>
                ok
            </div>
        </div>
    )
};

export default connect(
    state => ({
        history: state.history
    }),
    dispatch => ({
        getHistory: () => {dispatch(GetHistory())},
    })
)(BetHistoryContainer)