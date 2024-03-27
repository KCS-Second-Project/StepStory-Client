import React from 'react';
import './right.css'
import MainMap from '../MainMap/MainMap';
import FriendpageButton from '../Buttons/FriendpageButton/MyStoryPageButton';

export default function RightPane ({pageInfo}) {
    
    
    if(pageInfo.page === 'myStory'){
        return (
            <div className="right-pane">
                <FriendpageButton />
                <MainMap/>
            </div>
    );}
    else{
        return(        
            <div className="right-pane">
                <MainMap/>
            </div> )

    }
};

