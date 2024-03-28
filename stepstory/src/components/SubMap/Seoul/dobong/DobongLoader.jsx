import React from 'react';
import './dobong.scss';

export default function DobongLoader () {
    return (
        <div className="ajax-loader_dobong">
                <div className="paw_dobong disappear">   
                    <svg className="icon"><use href="#paw_dobong" />               
                        <symbol id="paw_dobong" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_dobong disappear"><svg className="icon"><use href="#paw_dobong" /></svg></div>
        </div>
        
    );
};

