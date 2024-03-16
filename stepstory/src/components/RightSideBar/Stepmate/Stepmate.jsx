import React from 'react';
import './style.scss';


export default function Stepmate ({profileImg, username, follow}) {

    return (
        <div className="stepmate" >
            <img src={profileImg} className='profileImg' alt='profileImg' />
            <div className='username'>
                {username}
            </div>
            <div className={follow ? 'follow' : 'follow-request'}>
                {follow ? '팔로우' : '요청중'}
            </div>
        </div>
    );
};

;