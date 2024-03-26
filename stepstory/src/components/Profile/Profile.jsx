import React from 'react';
import './profile.css'
import defaultProfileImg from '../../assets/images/defaultprofile.png';

export default function Profile ()  {
    return (
        <div className='userProfile'>
            <div className='userProfileRealArea'>
                <div className='userProfileImgAndName'>
                    <div className='userProfileImg'>
                        <img src={defaultProfileImg} alt='userProfileImg' />
                    </div>
                    <div className='userProfileName'>
                        <p>NAME</p>
                        <div className='userName'>
                            의왕시 물주먹
                        </div>
                    </div>
                </div>
                <div className='userProfileIntro'>
                    <div id='INTRODUCE'><p>INTRODUCE</p></div>
                    <text className='userIntro'>
                        가나다라마바사아자차카타파하아자라자바하아어고르다허드엏루아니낭런디
                    </text>
                </div>
            </div>
        </div>
    );
};

