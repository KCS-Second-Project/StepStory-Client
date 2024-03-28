import React from 'react';
import './songpa.scss';

export default function SongpaLoader () {
    return (
        <div className="ajax-loader_songpa">
                <div className="paw_songpa disappear">   
                    <svg className="icon"><use href="#paw_songpa" />               
                        <symbol id="paw_songpa" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_songpa disappear"><svg className="icon"><use href="#paw_songpa" /></svg></div>
        </div>
        
    );
};

