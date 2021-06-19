import React from 'react';
import s from './increment.module.css'

type IncrementPropsType = {
    increment: () => void
}

const Increment = (props: IncrementPropsType) => {
    return (
        <div className={s.wrapper}>
            <button
                className={s.content}
                onClick={props.increment}
            >inc</button>
        </div>
    );
};

export default Increment;