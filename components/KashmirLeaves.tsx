'use client';

import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  rotation: number;
}

export default function KashmirLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate only 2 huge falling Chinar leaves
    const generatedLeaves = Array.from({ length: 2 }, (_, i) => ({
      id: i,
      left: 20 + Math.random() * 60, // Keep them more centered
      animationDuration: 25 + Math.random() * 15, // 25-40 seconds (slower)
      animationDelay: i * 5, // Stagger the leaves
      size: 200 + Math.random() * 100, // 200-300px (HUGE!)
      rotation: Math.random() * 360,
    }));
    setLeaves(generatedLeaves);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            top: '-300px',
            animationDuration: `${leaf.animationDuration}s`,
            animationDelay: `${leaf.animationDelay}s`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
        >
          <svg
            viewBox="0 0 120 120"
            className="opacity-80"
            style={{
              filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))',
            }}
          >
            {/* Realistic Chinar leaf - distinctive 5-pointed lobes */}
            <g>
              {/* Main leaf body with realistic Chinar shape */}
              <path
                d="M60,10
                   Q63,18 68,22 L75,20 Q82,24 85,35 L92,38
                   Q88,48 80,52 L82,60 Q78,70 72,76 L68,88
                   Q64,82 60,92
                   Q56,82 52,88 L48,76 Q42,70 38,60
                   L40,52 Q32,48 28,38 L35,35 Q38,24 45,20
                   L52,22 Q57,18 60,10 Z"
                fill="url(#autumnGradient)"
                stroke="#6b4423"
                strokeWidth="1.5"
                opacity="0.95"
              />

              {/* Main center vein - thick and prominent */}
              <line x1="60" y1="20" x2="60" y2="92" stroke="#5a3a1f" strokeWidth="2.5" opacity="0.7" />

              {/* Primary veins to each lobe tip */}
              <line x1="60" y1="28" x2="75" y2="20" stroke="#5a3a1f" strokeWidth="1.8" opacity="0.6" />
              <line x1="60" y1="28" x2="45" y2="20" stroke="#5a3a1f" strokeWidth="1.8" opacity="0.6" />
              <line x1="60" y1="45" x2="92" y2="38" stroke="#5a3a1f" strokeWidth="1.8" opacity="0.6" />
              <line x1="60" y1="45" x2="28" y2="38" stroke="#5a3a1f" strokeWidth="1.8" opacity="0.6" />
              <line x1="60" y1="70" x2="72" y2="88" stroke="#5a3a1f" strokeWidth="1.8" opacity="0.6" />
              <line x1="60" y1="70" x2="48" y2="88" stroke="#5a3a1f" strokeWidth="1.8" opacity="0.6" />

              {/* Secondary veins for detail */}
              <line x1="60" y1="35" x2="70" y2="40" stroke="#6b4423" strokeWidth="1" opacity="0.4" />
              <line x1="60" y1="35" x2="50" y2="40" stroke="#6b4423" strokeWidth="1" opacity="0.4" />
              <line x1="60" y1="55" x2="68" y2="58" stroke="#6b4423" strokeWidth="1" opacity="0.4" />
              <line x1="60" y1="55" x2="52" y2="58" stroke="#6b4423" strokeWidth="1" opacity="0.4" />
            </g>

            {/* Realistic autumn Chinar leaf gradient */}
            <defs>
              <linearGradient id="autumnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" /> {/* Bright golden yellow */}
                <stop offset="30%" stopColor="#f59e0b" /> {/* Amber */}
                <stop offset="60%" stopColor="#ea580c" /> {/* Deep orange */}
                <stop offset="85%" stopColor="#dc2626" /> {/* Red */}
                <stop offset="100%" stopColor="#991b1b" /> {/* Dark red edges */}
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-300px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.9;
          }
          15% {
            transform: translateY(15vh) translateX(-40px) rotate(25deg);
          }
          30% {
            transform: translateY(30vh) translateX(30px) rotate(-20deg);
          }
          45% {
            transform: translateY(45vh) translateX(-25px) rotate(35deg);
          }
          60% {
            transform: translateY(60vh) translateX(40px) rotate(-15deg);
          }
          75% {
            transform: translateY(75vh) translateX(-20px) rotate(25deg);
          }
          90% {
            transform: translateY(90vh) translateX(15px) rotate(-10deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
        }

        .animate-fall {
          animation: fall ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
