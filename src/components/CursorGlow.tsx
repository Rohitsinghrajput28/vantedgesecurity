import { useCursorGlow } from '../hooks/useCursorGlow';

export const CursorGlow = () => {
  const { x, y } = useCursorGlow();

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${x - 150}px`,
        top: `${y - 150}px`,
        background: `radial-gradient(circle, #00d9ff 0%, #9d4edd 100%)`,
      }}
    />
  );
};
