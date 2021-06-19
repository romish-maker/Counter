import React from 'react';
import style from './counterFaces.module.css'

type CounterFacesPropsType = {
    counter: number
    maxValue: number
    counterEditMode: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
}


export const CounterFaces = (props: CounterFacesPropsType) => {
    const counterClass = `${style.counter__span} ${props.counter === props.maxValue ? style.red : ''}`;
    const editTextClass = `${style.counter__edit_text} ${props.errorMaxValue || props.errorStartValue ? style.red : ''}`
    const editText = props.errorMaxValue || props.errorStartValue ? 'Incorrect value!' : 'enter values and press "set"'
    return (
        <div className={style.counter}>
            {
                props.counterEditMode
                    ? <span className={editTextClass}>{editText}</span>
                    : <span className={counterClass}>{props.counter}</span>
            }
        </div>
    );
};

