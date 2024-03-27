import React from 'react';
import './seocho.scss';

export default function SeochoLoader () {
    return (
        <div className="ajax-loader_seocho">
                <div className="paw_seocho disappear">   
                    <svg className="icon"><use href="#paw_seocho" />               
                        <symbol id="paw_seocho" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_seocho disappear"><svg className="icon"><use href="#paw_seocho" /></svg></div>
        </div>
        
    );
};

