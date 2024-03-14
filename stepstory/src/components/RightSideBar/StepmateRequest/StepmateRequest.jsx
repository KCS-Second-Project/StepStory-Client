import React from 'react';
import './style.scss';

export default function StepmateRequest ({username, profileImg})  {
    return (
        <div className="request" >
            <img src={profileImg} className='request-profileImg' alt='request-profileImg'/>
                <div className='request-username'>
                    {username}
                </div>               
            <button className='request-accept-button' type='button'>수락</button>
            <button className='request-deny-button' type='button'>거절</button>                
        </div>
    );
};

 