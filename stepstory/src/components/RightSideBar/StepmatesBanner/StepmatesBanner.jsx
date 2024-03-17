import React from 'react';
import './StepmatesBannerStyle.scss';
import StepmatesList from '../StepmateList/StepmatesList';
import StepmatesRequestList from '../StepmateRequestList/StepmateRequestList';


export default function StepmatesBanner() {
    return (
        <div className='stepmatesBanner'>
            <StepmatesList />
            <StepmatesRequestList />
        </div>
    );
};

