import { useEffect, useState } from 'react';

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
<div
  className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
>
  <div
    className="absolute w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-30 mix-blend-screen transition-transform duration-100"
    style={{
      transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
    }}
  />
</div>

  );
};

export default MouseGlow;
