import React from "react"

function Square(props) {
    let size = localStorage.getItem('size');
    size = size === "" ? "60px" : size + "px";

    return (
        <button  className="btn btn-outline-light" onClick={props.onClick} style={{height: size, width: size}}>
            {props.value}
        </button>
    );
}

export default Square;



