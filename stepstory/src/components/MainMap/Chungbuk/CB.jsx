import React from 'react';
import './cb.scss';

export default function DaU () {
    return (
        <div className="ajax-loader_cb">
                <div className="paw_cb disappear">   
                    <svg className="icon"><use href="#paw_cb" />               
                        <symbol id="paw_cb" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_cb disappear"><svg className="icon"><use href="#paw_cb" /></svg></div>
        </div>
        
    );
};

