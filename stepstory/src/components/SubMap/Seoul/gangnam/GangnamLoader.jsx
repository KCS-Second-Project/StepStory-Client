import React from 'react';
import './gangnam.scss';

export default function GangnamLoader () {
    return (
        <div className="ajax-loader_gangnam">
                <div className="paw_gangnam disappear">   
                    <svg className="icon"><use href="#paw_gangnam" />               
                        <symbol id="paw_gangnam" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gangnam disappear"><svg className="icon"><use href="#paw_gangnam" /></svg></div>
        </div>
        
    );
};

