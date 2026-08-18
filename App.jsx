import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import LotusLogo from './components/LotusLogo';
import Slideshow from './components/Slideshow';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Slideshow />
                <Values />
                <Contact />
            </main>

            <footer style={{
                background: 'rgba(0, 0, 0, 0.5)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '3rem 2rem 1.5rem',
                marginTop: '4rem'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '2rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingBottom: '2rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <LotusLogo size={50} />
                        <div>
                            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.2rem' }}>GĐPT Viên Minh</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Gia Đình Phật Tử Việt Nam</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary-light)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Home</a>
                        <a href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary-light)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>About</a>
                        <a href="#values" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary-light)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Values</a>
                        <a href="https://www.chanhphapusa.org/songs-2" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary-light)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Music</a>
                        <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-primary-light)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Contact</a>
                    </div>
                </div>

                <div className="container" style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.3)', fontSize: '0.85rem' }}>
                    &copy; {new Date().getFullYear()} GĐPT Viên Minh. All rights reserved. <br />
                    <span style={{ fontSize: '0.75rem', marginTop: '0.5rem', display: 'block' }}>Bi - Trí - Dũng</span>
                </div>
            </footer>
        </>
    );
}

export default App;
