import React, {ChangeEvent} from 'react';
import './App.css';

function TextBox(props: {label: string; change: (name: string) => void}) {
    const myHandler = (e: ChangeEvent<HTMLInputElement>) => {props.change(e.target.value)}

    return (
        <label>
            {props.label}
            <input type="text" onChange={myHandler}/>
        </label>
    )
}

export default TextBox;