import React from 'react';

export const Button = (props) => (
    <button className='key' onClick={() => props.onClick()}>{props.children}</button>
)

export default Button;