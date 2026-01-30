import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Check if device is touch or mobile
        if (window.innerWidth < 1024) return;

        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.1
            });
        };

        const render = () => {
            ballX += (mouseX - ballX) * 0.1;
            ballY += (mouseY - ballY) * 0.1;

            gsap.set(follower, {
                x: ballX,
                y: ballY
            });

            requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', onMouseMove);
        requestAnimationFrame(render);

        // Hover effects
        const links = document.querySelectorAll('a, button, .project-card');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(follower, {
                    scale: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    duration: 0.3
                });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    duration: 0.3
                });
            });
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>

            <style jsx>{`
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
        .cursor-follower {
          width: 30px;
          height: 30px;
          border: 1px solid var(--accent);
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
        }
        @media (max-width: 1023px) {
          .cursor-dot, .cursor-follower { display: none; }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
