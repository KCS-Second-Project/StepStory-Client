import React from 'react';
import './yeongdeungpo.scss';

export default function YeongdeungpoLoader () {
    return (
        <div className="ajax-loader_yeongdeungpo">
                <div className="paw_yeongdeungpo disappear">   
                    <svg className="icon"><use href="#paw_yeongdeungpo" />               
                        <symbol id="paw_yeongdeungpo" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_yeongdeungpo disappear"><svg className="icon"><use href="#paw_yeongdeungpo" /></svg></div>
        </div>
        
    );
};

