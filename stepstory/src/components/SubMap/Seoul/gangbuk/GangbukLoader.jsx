import React from 'react';
import './gangbuk.scss';

export default function GangbukLoader () {
    return (
        <div className="ajax-loader_gangbuk">
                <div className="paw_gangbuk disappear">   
                    <svg className="icon"><use href="#paw_gangbuk" />               
                        <symbol id="paw_gangbuk" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gangbuk disappear"><svg className="icon"><use href="#paw_gangbuk" /></svg></div>
        </div>
        
    );
};

