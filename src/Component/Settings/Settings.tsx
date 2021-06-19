import React from 'react';
import style from './settings.module.css'
import {SettingsFaces} from "./SettingsFaces/SettingsFaces";
import Button from "../Btn/Button";


type SettingPropsType = {
    maxValue: number
    startValue: number
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    onActiveEditMode: () => void
    onDeactivateEditMode: () => void
    errorMaxValue: boolean
    counterEditMode: boolean
    errorStartValue: boolean
}
export const Settings: React.FC<SettingPropsType> = (props: SettingPropsType) => {

    const setDisabledClass = `${style.btn} ${props.counterEditMode ? '' : style.disableBtn}`

    const setSettings = () => {
        props.onDeactivateEditMode()
    }
    const disabledSetBtn = () => {
        return !props.counterEditMode || props.startValue < 0 || props.maxValue <= props.startValue;

    }

    return (
        <div>
            <div className={style.body}>
                <SettingsFaces
                    errorStartValue={props.errorStartValue}
                    errorMaxValue={props.errorMaxValue}
                    onActiveEditMode={props.onActiveEditMode}
                    onChangeStartValue={props.onChangeStartValue}
                    onChangeMaxValue={props.onChangeMaxValue}
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                />
                <div className={style.bottom}>
                    <Button
                        className={setDisabledClass}
                        onClick={setSettings}
                        disabled={disabledSetBtn()}
                    >set
                    </Button>
                </div>
            </div>
        </div>
    );
};
