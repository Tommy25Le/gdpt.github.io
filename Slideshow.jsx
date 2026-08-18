import React, { useState, useEffect } from 'react';

// You can replace these Unsplash links with your downloaded Facebook images.
// If you download the images from Facebook, simply place them in the 'public' 
// folder of this project and change the src below to e.g. '/fb-photo-1.jpg'
const slides = [
    {
        id: 1,
        src: '/gdptphoto1.jpg',
        alt: 'GĐPT Viên Minh Activity 1',
        caption: 'Our community in action.'
    },
    {
        id: 2,
        src: '/gdptphoto2.jpg',
        alt: 'GĐPT Viên Minh Activity 2',
        caption: 'Building friendships and spiritual growth.'
    },
    {
        id: 3,
        src: '/gdptphoto3.jpg',
        alt: 'GĐPT Viên Minh Activity 3',
        caption: 'A glimpse into our life and spirit.'
    }
];

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section id="gallery" className="section" style={{ background: 'var(--color-background)', paddingTop: 0 }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="heading-lg">Our <span className="text-gradient">Gallery</span></h2>
                    <p className="text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        A glimpse into the life, activities, and spirit of GĐPT Viên Minh.
                    </p>
                </div>

                <div style={{
                    position: 'relative',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    aspectRatio: '16/9',
                    background: '#000'
                }}>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                opacity: index === currentSlide ? 1 : 0,
                                transition: 'opacity 1s ease-in-out',
                                display: 'flex',
                                alignItems: 'flex-end'
                            }}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                padding: '3rem 2rem 2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
                                color: 'white'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{slide.caption}</h3>
                            </div>
                        </div>
                    ))}

                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none',
                            width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                            backdropFilter: 'blur(4px)', fontSize: '1.2rem'
                        }}
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)',
                            background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none',
                            width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10,
                            backdropFilter: 'blur(4px)', fontSize: '1.2rem'
                        }}
                    >
                        →
                    </button>

                    {/* Indicators */}
                    <div style={{
                        position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                        display: 'flex', gap: '0.5rem', zIndex: 10
                    }}>
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                style={{
                                    width: '10px', height: '10px', borderRadius: '50%', border: 'none',
                                    background: idx === currentSlide ? 'var(--color-primary-light)' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer', transition: 'background 0.3s'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slideshow;
