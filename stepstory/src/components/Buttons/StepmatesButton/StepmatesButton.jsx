import React from 'react';
import StepmatesButtonImg from '../../../assets/images/buttons/stepmatesbutton.png';
import './StepmatesButtonStyle.scss';


export default function StepmatesButton ({ onClick }) {
    return (
        <button type='button' className='stepmatesButton' onClick={onClick}>
            <img src={StepmatesButtonImg} className='stepmatesImg' alt='stepmatesImg' />
        </button >
    );
};

