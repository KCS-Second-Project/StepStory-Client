import React from 'react';
import BestPost from '../BestPost/BestPost';
import profile from '../../../assets/images/defaultprofile.png';
import './BestPostBannerStyle.scss'




export default function BestPostBanner () {



    return (
        <div className='bestPostBanner'>
            <BestPost 
                profile={profile} 
                username={'Username'} 
                title={'test'} 
                wantToGoCount={999} 
                date={'2024-03-01 ~ 20240-03-11'} 
                place={'가산디지털단지'}
            />
            <BestPost 
                profile={profile} 
                username={'Username'} 
                title={'test'} 
                wantToGoCount={999} 
                date={'2024-03-01 ~ 20240-03-11'} 
                place={'가산디지털단지'}
            />
            <BestPost 
                profile={profile} 
                username={'Username'} 
                title={'test'} 
                wantToGoCount={999} 
                date={'2024-03-01 ~ 20240-03-11'} 
                place={'가산디지털단지'}
            />
            <BestPost 
                profile={profile} 
                username={'Username'} 
                title={'test'} 
                wantToGoCount={999} 
                date={'2024-03-01 ~ 20240-03-11'} 
                place={'가산디지털단지'}
            />
        </div>
    );
};
