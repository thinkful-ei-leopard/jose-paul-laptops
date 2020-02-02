import React from 'react';
import Option from './Option'


export default function Form(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Option bananas={props.updated} mangos={props.optionState} kiwi={props.currentState} />
        </form>
    )
}
