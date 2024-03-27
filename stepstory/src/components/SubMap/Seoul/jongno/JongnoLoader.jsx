import React from 'react';
import './jongno.scss';

export default function JongnoLoader () {
    return (
        <div className="ajax-loader_jongno">
                <div className="paw_jongno disappear">   
                    <svg className="icon"><use href="#paw_jongno" />               
                        <symbol id="paw_jongno" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_jongno disappear"><svg className="icon"><use href="#paw_jongno" /></svg></div>
        </div>
        
    );
};

