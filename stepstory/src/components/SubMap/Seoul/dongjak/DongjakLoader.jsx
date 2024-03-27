import React from 'react';
import './dongjak.scss';

export default function DongjakLoader () {
    return (
        <div className="ajax-loader_dongjak">
                <div className="paw_dongjak disappear">   
                    <svg className="icon"><use href="#paw_dongjak" />               
                        <symbol id="paw_dongjak" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_dongjak disappear"><svg className="icon"><use href="#paw_dongjak" /></svg></div>
        </div>
        
    );
};

