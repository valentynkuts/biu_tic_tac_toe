import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

export default function Formularz() {
    let [val1, setVal1] = useState("");
    let [val2, setVal2] = useState("");
    let [size, setSize] = useState("");

    const size1 = "40";
    const size2 = "60";
    const size3 = "80";


    const reset = e => {
        e.preventDefault();
        size = "";
        setSize(size);

        val1 = ""
        setVal1(val1);
        val2 = "";
        setVal2(val2);

    };

    const onValueChange = e => {
        setSize(e.target.value);
    }

    let history = useHistory();

    function goToGame(e) {
        e.preventDefault();
        history.push("/game");
    }

    useEffect(() => {
        val1 = val1 === "" ? "PlayerX" : val1;
        localStorage.setItem("playerX", val1);
        val2 = val2 === "" ? "PlayerO" : val2;
        localStorage.setItem("playerO", val2);
        localStorage.setItem("size", size);

    });

    return (
        <>
            <form>
                <input className="form-control form-control-sm"
                       value={val1}
                       onChange={event => setVal1(event.target.value)}
                       type="text"
                       placeholder="player X ..."
                       required
                />
                <br/>
                <input className="form-control form-control-sm"
                       value={val2}
                       onChange={event => setVal2(event.target.value)}
                       type="text"
                       placeholder="player O..."
                       required
                />
                <br/>

                <input
                    type="radio"
                    value={size1}
                    checked={size === size1}
                    onChange={onValueChange}
                />
                <label>
                    {size1} X {size1}
                </label>

                <br/>
                <input
                    type="radio"
                    value={size2}
                    checked={size === size2}
                    onChange={onValueChange}
                />
                <label>
                    {size2} X {size2}
                </label>
                <br/>
                <input
                    type="radio"
                    value={size3}
                    checked={size === size3}
                    onChange={onValueChange}
                />
                <label>
                    {size3} X {size3}
                </label>

                <button className="btn btn-outline-light btn-block btn-sm" onClick={goToGame}>Submit</button>
                <br/>
                <button className="btn btn-outline-light btn-block btn-sm" onClick={reset}>Reset</button>
            </form>

            <br/>
            <div className="text-center">
                <Link to="/welcome">WELCOME</Link>
            </div>

        </>

    );
}