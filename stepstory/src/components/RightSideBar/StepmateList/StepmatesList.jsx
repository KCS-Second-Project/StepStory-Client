import React from 'react';
import profileImg from '../../assets/images/defaultprofile.png';
import stepmatesListLogo from '../../assets/images/logos/stepmatelistlogo.png';
import './style.scss';
import Stepmate from '../Stepmate/Stepmate';

export default function FriendsMenu(){
    return (
        <div className='list'>
            <div className='list-logo'>
                <img src={stepmatesListLogo} className='stepmatesListLogo' alt='stepmatesListLogo' />
                <h3>
                    LIST
                </h3>
            </div>
            <Stepmate username={'가나다라마바사아자차카타파'} follow = {true} profileImg={profileImg} />
            <Stepmate username={'abcdefghijklmnopqrstuvwxy'} follow = {false} profileImg={profileImg} />
            <Stepmate username={'Lim98'} follow = {true} profileImg={profileImg} />
            <Stepmate username={'Yang01'} follow = {true} profileImg={profileImg} />
            <Stepmate username={'Lee'} follow = {true} profileImg={profileImg} />
      </div>
  );

};