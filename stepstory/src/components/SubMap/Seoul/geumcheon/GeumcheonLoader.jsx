import React from 'react';
import './geumcheon.scss';

export default function GeumcheonLoader () {
    return (
        <div className="ajax-loader_geumcheon">
                <div className="paw_geumcheon disappear">   
                    <svg className="icon"><use href="#paw_geumcheon" />               
                        <symbol id="paw_geumcheon" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_geumcheon disappear"><svg className="icon"><use href="#paw_geumcheon" /></svg></div>
        </div>
        
    );
};

