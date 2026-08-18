import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div className="glass-card" style={{ padding: '4rem 3rem', background: 'rgba(31, 156, 106, 0.05)', borderColor: 'rgba(31, 156, 106, 0.2)' }}>
                        <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>About <span className="text-gradient">GĐPT Viên Minh</span></h2>
                        <p className="text-lg" style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                            Gia Đình Phật Tử Viên Minh is a local chapter of the traditional Buddhist youth organization, founded with the goal of training youths to become true Buddhists and good contributing members of society.
                        </p>
                        <p className="text-lg" style={{ marginBottom: '2rem' }}>
                            We merge the teachings of Buddhism with modern lifestyle, encouraging youth to live harmoniously, engage in community service, and nurture their spiritual growth.
                        </p>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-primary-light)' }}>🌿</span> Spiritual Practice & Meditation
                            </li>
                            <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-primary-light)' }}>🤝</span> Community Service & Charity
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-primary-light)' }}>🏕️</span> Outdoor Activities & Leadership
                            </li>
                        </ul>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                            border: '1px solid var(--color-surface-border)',
                            position: 'relative'
                        }}>
                            {/* Fallback pattern graphic instead of external images to ensure it always looks good */}
                            <div style={{
                                width: '100%',
                                aspectRatio: '4/3',
                                background: 'linear-gradient(135deg, #0A3624 0%, #125B3D 100%)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F9C6A' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                                }}></div>
                                <div style={{
                                    width: '120px', height: '120px',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(255,255,255,0.2)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <span style={{ fontSize: '3rem' }}>🙏</span>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card" style={{
                            position: 'absolute',
                            bottom: '-2rem',
                            left: '-2rem',
                            padding: '1.5rem',
                            borderRadius: '16px'
                        }}>
                            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, color: 'var(--color-primary-light)', fontSize: '2rem' }}>70+</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Years of History</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
