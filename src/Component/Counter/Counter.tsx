import React from 'react';
import Button from "../Btn/Button";
import {CounterFaces} from "./CounterFaces/CounterFaces";
import style from './counter.module.css'


type CounterPropsType = {
    counter: number
    addIncrement: () => void
    resetIncrement: () => void
    maxValue: number
    minValue: number
    counterEditMode: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
}

export const Counter = (props: CounterPropsType) => {


    const incrementDisabledClass = `${style.btn} ${props.counter === props.maxValue ? style.disableBtn : ''} ${props.counterEditMode && style.disableBtn}`;
    const resetDisabledClass = `${style.btn} ${props.counter === props.minValue ? style.disableBtn : ''} ${props.counterEditMode && style.disableBtn}`;

    const disabledIncrementBtn = () => {
        if (props.counterEditMode) {
            return true
        }
        return props.counter === props.maxValue;
    }
    const disabledResetBtn = () => {
        if (props.counterEditMode) {
            return true
        }
        return props.counter === props.minValue;
    }

    return (
        <div className={style.body}>
            <CounterFaces
                counter={props.counter}
                maxValue={props.maxValue}
                counterEditMode={props.counterEditMode}
                errorMaxValue={props.errorMaxValue}
                errorStartValue={props.errorStartValue}
            />
            <div className={style.bottom}>
                <Button
                    className={incrementDisabledClass}
                    onClick={props.addIncrement}
                    disabled={disabledIncrementBtn()}
                >inc
                </Button>
                <Button
                    className={resetDisabledClass}
                    onClick={props.resetIncrement}
                    disabled={disabledResetBtn()}
                >reset
                </Button>
            </div>
        </div>
    );
};

