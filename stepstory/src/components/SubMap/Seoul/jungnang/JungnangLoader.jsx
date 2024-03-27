import React from 'react';
import './jungnang.scss';

export default function JungnangLoader () {
    return (
        <div className="ajax-loader_jungnang">
                <div className="paw_jungnang disappear">   
                    <svg className="icon"><use href="#paw_jungnang" />               
                        <symbol id="paw_jungnang" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_jungnang disappear"><svg className="icon"><use href="#paw_jungnang" /></svg></div>
        </div>
        
    );
};

