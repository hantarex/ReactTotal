import React from 'react';
import Header from "./Header";
import {BrowserRouter as Router} from "react-router-dom";
import Totalizator from "./Totalizator";
import {connect} from "react-redux";
import ReactLoading from 'react-loading';
import {css} from 'aphrodite';
import StyleLoading from "../Styles/StyleLoading";
import GetData from "../FetchData/GetData";


const Body = ({mainLoading, onGetData, errorBlock}) => {
    if (mainLoading) {
        onGetData();
    }
    const showMain = () => {
        if (mainLoading) {
            return (
                <div style={{fontSize: '14px'}}>
                    <ReactLoading className={css(StyleLoading.loading)} type="spin" color="#099fd1" height={150}
                                  width={150}/>
                </div>
            )
        } else if (errorBlock.active === 1) {
            return (
                <div style={{fontSize: '14px'}}>
                    <div className="error">
                        {errorBlock.text}
                    </div>
                </div>
            )
        }
        else {
            return (
                <Router basename="/totalizator">
                    <div style={{fontSize: '14px'}}>
                        <Header/>
                        <Totalizator/>
                    </div>
                </Router>
            )
        }
    };
    return (
        showMain()
    );
};

export default connect(
    state => ({
        mainLoading: state.mainLoading,
        errorBlock: state.errorBlock,
    }),
    dispatch => ({
            onGetData: () => {
                dispatch(GetData())
            }
        }
    )
)(Body)