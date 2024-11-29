import React from 'react';

interface ButtonProps {
    onClick: () => void,
    active: boolean,
    children: React.ReactNode,
    className?: string,
    width?: string,
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({onClick, active, children, className, width, disabled}) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded ${
                active && !disabled
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-purple-500 border border-purple-500'
            }
            ${
                active && !disabled
                    ? 'hover:bg-purple-600 transition duration-300' : ''
            }
            ${className}`
            }
            style={{width: width ?? 'auto'}} // Use width prop if provided, otherwise use auto
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
