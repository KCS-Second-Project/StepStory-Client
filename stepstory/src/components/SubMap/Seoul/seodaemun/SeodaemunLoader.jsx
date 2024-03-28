import React from 'react';
import './seodaemun.scss';

export default function SeodaemunLoader () {
    return (
        <div className="ajax-loader_seodaemun">
                <div className="paw_seodaemun disappear">   
                    <svg className="icon"><use href="#paw_seodaemun" />               
                        <symbol id="paw_seodaemun" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_seodaemun disappear"><svg className="icon"><use href="#paw_seodaemun" /></svg></div>
        </div>
        
    );
};

