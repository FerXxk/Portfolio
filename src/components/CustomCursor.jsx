import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const INTERACTIVE = 'a, button, [role="button"]';

// Only on desktops with a real mouse, and never when the user asked for reduced motion.
// While active, html gets .has-custom-cursor, which is what hides the system cursor (index.css).
const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const enabled = window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches
            && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!enabled) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;
        document.documentElement.classList.add('has-custom-cursor');

        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        let frame;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
        };

        const render = () => {
            ballX += (mouseX - ballX) * 0.1;
            ballY += (mouseY - ballY) * 0.1;
            gsap.set(follower, { x: ballX, y: ballY });
            frame = requestAnimationFrame(render);
        };

        // Delegated hover, so links and buttons rendered later (modals, language switch) also react
        const onMouseOver = (e) => {
            const target = e.target.closest?.(INTERACTIVE);
            if (!target || target.contains(e.relatedTarget)) return;
            gsap.to(follower, { scale: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)', duration: 0.3 });
        };
        const onMouseOut = (e) => {
            const target = e.target.closest?.(INTERACTIVE);
            if (!target || target.contains(e.relatedTarget)) return;
            gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);
        frame = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            document.documentElement.classList.remove('has-custom-cursor');
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorRef}></div>
            <div className="cursor-follower" ref={followerRef}></div>

            <style>{`
        .cursor-dot, .cursor-follower {
          display: none;
        }
        .has-custom-cursor .cursor-dot, .has-custom-cursor .cursor-follower {
          display: block;
        }
        .cursor-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          position: fixed;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 100001;
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
          z-index: 100000;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
