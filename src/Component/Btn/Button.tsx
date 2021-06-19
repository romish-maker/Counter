import React from 'react';
type ButtonPropsType = {
    className: string
    onClick: () => void
    disabled: boolean
    children: any
}
const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
            >{props.children}
            </button>
        </div>
    );
};

export default Button;