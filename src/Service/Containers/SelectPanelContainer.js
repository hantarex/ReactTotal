import React from 'react';
import {connect} from 'react-redux';
import ReactLoading from 'react-loading';
import {css} from 'aphrodite';
import StyleLoading from "../Styles/StyleLoading";
import {changeCondition} from "../Actions/changeCondition";
import {SetBet} from "../Actions/SetBet";
import {SetCheck} from "../Actions/SetCheck";

const SelectPanelContainer = ({matchInfo, matchLoading, changeCondition, selectedCondition, setBet, bet, setCheck, use_check, infoPanel}) => {

    const setBetValue = (selectedCondition, data, event) =>{
        let obj = {};
        let newBet;
        switch (selectedCondition){
            case "1":
                setBet({
                    ...bet,
                    ...{
                        1: data
                    }
                });
                break;
            case "2":
                setBet({
                    ...bet,
                    ...{
                        2: event.target.value
                    }
                });
                break;
            case "3":
                let obj = {};
                obj[data] = event.target.value;
                newBet = {...bet[selectedCondition], ...obj};
                setBet({
                    ...bet,
                    ...{
                        3: newBet
                    }
                });
                break;
        }
    };

    const showConditionBet = () => {
        if (selectedCondition === null) return '';
        let val_1, val_2;
        switch (selectedCondition) {
            case "1":
                val_1=(
                    typeof bet[selectedCondition] !== 'undefined' ?  bet[selectedCondition] === matchInfo.team_1.team_id : ''
                );
                val_2=(
                    typeof bet[selectedCondition] !== 'undefined' ?  bet[selectedCondition] === matchInfo.team_2.team_id : ''
                );
                return (
                    <div className="type_1">
                        <div className="radio">
                            <label><input type="radio" name="type_1" value={true} onChange={(event) => {setBetValue(selectedCondition, matchInfo.team_1.team_id, event)}} checked={val_1}/>
                                {matchInfo.team_1.name}
                            </label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="type_1" value={true} onChange={(event) => {setBetValue(selectedCondition, matchInfo.team_2.team_id, event)}}  checked={val_2}/>
                                {matchInfo.team_2.name}
                            </label>
                        </div>
                    </div>
                );
            case "2":
                val_1=(
                    typeof bet[selectedCondition] !== 'undefined' ?  bet[selectedCondition] : ''
                );
                return (
                    <div className="type_2">
                        <span>Количество:</span>
                        <div className="form-group">
                            <input type="number" className="form-control" value={val_1} onChange={(event) => {setBetValue(selectedCondition, null, event)}}/>
                        </div>
                    </div>
                );
            case "3":
                val_1=(
                    typeof bet[selectedCondition] !== 'undefined'
                    && typeof bet[selectedCondition][matchInfo.team_1.team_id] !== 'undefined' ?  bet[selectedCondition][matchInfo.team_1.team_id] : ''
                );
                val_2=(
                    typeof bet[selectedCondition] !== 'undefined'
                    && typeof bet[selectedCondition][matchInfo.team_2.team_id] !== 'undefined' ?  bet[selectedCondition][matchInfo.team_2.team_id] : ''
                );
                return (
                    <div className="type_3">
                        <div className="command">
                            <div className="radio">
                                <span>
                                {matchInfo.team_1.name}
                                </span>
                            </div>
                            <div className="form-group">
                                <input type="number" value={val_1} className="form-control" onChange={(event) => {setBetValue(selectedCondition, matchInfo.team_1.team_id, event)}}/>
                            </div>
                        </div>
                        <div className="command">
                            <div className="radio">
                                <span>
                                {matchInfo.team_2.name}
                                </span>
                            </div>
                            <div className="form-group">
                                <input type="number" value={val_2} className="form-control" onChange={(event) => {setBetValue(selectedCondition, matchInfo.team_2.team_id, event)}}/>
                            </div>
                        </div>
                    </div>
                );
            default:
                return '';
        }
    };

    const showBetType = () => {
        return (
            <div className="condition">
                <span>На что ставим?</span>
                <select className="condition_bet form-control" onChange={(event) => {
                    changeCondition(event.target.value)
                }}>
                    {matchInfo.bets.bets.map((bet) => {
                        return (
                            <option key={bet.bets_type} value={bet.bets_type}>
                                {showHumanBetType(bet.bets_type)}
                            </option>
                        )
                    })}
                </select>
                {showConditionBet()}
            </div>
        )
    };

    const showHumanBetType = (bet) => {
        switch (bet) {
            case 1:
                return "Кто победит?";
            case 2:
                return "Разница мячей";
            case 3:
                return "Победитель и счёт";
            default:
                return "Ошибка";
        }
    };

    const showHumanBetTypeActive = (bet) => {
        switch (bet.bets_type) {
            case 1:
                return (
                    <div className="condition">
                        <span>На что ставим?</span>
                        <div className="condition_bet">
                            {showHumanBetType(bet.bets_type)}
                        </div>
                        <div className="type_1">
                            <div className="bet">
                                {bet.value.name}
                            </div>
                        </div>
                    </div>
                );
            default:
                return "Ошибка";
        }
    };

    const showCheckSubmitActive = (bet) => {
        return (
            <div className="show_check_submit">
                <span>Выбрать чек</span>
                <div className="check">
                    {bet.check}
                </div>
            </div>
        )
    };

    const changeCheck = (val) => {
        setCheck(val);
    };

    const showCheckSubmit = () => {
        return (
            <div className="show_check_submit">
                <span>Выбрать чек</span>
                <select className="check form-control" onChange={(event) => {
                    changeCheck(event.target.value)
                }}>
                    {matchInfo.checks.map((check, index) => {
                        return (
                            <option key={index} value={check} selected={check === use_check}>
                                Чек {check}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
    };

    const showActiveBet = () => {
        return matchInfo.bets.active.map((bet) => {
            return (
                <div key={bet.bets_id} className="active_bet">
                    {showHumanBetTypeActive(bet)}
                    {showCheckSubmitActive(bet)}
                    <div className="button_set">
                        <div className="button">
                            Ставка сделана
                        </div>
                    </div>
                </div>
            )
        })
    };

    const showSubmit = () => {
        switch (selectedCondition){
            case "1":
            case "2":
                if(typeof bet[selectedCondition] !== 'undefined') {
                    if(!isNaN(parseFloat(bet[selectedCondition])) && isFinite(bet[selectedCondition])) {
                        return (
                            <div className="button_set">
                                <button type="button" className="btn btn-primary">
                                    Сделать ставку!
                                </button>
                            </div>
                        )
                    } else {
                        return '';
                    }
                }
                break;
            case "3":
                if(typeof bet[selectedCondition] === 'object') {
                    let countNumber = 0;
                    Object.keys(bet[selectedCondition]).forEach(function (key, index) {
                        if(!isNaN(parseFloat(bet[selectedCondition][key])) && isFinite(bet[selectedCondition][key])){
                            countNumber++;
                        }
                    });
                    if(countNumber === 2) {
                        return (
                            <div className="button_set">
                                <button type="button" className="btn btn-primary">
                                    Сделать ставку!
                                </button>
                            </div>
                        )
                    } else {
                        return '';
                    }
                }

        }
    };

    const showBet = () => {
        if (matchInfo.checks.length > 0) {
            return (
                <div className="beat_bet">
                    {showBetType()}
                    {showCheckSubmit()}
                    {showSubmit()}
                </div>
            )
        } else {
            return '';
        }
    };

    const showPanel = () => {
        if(matchInfo === null && !matchLoading){
            return (
                <div className="work_panel">
                    <div  dangerouslySetInnerHTML={{__html:infoPanel}} />
                </div>
            )
        }
        if (matchLoading) {
            return (
                <div className="work_panel">
                    <div>
                        <ReactLoading className={css(StyleLoading.loading_match)} type="spin" color="#099fd1"
                                      height={50} width={50}/>
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
                                <img src="img/blank.gif" className={"flag " + matchInfo.team_1.flag}
                                     alt={matchInfo.team_1.name}/>
                                <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true"/>
                                <img src="img/blank.gif" className={"flag " + matchInfo.team_2.flag}
                                     alt={matchInfo.team_2.name}/>
                            </div>
                            {showActiveBet()}
                            {showBet()}
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
        matchLoading: state.matchLoading,
        selectedCondition: state.selectedCondition,
        bet: state.bet,
        use_check: state.setCheck,
        infoPanel: state.data.info,
    }),
    dispatch => ({
        changeCondition: (type) => {
            dispatch(changeCondition(type))
        },
        setBet: (data) => {
            dispatch(SetBet(data))
        },
        setCheck: (data) => {
            dispatch(SetCheck(data))
        }
    })
)
(SelectPanelContainer);