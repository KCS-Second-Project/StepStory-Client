import React from 'react';
import { useState } from 'react';
import './RightSideBarStyle.scss';
import StepmatesButton from '../Buttons/StepmatesButton/StepmatesButton.jsx'
import BestPostButton from '../Buttons/BestPostButton/BestPostButton.jsx';
import BestPostBanner from './BestPostBanner/BestPostBanner';
import StepmatesBanner from './StepmatesBanner/StepmatesBanner';

export default function RightSideBar() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menuIndex) => {
        setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
    }


    return (
        <div className='rightSideBar' >
            <div className='button-rightSideBar'>
                <StepmatesButton onClick={() => toggleMenu(1)} />
                <BestPostButton onClick={() => toggleMenu(2)}/>
            </div>
            <div className='banner-rightSideBar'>
                <div className={`menu1 ${activeMenu === 1 ? 'active' : ''}`}>
                    <StepmatesBanner />     
                </div>
                <div className={`menu2 ${activeMenu === 2 ? 'active' : ''}`}>
                    <BestPostBanner /> 
                </div>
            </div>           
        </div>
    );
};

