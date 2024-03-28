import React from 'react';
import './gwanak.scss';

export default function GwanakLoader () {
    return (
        <div className="ajax-loader_gwanak">
                <div className="paw_gwanak disappear">   
                    <svg className="icon"><use href="#paw_gwanak" />               
                        <symbol id="paw_gwanak" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gwanak disappear"><svg className="icon"><use href="#paw_gwanak" /></svg></div>
        </div>
        
    );
};

