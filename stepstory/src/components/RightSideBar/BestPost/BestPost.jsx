import React from 'react';
import './BestPostStyle.scss';
import bestPostImg from '../../../assets/images/bestpostdummyimg.avif';
import wanttogo from '../../../assets/images/buttons/wanttogobutton.png';

export default function BestPost ({profile,username,title, wantToGoCount, date, place}) {
    return (
        <div className='bestPost'>
            <img src={bestPostImg} className='bestPostImg' alt='bestPostImg' />
            <div className='bestPostDescrition'>
                <div className='bestPostUser'>
                    <img src={profile} className='bestPostUserProfileImg' alt='profileImg' />
                    <div className='usernameAndWantTogo'>
                        <div className='bestPostUsername'>
                            {username}
                        </div>
                        <div className='bestPostWantToGoCount'>
                            <img src={wanttogo} className='bestPostStepImg' alt='bestPostStepImg' />
                                {wantToGoCount}

                        </div>
                    </div>
                </div>

                <div className='postTitle'>
                    {title}
                </div>
                <div className='postDate'>
                    {date}
                </div>
                <div className='postPlace'>
                    {place}
                </div>
            </div>
        </div>
    );
};

