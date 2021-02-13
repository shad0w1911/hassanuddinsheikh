import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Footer=()=>(
    <div className="footerFlex">
        <div style={{color:'#fff'}}>
            <p>All Rights Reserved <FontAwesomeIcon icon={faCopyright}/> 2021</p>
        </div>
    </div>
)