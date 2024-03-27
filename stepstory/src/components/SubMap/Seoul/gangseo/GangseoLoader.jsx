import React from 'react';
import './gangseo.scss';

export default function GangseoLoader () {
    return (
        <div className="ajax-loader_gangseo">
                <div className="paw_gangseo disappear">   
                    <svg className="icon"><use href="#paw_gangseo" />               
                        <symbol id="paw_gangseo" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gangseo disappear"><svg className="icon"><use href="#paw_gangseo" /></svg></div>
        </div>
        
    );
};

