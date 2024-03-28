import React from 'react';
import './gangdong.scss';

export default function GangdongLoader () {
    return (
        <div className="ajax-loader_gangdong">
                <div className="paw_gangdong disappear">   
                    <svg className="icon"><use href="#paw_gangdong" />               
                        <symbol id="paw_gangdong" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gangdong disappear"><svg className="icon"><use href="#paw_gangdong" /></svg></div>
        </div>
        
    );
};

