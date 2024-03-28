import React from 'react';
import './dongdaemun.scss';

export default function DongdaemunLoader () {
    return (
        <div className="ajax-loader_dongdaemun">
                <div className="paw_dongdaemun disappear">   
                    <svg className="icon"><use href="#paw_dongdaemun" />               
                        <symbol id="paw_dongdaemun" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_dongdaemun disappear"><svg className="icon"><use href="#paw_dongdaemun" /></svg></div>
        </div>
        
    );
};

