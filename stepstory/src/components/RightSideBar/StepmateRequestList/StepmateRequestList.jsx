import React from 'react';
import requestLogo from '../../../assets/images/logos/stepmaterequestlogo.png';
import profileImg from '../../../assets/images/defaultprofile.png';
import './StepmatesRequestListStyle.scss'
import StepmateRequest from '../StepmateRequest/StepmateRequest';

export default function StepmateRequestList() {
    return (
        <div className='request-list'>
            <div className='request-list-logo'>
                <img src={requestLogo} className='requestLogo' alt='requestLogo'/>
                <h3>
                    NEW STEPMATES
                </h3>
            </div>
            <StepmateRequest username={'username'} profileImg={profileImg} />
            <StepmateRequest username={'username'} profileImg={profileImg} />
            <StepmateRequest username={'username'} profileImg={profileImg} />
            <StepmateRequest username={'username'} profileImg={profileImg} />
        </div>
      );
};

