import React, { useState } from 'react';

type Props = {
    onSBSubmit: (term: string) => void
};


const SearchBar = (props: Props) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSBSubmit(term)
    };

    return (
        <div className='ui segment'>
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input
                        type="text"
                        name="first-name"
                        placeholder=""
                        value={term}
                        onChange={(event) => {
                            setTerm(event.target.value);
                        }}
                    />
                </div>
            </form>
        </ div>
    )
};

export default SearchBar;