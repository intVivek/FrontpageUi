
import type { Ref } from 'react';
import React, {forwardRef} from 'react';
import './Button.scss';

type ButtonProps = {
    primary?: boolean;
    secondary?: boolean;
    mini?: boolean;
    className?: string;
    label?: string;
    children?: React.ReactNode;
}

export const Button = forwardRef(({
        primary,
        secondary,
        mini,
        className,
        label,
        ...props
    }   : ButtonProps,
    ref : Ref<HTMLButtonElement>) => {
    return (
        <button
            className={
                `base 
                ${primary?'primary':''} 
                ${secondary?'secondary':''} 
                ${mini?'mini':''} 
                ${className}`
            }
            {...props}
            ref={ref}
        >
            {props.children || label}
        </button>
    );
});

export default Button;
