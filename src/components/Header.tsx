import React from 'react';
type Props = {
    title: string
}

const Header = (props: Props) => {
    return (
        <h3 className="ui dividing header">
            {props.title}
        </h3>
    )
}

export default Header;