'use client';

import React, { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');
        const cursorBlur = document.querySelector('.cursor-blur');

        const handleMouseMove = (e) => {
            const posX = e.pageX - cursor.offsetWidth / 2;
            const posY = e.pageY - cursor.offsetHeight / 2;

            requestAnimationFrame(() => {
                cursor.style.transform = `translate(${posX}px, ${posY}px)`;
                cursorBlur.style.transform = `translate(${posX - (cursorBlur.offsetWidth / 2)}px, ${posY - (cursorBlur.offsetHeight / 2)}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor"></div>
            <div className="cursor-blur"></div>
        </>
    );
};

export default Cursor;