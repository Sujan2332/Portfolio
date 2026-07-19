'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const steps = [
      { target: 30, delay: 100 },
      { target: 60, delay: 300 },
      { target: 85, delay: 600 },
      { target: 100, delay: 900 },
    ];

    const timeouts = steps.map(({ target, delay }) => setTimeout(() => setProgress(target), delay));

    const hideTimeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setMounted(false), 600);
    }, 1400);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!mounted) return null;

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