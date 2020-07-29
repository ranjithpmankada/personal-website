import React, { useEffect, useState } from 'react';
import './Home.scss';

function Home() {
    const [a,aa] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log(e.clientY);
        })
    });
    return (
        <div>
            <header className='header'>
                <h1 className='title_name'>Ranjith</h1>
            </header>
            <footer className='footer'>
                <a href='#'>LinkedIn</a>
                <a href='#'>Github</a>
            </footer>
        </div>
    );
}

export default Home;