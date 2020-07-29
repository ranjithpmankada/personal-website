import React from 'react';
import './WaitingScreen.scss';

const WaitingScreen = (props) => {
    return (
        <div className={`waiting-screen`}>
            <div className={``}>Waiting for user</div>
            <p>Press any button to continue</p>
        </div>
    );
};

export default WaitingScreen;