import React from 'react';
import './gw.scss';

export default function GW () {
    return (
        <div className="ajax-loader_gw">
                <div className="paw_gw disappear">   
                    <svg className="icon"><use href="#paw_gw" />               
                        <symbol id="paw_gw" viewBox="0 0 249 209.32">
                            <image href='/오리.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gw disappear"><svg className="icon"><use href="#paw_gw" /></svg></div>
        </div>
        
    );
};

