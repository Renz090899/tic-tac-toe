import React from 'react';

const Square = props => {
    return (
        <button className = {props.highlightWinSquare}
        onClick = {props.updateStateOnClick}
        >
        {props.value}
        </button>
    );
};
export default Square;