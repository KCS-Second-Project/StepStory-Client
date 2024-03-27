import React from 'react';
import './eunpyeong.scss';

export default function EunpyeongLoader () {
    return (
        <div className="ajax-loader_eunpyeong">
                <div className="paw_eunpyeong disappear">   
                    <svg className="icon"><use href="#paw_eunpyeong" />               
                        <symbol id="paw_eunpyeong" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_eunpyeong disappear"><svg className="icon"><use href="#paw_eunpyeong" /></svg></div>
        </div>
        
    );
};

