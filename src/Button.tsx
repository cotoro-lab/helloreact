import React from 'react';

type Props = {
    title: string
}


const Button = (props: Props) => {
    return (
        <button className="ui basic button">
            <i className="icon user" />
            {props.title}
        </button>
    )
}

export default Button;