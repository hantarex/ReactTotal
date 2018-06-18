import React from 'react';
import Header from "./Header";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Totalizator from "./Totalizator";
import {connect} from "react-redux";
import ReactLoading from 'react-loading';
import {css} from 'aphrodite';
import StyleLoading from "../Styles/StyleLoading";
import GetData from "../FetchData/GetData";

const Body = ({mainLoading, onGetData}) => {
    if(mainLoading) {
        onGetData();
    }
    const showMain = () => {
        if(mainLoading) {
            return(
                <ReactLoading className={css(StyleLoading.loading)} type="spin" color="#099fd1" height={150} width={150} />
            )
        } else {
            return (
                <div style={{fontSize: '14px'}}>
                    <Header/>
                    <Totalizator/>
                </div>
            )
        }
    };
    return (
        showMain()
    );
};

export default connect(
    state => ({
        mainLoading: state.mainLoading
    }),
    dispatch => ({
            onGetData: () => {
                dispatch(GetData())
            }
        }
    )
)(Body)