import React from 'react';

const LotusLogo = ({ className = '', size = 120 }) => {
    return (
        <div className={className} style={{
            width: size,
            height: size,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.4))'
        }}>
            <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%', // This clips the square corners to make it perfectly round
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff' // Fallback in case of transparency issues
            }}>
                <img
                    src="/gdptlogo.jpg"
                    alt="GĐPT Viên Minh Logo"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        /* If there is a white border around the actual logo inside the file, 
                           you can uncomment and adjust the scale below to crop it out: */
                        // transform: 'scale(1.05)'
                    }}
                />
            </div>
        </div>
    );
};

export default LotusLogo;
