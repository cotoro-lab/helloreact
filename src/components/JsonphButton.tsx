import React from 'react';


type Props = {
    onClickElement: () => void
    color: string
    text: string
}

const JsonphButton = (props: Props) => {
    return (
        <button onClick={props.onClickElement} className={`ui ${props.color} button`}>{props.text}</button>
    )
};

export default JsonphButton;