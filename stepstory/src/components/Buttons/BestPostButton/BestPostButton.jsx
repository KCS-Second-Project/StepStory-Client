import React from 'react';
import BestpPostButtonImg from '../../../assets/images/buttons/bestpostbutton.png'
import './BestPostButtonStyle.scss';


export default function BestPostButton ({onClick}) {
    return (
        <button type='button' className='trophyButton' onClick={onClick}>
            <img src={BestpPostButtonImg} className='trophyImg' alt='trophyImg' />
        </button >
    );
};

