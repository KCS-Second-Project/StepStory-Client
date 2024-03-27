import React, { useState } from 'react';
import './myStorypageButton.css';

const FriendpageButton = () => {
    const [activeButton, setActiveButton] = useState('public');

    const handleClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="friendpage-buttons">
            <button
                className={activeButton === 'public' ? 'active' : ''}
                onClick={() => handleClick('public')}
            >
                PUBLIC
            </button>
            <button
                className={activeButton === 'private' ? 'active' : ''}
                onClick={() => handleClick('private')}
            >
                PRIVATE
            </button>
            <button
                className={activeButton === 'friend' ? 'active' : ''}
                onClick={() => handleClick('friend')}
            >
                FRIEND
            </button>
        </div>
    );
};

export default FriendpageButton;
