import React from 'react';
import './yongsan.scss';

export default function YongsanLoader () {
    return (
        <div className="ajax-loader_yongsan">
                <div className="paw_yongsan disappear">   
                    <svg className="icon"><use href="#paw_yongsan" />               
                        <symbol id="paw_yongsan" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_yongsan disappear"><svg className="icon"><use href="#paw_yongsan" /></svg></div>
        </div>
        
    );
};

