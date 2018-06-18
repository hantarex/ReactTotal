import React from 'react';
import {connect} from 'react-redux';
import ReactLoading from 'react-loading';
import {css} from 'aphrodite';
import StyleLoading from "../Styles/StyleLoading";

const SelectPanelContainer = ({matchInfo, matchLoading}) => {

    const showPanel = () => {
        if(matchLoading){
            return (
                <div className="work_panel">
                    <div>
                        <ReactLoading className={css(StyleLoading.loading_match)} type="spin" color="#099fd1" height={50} width={50} />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="work_panel">
                    <div>
                        <div className="header">
                            <div className="data">
                                {matchInfo.date}
                            </div>
                            <div className="game_type">
                                {matchInfo.game_type}
                            </div>
                            <div className="commands">
                                <div className="head">
                                    <span className="team">
                                        {matchInfo.team_1.name}
                                    </span>
                                        <span className="delimiter">
                                        -
                                    </span>
                                        <span className="team">
                                        {matchInfo.team_2.name}
                                    </span>
                                </div>
                                <div className="foot">
                                    <div className="time">
                                        {matchInfo.time} {matchInfo.place}
                                    </div>
                                </div>
                            </div>
                            <div className="flags">
                                <img src="img/blank.gif" className={"flag " +  matchInfo.team_1.flag} alt={matchInfo.team_1.name} />
                                <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true" />
                                <img src="img/blank.gif" className={"flag " +  matchInfo.team_2.flag} alt={matchInfo.team_2.name} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return showPanel();
}

export default connect(
    state => ({
        matchInfo: state.dataMatch,
        matchLoading: state.matchLoading
    })
)(SelectPanelContainer);