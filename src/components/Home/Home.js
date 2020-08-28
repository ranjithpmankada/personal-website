import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {

    return (
        <main className='main'>
            <div className='container'>
                <header className='header'>
                    <h4 className='title_name'>Ranjith</h4>
                    <h5 className='heading'>
                        Creative developer &nbsp;
                        <span className='emoji' role="img" aria-label="computer">&#128187;</span> 
                        <br/>
                        Moreover a JavaScript ethusiast
                    </h5>
                </header>
                <nav className='nav'>
                    <Link className="nav_links"  to="/about">About</Link>
                    <div className='nav_seperator'></div>
                    <Link className="nav_links" to="/works">Works</Link>
                    <div className='nav_seperator'></div>
                    <Link className="nav_links" to="/contact">Contact</Link>
                </nav>
                <footer className='footer'>
                    <a href='https://github.com/ranjithpmankada/ ' target="_blank" rel="noopener noreferrer">Github</a>
                    <a href='https://www.linkedin.com/in/ranjithpmankada/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </footer>
            </div>
        </main>
    );
}

export default Home;