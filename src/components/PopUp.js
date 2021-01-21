import React from 'react';
import '../Sass/PopUp.scss';
import DrinkIcon from '../assests/champagne 1.png'

const PopUp = () => {
    return (
        <div className='popup'>
            <div className="popup__header">
                <h1>Tastily done!</h1>
                <img src={DrinkIcon} alt=""/>
            </div>
        </div>
    );
}

export default PopUp;
