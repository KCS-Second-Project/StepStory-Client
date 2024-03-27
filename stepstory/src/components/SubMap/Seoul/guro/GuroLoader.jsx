import React from 'react';
import './guro.scss';

export default function GuroLoader () {
    return (
        <div className="ajax-loader_guro">
                <div className="paw_guro disappear">   
                    <svg className="icon"><use href="#paw_guro" />               
                        <symbol id="paw_guro" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_guro disappear"><svg className="icon"><use href="#paw_guro" /></svg></div>
        </div>
        
    );
};

