import React from 'react';
import taegeukgi from '../../../assets/images/태극기.png';

export default function DaU () {
    return (
        <div className="ajax-loader_DaU">
                <div className="flague disappear">   
                    <svg className="icon"><use href="#flague" />               
                        <symbol id="flague" viewBox="0 0 249 209.32">
                            <image href={taegeukgi} x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
        </div>
    );
};

