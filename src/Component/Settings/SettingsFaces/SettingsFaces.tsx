import React, {ChangeEvent} from 'react';
import style from './settingsFaces.module.css';


type SettingsFacesType = {
    maxValue: number
    startValue: number
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    onActiveEditMode: () => void
    errorMaxValue: boolean
    errorStartValue: boolean
}

export const SettingsFaces = (props: SettingsFacesType) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.onChangeMaxValue(value)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.onChangeStartValue(value)
    }

    const inputClassMaxValue = `${style.input__number} ${props.errorMaxValue ? style.error : ''}`
    const inputClassStartValue = `${style.input__number} ${props.errorStartValue ? style.error : ''}`


    return (
        <div className={style.counter}>
            <div className={style.input}>
                <div className={style.input__top}>
                    <p className={style.input__name}>Max value:</p>
                    <input
                        onFocus={props.onActiveEditMode}
                        onChange={onChangeMaxValueHandler}
                        value={props.maxValue}
                        className={inputClassMaxValue}
                        type="number"
                    />
                </div>
                <div className={style.input__bottom}>
                    <p className={style.input__name}>Start value:</p>
                    <input
                        onFocus={props.onActiveEditMode}
                        onChange={onChangeStartValueHandler}
                        value={props.startValue}
                        className={inputClassStartValue}
                        type="number"
                    />
                </div>
            </div>
        </div>
    );
};

