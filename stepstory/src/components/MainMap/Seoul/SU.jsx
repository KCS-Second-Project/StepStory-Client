import React from 'react';
import './su.scss';

export default function SU () {
    return (
        <div className="ajax-loader_su">
                <div className="paw_su disappear">   
                    <svg className="icon"><use href="#paw_su" />               
                        <symbol id="paw_su" viewBox="0 0 249 209.32">
                            <image href='/오리.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_su disappear"><svg className="icon"><use href="#paw_su" /></svg></div>
        </div>
        
    );
};

