import React, {useState} from "react";
import {useLocation, useHistory} from "react-router-dom";

export default function Welcome() {

    const {state} = useLocation();
    let history = useHistory();

    const startGame = e => {
        e.preventDefault();
        let path = `/registration`;
        history.push(path);

    };
    return (
        <div className="container">
            <div className="row min-vh-100 align-items-center text-center">
                <div className="col-md-12">
                    <h3>Welcome to tic-tac-toe</h3>
                    <button className="btn btn-light" onClick={startGame}>Start game</button>
                </div>
            </div>

        </div>

    );
}