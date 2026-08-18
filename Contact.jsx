import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ position: 'relative', background: 'linear-gradient(to bottom, rgba(10, 54, 36, 0.2), transparent)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="heading-lg">Join <span className="text-gradient">Our Community</span></h2>
                    <p className="text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Ready to begin your journey? Connect with us on social media or visit us in person at our temple. We welcome youth of all ages!
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Location Card */}
                    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'rgba(31, 156, 106, 0.2)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                        }}>
                            <span style={{ fontSize: '1.8rem' }}>📍</span>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Visit Us</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            600 N Eastern Ave<br />
                            Moore, OK 73160<br />
                            United States
                        </p>
                        <a
                            href="https://maps.google.com/?q=600+N+Eastern+Ave,+Moore,+OK,+United+States"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
                        >
                            <span>Get Directions</span>
                        </a>
                    </div>

                    {/* Social Media Card */}
                    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{
                            width: '60px', height: '60px', borderRadius: '50%',
                            background: 'rgba(232, 185, 35, 0.2)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                        }}>
                            <span style={{ fontSize: '1.8rem' }}>📱</span>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Connect Online</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                            <a
                                href="https://www.facebook.com/gdptvienminh/?locale=vi_VN"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem',
                                    borderRadius: '12px', transition: 'all 0.2s', textDecoration: 'none', color: 'white'
                                }}
                                onMouseOver={e => e.currentTarget.style.background = 'rgba(24, 119, 242, 0.2)'}
                                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                            >
                                <span style={{ fontSize: '1.5rem' }}>📘</span>
                                <span style={{ fontWeight: 500 }}>GĐPT Viên Minh Facebook</span>
                            </a>

                            <a
                                href="https://www.instagram.com/gdptvienminh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem',
                                    borderRadius: '12px', transition: 'all 0.2s', textDecoration: 'none', color: 'white'
                                }}
                                onMouseOver={e => e.currentTarget.style.background = 'rgba(225, 48, 108, 0.2)'}
                                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                            >
                                <span style={{ fontSize: '1.5rem' }}>📸</span>
                                <span style={{ fontWeight: 500 }}>@gdptvienminh</span>
                            </a>

                            <a
                                href="https://www.instagram.com/vmliondance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '1rem',
                                    background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem',
                                    borderRadius: '12px', transition: 'all 0.2s', textDecoration: 'none', color: 'white'
                                }}
                                onMouseOver={e => e.currentTarget.style.background = 'rgba(225, 48, 108, 0.2)'}
                                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                            >
                                <span style={{ fontSize: '1.5rem' }}>🦁</span>
                                <span style={{ fontWeight: 500 }}>@vmliondance</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
