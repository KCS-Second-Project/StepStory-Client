import React from 'react';
import './jung.scss';

export default function JungLoader () {
    return (
        <div className="ajax-loader_jung">
                <div className="paw_jung disappear">   
                    <svg className="icon"><use href="#paw_jung" />               
                        <symbol id="paw_jung" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_jung disappear"><svg className="icon"><use href="#paw_jung" /></svg></div>
        </div>
        
    );
};

