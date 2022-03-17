import React from 'react';
//Class, enum, interface,type abstract
interface InputProps {
    placeholder: string
}

function Input({placeholder}: InputProps) {
    return (
        <input placeholder={placeholder} />
    );
}

export default Input;