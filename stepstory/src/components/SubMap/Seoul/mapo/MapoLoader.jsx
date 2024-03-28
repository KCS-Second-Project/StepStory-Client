import React from 'react';
import './mapo.scss';

export default function MapoLoader () {
    return (
        <div className="ajax-loader_mapo">
                <div className="paw_mapo disappear">   
                    <svg className="icon"><use href="#paw_mapo" />               
                        <symbol id="paw_mapo" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_mapo disappear"><svg className="icon"><use href="#paw_mapo" /></svg></div>
        </div>
        
    );
};

