import React from 'react';

const ScrollContainer = (props) => {
    return(
        <div className={`scroll-container`}>
            { props.children }
        </div>
    );
};

export default ScrollContainer;