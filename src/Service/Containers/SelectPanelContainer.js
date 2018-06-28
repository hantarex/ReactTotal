import React from 'react';
import {connect} from 'react-redux';
import ReactLoading from 'react-loading';
import {css} from 'aphrodite';
import StyleLoading from "../Styles/StyleLoading";
import {changeCondition} from "../Actions/changeCondition";
import {SetBet} from "../Actions/SetBet";
import {SetCheck} from "../Actions/SetCheck";
import {setSubmitBet} from "../Actions/setSubmitBet";
import SendBet from "../FetchData/SendBet";

const SelectPanelContainer = ({matchInfo, matchLoading, changeCondition, selectedCondition, setBet, bet, setCheck, use_check, infoPanel, submitBetAction, onSubmitBet, footballMatches}) => {

    const setBetValue = (selectedCondition, data, event) =>{
        let obj = {};
        let newBet;
        switch (selectedCondition.toString()){
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
        switch (selectedCondition.toString()) {
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
                    {Object.keys(matchInfo.bets.bets).map((key, index) => {
                        return (
                            <option key={matchInfo.bets.bets[key].bets_type} value={matchInfo.bets.bets[key].bets_type} selected={selectedCondition.toString() === matchInfo.bets.bets[key].bets_type.toString() }>
                                {showHumanBetType(matchInfo.bets.bets[key].bets_type)}
                            </option>
                        )
                    })}
                </select>
                {showConditionBet()}
            </div>
        )
    };

    const showHumanBetType = (bet) => {
        switch (bet.toString()) {
            case "1":
                return "Кто победит?";
            case "2":
                return "Разница мячей";
            case "3":
                return "Победитель и счёт";
            default:
                return "Ошибка";
        }
    };

    const showHumanBetTypeActive = (bet) => {
        switch (bet.bets_type.toString()) {
            case "1":
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
            case "3":
                return (
                    <div className="condition">
                        <span>На что ставим?</span>
                        <div className="condition_bet">
                            {showHumanBetType(bet.bets_type)}
                        </div>
                        <div className="type_3">
                            <div className="command">
                                <div className="radio">
                                    <span>{bet.value.team_1.name}</span>
                                </div>
                                <div className="bet">
                                    {bet.value.team_1.value}
                                </div>
                            </div>
                            <div className="command">
                                <div className="radio">
                                    <span>{bet.value.team_2.name}</span>
                                </div>
                                <div className="bet">
                                    {bet.value.team_2.value}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "2":
                return (
                    <div className="condition">
                        <span>На что ставим?</span>
                        <div className="condition_bet">
                            {showHumanBetType(bet.bets_type)}
                        </div>
                        <div className="type_2">
                            <span>Количество:</span>
                            <div className="bet">
                                {bet.value}
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
                <div className="info">
                    Если угадаете начислим {bet.rewards}
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
                <select className="check form-control" style={{background: "#fff997"}} onChange={(event) => {
                    changeCheck(event.target.value)
                }}>
                    {Object.keys(matchInfo.checks).map((key, index) => {
                        return (
                            <option key={index} value={key} selected={key === use_check}>
                                Чек {matchInfo.checks[key]}
                            </option>
                        )
                    })}
                </select>
                <div className="info">
                    Если угадаете начислим {matchInfo.bets.bets[selectedCondition].rewards}
                </div>
            </div>
        )
    };

    const showActiveBet = () => {
        if(!matchInfo.bets.active) return '';
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

    const submitBet = () => {
        submitBetAction({matchInfo, bet, use_check, selectedCondition});
    };

    const showSubmit = () => {
        switch (selectedCondition.toString()){
            case "1":
            case "2":
                if(typeof bet[selectedCondition] !== 'undefined') {
                    if(!isNaN(parseFloat(bet[selectedCondition])) && isFinite(bet[selectedCondition])) {
                        return (
                            <div className="button_set">
                                <button type="button" className={"btn btn-primary" + (onSubmitBet?" loading": "")} onClick={submitBet} disabled={onSubmitBet}>
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
                                <button type="button" className={"btn btn-primary" + (onSubmitBet?" loading": "")} onClick={submitBet} disabled={onSubmitBet}>
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
        if (Object.keys(matchInfo.checks).length > 0) {
            return (
                <div className="beat_bet">
                    {showBetType()}
                    {showCheckSubmit()}
                    {showSubmit()}
                </div>
            )
        } else {
            return (
                <div className="empty">
                Активных чеков с датой покупки старше {footballMatches.date_start_check} не найдено. Для участия сделайте покупку в одном из наших магазинов.
                </div>
            );
        }
    };

    const showPanel = () => {
        if(matchInfo === null && !matchLoading){
            return (
                <div className="work_panel">
                    <div className="info_mini" dangerouslySetInnerHTML={{__html:infoPanel}} />
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
                                <img src="/css/flags/blank.gif" className={"flag " + matchInfo.team_1.flag}
                                     alt={matchInfo.team_1.name}/>
                                <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true"/>
                                <img src="/css/flags/blank.gif" className={"flag " + matchInfo.team_2.flag}
                                     alt={matchInfo.team_2.name}/>
                            </div>
                            {showActiveBet()}
                            {showBet()}
                        </div>
                    </div>
                </div>
            )
        }
    };

    return showPanel();
};

export default connect(
    state => ({
        matchInfo: state.dataMatch,
        matchLoading: state.matchLoading,
        selectedCondition: state.selectedCondition,
        bet: state.bet,
        footballMatches: state.data,
        use_check: state.setCheck,
        infoPanel: state.data.info,
        onSubmitBet: state.onSubmitBet,
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
        },
        submitBetAction: (data) => {
            dispatch(SendBet(data))
        }
    })
)
(SelectPanelContainer);