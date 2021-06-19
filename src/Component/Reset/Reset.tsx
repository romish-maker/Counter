import React, {FC} from 'react';
import s from './reset.module.css'

type ResetPropsType = {
    count: number
    reset: () => void
}

const Reset: FC<ResetPropsType> = ({reset, count}) => {
    const getValidDisabledValue = (): boolean => count === 5 ? false : true

    return (
        <div className={s.wrapper}>
            <button
                disabled={getValidDisabledValue()}
                className={getValidDisabledValue() ? s.disabledClass : s.content}
                onClick={reset}>Reset
            </button>
        </div>
    )
}

export default Reset;