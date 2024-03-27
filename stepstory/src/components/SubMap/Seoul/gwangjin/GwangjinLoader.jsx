import React from 'react';
import './gwangjin.scss';

export default function GwangjinLoader () {
    return (
        <div className="ajax-loader_gwangjin">
                <div className="paw_gwangjin disappear">   
                    <svg className="icon"><use href="#paw_gwangjin" />               
                        <symbol id="paw_gwangjin" viewBox="0 0 249 209.32">
                            <image href='/image/사람.png' x="0" y="0" height="150px" width="150px" />
                        </symbol>
                    </svg>
                </div>
                <div className="paw_gwangjin disappear"><svg className="icon"><use href="#paw_gwangjin" /></svg></div>
        </div>
        
    );
};

