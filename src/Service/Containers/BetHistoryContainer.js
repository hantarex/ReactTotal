import React from 'react';
import {connect} from "react-redux";
import ReactLoading from 'react-loading';
import StyleLoading from "../Styles/StyleLoading";
import {css} from 'aphrodite';
import GetHistory from "../FetchData/GetHistory";

const BetHistoryContainer = ({history, getHistory}) => {
    const showGame = (teams) => {
        let team = Object.keys(teams).map((key) => {return teams[key].name});
        return (
            <td>
                {team.join(" x ")}
            </td>
        )
    };
    const showBetCol = (bet) => {
        switch (bet.bet.bets_type.toString()){
            case "1":
                return (
                    <td>
                        На победу: {bet.teams[bet.bet.value].name}
                    </td>
                );
                break;
            case "2":
                return (
                    <td>
                        На разницу: {bet.bet.value}
                    </td>
                );
                break;
            case "3":
                let team = Object.keys(bet.bet.value).map((key) => {return (bet.teams[key].name + ":<b>" + bet.bet.value[key]+"</b>")});
                return (
                    <td dangerouslySetInnerHTML={{__html:"Точный счёт: " + team.join(" x ")}} />
                );
                break;
            default:
                return (
                  <td>
                      ok
                  </td>
                );
        }
    };
    const showResult = (result) => {
        return (
            <td>
                {result}
            </td>
        );
    }
    const showBet = (bet) => {
        switch (bet.bet.bets_type.toString()){
            case "1":
            case "2":
            case "3":
                return (
                    <tr>
                        <th>
                            {bet.check}
                        </th>
                        {showGame(bet.teams)}
                        {showBetCol(bet)}
                        {showResult(bet.result)}
                    </tr>
                );
                break;
            default:
                return (
                    <div>
                        ok
                    </div>
                );
        }
    };

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
    } else if(typeof history.bets !== 'undefined' && history.bets.length === 0) {
        return (
            <div className="info">
                <div>
                    Ставок нет
                </div>
            </div>
        )
    }
    return (
        <div className="info">
            <div>
                <table className="table table-sm table-hover">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">
                            Номер чека
                        </th>
                        <th scope="col">
                            Игра
                        </th>
                        <th scope="col">
                            Ставка
                        </th>
                        <th scope="col">
                            Мой выигрыш
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                {history.bets.map((bet) => {
                    return showBet(bet)
                })}
                    </tbody>
                </table>
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