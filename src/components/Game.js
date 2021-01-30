import Board from './Board'
import {Link} from "react-router-dom";
import React, {useState} from "react";


export default function Game() {
    let playerX = localStorage.getItem('playerX');
    let playerO = localStorage.getItem('playerO');

    const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
    let HistoryPlayers = loadJSON(`${playerX}${playerO}`);

    let historyArr = HistoryPlayers ? HistoryPlayers["history"] : [Array(9).fill(null)];
    const [history, setHistory] = useState(historyArr);

    //let num = HistoryPlayers ? HistoryPlayers["history"].length : 0;
    //const [stepNumber, setStepNumber] = useState(num);

    //const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];

        // If user click an occupied square or if game is won, return
        if (winner || squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);

        console.log(squares);
        console.log(history);
    };

    //step - index of history   ( move )
    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };


    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }


    let status;
    let winnerPlayer;
    if (winner) {
        winnerPlayer = winner === "X" ? "Winner: " + playerX: "Winner: " + playerO;
    } else {
        status = "Next player: " + (xIsNext ? playerX + " (X)" : playerO + " (O)");
    }
    //step - value, move - index
    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            '<<  START  >>';
        return (
            <li key={move}>
                <button className="btn btn-outline-light" onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    const save = () => {
        const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));
        saveJSON(`${playerX}${playerO}`, {history});
    };


    return (
        <>
            <div className="game">
                    <div className="game-board">
                        <Board
                            squares={history[stepNumber]}
                            onClick={i => handleClick(i)}
                        />
                    </div>

                    <div className="game-info">
                        <div id="statId">{status}</div>
                        <div style={{color: "yellow"}}>{winnerPlayer}</div>
                        <ul>{moves}</ul>
                    </div>
            </div>
            <br/>
            <button className="btn btn-outline-light btn-block btn-sm" onClick={save}>Save</button>
            <br/>
            <div className="text-center">
                <Link to="/welcome">WELCOME</Link>
            </div>
        </>
    );

}
