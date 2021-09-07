import React from 'react';
import { StyledLoader } from './StyledLoader';

function Loader() {
    return (
        <StyledLoader>
            <div className="flipper">
                <div></div>
                <div></div>
            </div>
        </StyledLoader>
    )
}

export default Loader
