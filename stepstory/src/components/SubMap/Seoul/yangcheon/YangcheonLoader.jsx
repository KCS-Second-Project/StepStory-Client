import React from 'react';
import './yangcheon.scss';

export default function YangcheonLoader () {
    return (
        <div className="ajax-loader_yangcheon">
                <div className="paw_yangcheon disappear">   
                    <svg className="icon"><use href="#paw_yangcheon" />               
                        <symbol id="paw_yangcheon" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_yangcheon disappear"><svg className="icon"><use href="#paw_yangcheon" /></svg></div>
        </div>
        
    );
};

