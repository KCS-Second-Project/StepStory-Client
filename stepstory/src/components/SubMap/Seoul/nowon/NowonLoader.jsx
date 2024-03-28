import React from 'react';
import './nowon.scss';

export default function NowonLoader () {
    return (
        <div className="ajax-loader_nowon">
                <div className="paw_nowon disappear">   
                    <svg className="icon"><use href="#paw_nowon" />               
                        <symbol id="paw_nowon" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_nowon disappear"><svg className="icon"><use href="#paw_nowon" /></svg></div>
        </div>
        
    );
};

