import React from 'react';
import './seongbuk.scss';

export default function SeongbukLoader () {
    return (
        <div className="ajax-loader_seongbuk">
                <div className="paw_seongbuk disappear">   
                    <svg className="icon"><use href="#paw_seongbuk" />               
                        <symbol id="paw_seongbuk" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_seongbuk disappear"><svg className="icon"><use href="#paw_seongbuk" /></svg></div>
        </div>
        
    );
};

