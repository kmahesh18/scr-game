import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const cursorRef = useRef(null);
  const circlesRef = useRef([]);
  const coordsRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  const numCircles = 12;

  useEffect(() => {
    const circles = circlesRef.current;

    // Initialize all circle positions
    circles.forEach(circle => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = 'white'; // KEEP THIS as requested
    });

    const handleMouseMove = (e) => {
      coordsRef.current.x = e.clientX;
      coordsRef.current.y = e.clientY;
    };

    const animate = () => {
      let x = coordsRef.current.x;
      let y = coordsRef.current.y;

      circles.forEach((circle, index) => {
        // Offset to center the circle around the cursor
        const circleOffset = 12;

        // Interpolation towards the previous position
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.26;
        y += (nextCircle.y - y) * 0.26;

        circle.style.left = `${x - circleOffset}px`;
        circle.style.top = `${y - circleOffset}px`;
        circle.style.transform = `scale(${(numCircles - index) / numCircles})`;

        // Update stored position
        circle.x = x;
        circle.y = y;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Render circles
  const circleElements = Array.from({ length: numCircles }, (_, index) => (
    <div
      key={index}
      className="circle"
      ref={(el) => (circlesRef.current[index] = el)}
    ></div>
  ));

  return <div className="cursor" ref={cursorRef}>{circleElements}</div>;
};

export default CursorTrail;
