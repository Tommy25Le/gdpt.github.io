import React from 'react';

const values = [
    {
        title: 'Bi',
        subtitle: 'Compassion',
        desc: 'Extending loving-kindness and empathy to all living beings. We act to relieve suffering and bring joy to the world without discrimination.',
        icon: '🤍',
        color: '#E8B923'
    },
    {
        title: 'Trí',
        subtitle: 'Wisdom',
        desc: 'Cultivating clarity of mind and understanding the true nature of reality. We seek knowledge to guide our actions with insight and truth.',
        icon: '✨',
        color: '#1F9C6A'
    },
    {
        title: 'Dũng',
        subtitle: 'Courage',
        desc: 'Having the fearless determination to do what is right. We stand strong in our principles, overcoming obstacles and upholding justice.',
        icon: '🛡️',
        color: '#3498db'
    }
];

const Values = () => {
    return (
        <section id="values" className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10, 54, 36, 0.2))' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="heading-lg">Our Core <span className="text-gradient">Values</span></h2>
                    <p className="text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        The foundation of our practice is built upon three pillars. These principles guide our youth in their daily lives.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {values.map((v, i) => (
                        <div key={i} className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '150px',
                                height: '150px',
                                background: `radial-gradient(circle, ${v.color} 0%, transparent 70%)`,
                                opacity: 0.1,
                                borderRadius: '50%'
                            }}></div>

                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{v.icon}</div>
                            <h3 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: '2.5rem',
                                marginBottom: '0.25rem',
                                color: v.color
                            }}>
                                {v.title}
                            </h3>
                            <h4 style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '1.25rem',
                                fontWeight: 500,
                                color: 'var(--text-primary)',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}>
                                {v.subtitle}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
