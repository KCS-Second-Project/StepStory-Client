import React from 'react';
import './jb.scss';

export default function JB () {
    return (
        <div className="ajax-loader_jb">
                <div className="paw_jb disappear">   
                    <svg className="icon"><use href="#paw_jb" />               
                        <symbol id="paw_jb" viewBox="0 0 249 209.32">
                            <image href='/image/오리.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_jb disappear"><svg className="icon"><use href="#paw_jb" /></svg></div>
        </div>
        
    );
};

