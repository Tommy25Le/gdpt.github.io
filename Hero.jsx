import React from 'react';
import LotusLogo from './LotusLogo';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '6rem' }}>
            <div className="bg-grid"></div>
            <div className="ambient-light"></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <div className="animate-fade-in animate-float" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <LotusLogo size={160} />
                </div>

                <h1 className="heading-xl animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
                    Gia Đình Phật Tử <br />
                    <span className="text-gradient">Viên Minh</span>
                </h1>

                <p className="text-lg animate-fade-in" style={{ maxWidth: '600px', margin: '1.5rem auto 3rem', animationDelay: '0.4s', opacity: 0 }}>
                    Cultivating Compassion, Wisdom, and Courage. Join our Viên Minh chapter's tradition of youth empowerment grounded in Buddhist principles.
                </p>

                <div className="animate-fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', animationDelay: '0.6s', opacity: 0 }}>
                    <button className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        <span>Discover Our Path</span>
                    </button>
                    <a href="https://www.chanhphapusa.org/songs-2" target="_blank" rel="noopener noreferrer" className="btn" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '1.2rem 3rem'
                    }}>
                        Music Archive
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
