import React, { useState, useEffect } from 'react';
import LotusLogo from './LotusLogo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(11, 17, 14, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                    <LotusLogo size={40} />
                    <span style={{
                        fontFamily: 'var(--font-serif)',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        letterSpacing: '0.05em'
                    }}>
                        GĐPT Viên Minh
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <a href="#about" style={{ fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s', color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>About</a>
                    <a href="#gallery" style={{ fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s', color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Gallery</a>
                    <a href="#values" style={{ fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s', color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Core Values</a>
                    <a href="#activities" style={{ fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s', color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Activities</a>
                    <a href="https://www.chanhphapusa.org/songs-2" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s', color: 'var(--text-secondary)' }} onMouseOver={e => e.target.style.color = 'white'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}>Music</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>Join Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
