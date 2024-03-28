import React from 'react';
import './seongdong.scss';

export default function SeongdongLoader () {
    return (
        <div className="ajax-loader_seongdong">
                <div className="paw_seongdong disappear">   
                    <svg className="icon"><use href="#paw_seongdong" />               
                        <symbol id="paw_seongdong" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_seongdong disappear"><svg className="icon"><use href="#paw_seongdong" /></svg></div>
        </div>
        
    );
};

