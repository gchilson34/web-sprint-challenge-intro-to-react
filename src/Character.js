import React from 'react';
import App from './App'


export const Character = props => {
    const { character } = props;

    return (
        <div className='Character'>
            {props.character.map(characters => {
                return characters
            })}
        </div>
    )
}