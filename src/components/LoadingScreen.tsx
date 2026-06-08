import { useState, useEffect, useRef } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const steps = [
      { target: 30, delay: 100 },
      { target: 60, delay: 300 },
      { target: 85, delay: 600 },
      { target: 100, delay: 900 },
    ];

    steps.forEach(({ target, delay }) => {
      setTimeout(() => setProgress(target), delay);
    });

    setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 1400);
  }, [onComplete]);

  return (
    <div className={`loading-screen${!visible ? ' hidden' : ''}`}>
      <div className="flex flex-col items-center gap-2">
        <span className="text-gradient-blue font-mono text-xl font-semibold tracking-wider" style={{ fontFamily: "'Fira Code', monospace" }}>SS</span>
        <div className="text-sm text-gray-500 mt-1 tracking-widest uppercase" style={{ fontFamily: "'Fira Code', monospace" }}>Initializing</div>
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="font-mono text-xs text-gray-600 mt-3" style={{ fontFamily: "'Fira Code', monospace" }}>{progress}%</div>
    </div>
  );
}
