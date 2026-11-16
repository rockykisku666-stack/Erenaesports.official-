import React, { useState } from 'react';

export const UPLOADED_ARENA_ASSET = '/assets/aistudio/1794845950936_b2734fdc.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Renders the exact uploaded ESPORTS ARENA crest logo from the user's reference image
 * with a resilient vector fallback so it never shows a broken image frame.
 */
export const EsportsArenaCrest: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const [imgError, setImgError] = useState(false);

  const dimensions = {
    sm: 'w-11 h-11',
    md: 'w-14 h-14',
    lg: 'w-36 h-36 sm:w-44 sm:h-44',
    xl: 'w-44 h-44 sm:w-52 sm:h-52',
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${dimensions} ${className}`}
    >
      {/* Ambient Golden Orange Aura behind Logo */}
      <div
        className="absolute inset-1 rounded-full bg-gradient-to-b from-amber-400/25 via-orange-500/20 to-transparent blur-xl pointer-events-none"
        aria-hidden="true"
      />

      {!imgError ? (
        <div
          className="relative w-full h-full overflow-hidden rounded-2xl"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 68% 68% at 50% 50%, #000 68%, rgba(0,0,0,0.4) 86%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 68% 68% at 50% 50%, #000 68%, rgba(0,0,0,0.4) 86%, transparent 100%)',
          }}
        >
          <img
            src={UPLOADED_ARENA_ASSET}
            alt="Esports Arena Official Crest Logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="absolute max-w-none pointer-events-none select-none"
            style={{
              width: '580%',
              left: '-128%',
              top: '-38%',
            }}
          />
        </div>
      ) : (
        <div className="relative w-full h-full flex flex-col items-center justify-center rounded-xl bg-zinc-900 border border-orange-500/50 p-2 text-center">
          <span className="font-display font-extrabold tracking-wider text-amber-400 text-xs leading-none">
            ESPORTS
          </span>
          <span className="font-display font-bold tracking-widest text-orange-500 text-[10px] leading-none mt-0.5">
            ARENA
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Renders the Free Fire Squad & Trophy artwork cropped directly from the uploaded asset,
 * paired with a fallback illustration container.
 */
export const FreeFireSquadVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative overflow-hidden select-none ${className}`}>
      {!imgError ? (
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, #000 18%, #000 92%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, #000 18%, #000 92%, transparent 100%)',
          }}
        >
          <img
            src={UPLOADED_ARENA_ASSET}
            alt="Free Fire Custom Tournament Squad and Championship Trophy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="absolute max-w-none pointer-events-none select-none"
            style={{
              width: '435%',
              left: '-315%',
              top: '-63%',
            }}
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-950/50 to-zinc-950 p-4">
          <span className="font-display text-lg font-bold text-amber-400 tracking-wide">
            FREE FIRE CUSTOM ROOMS
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Authentic 4-Color Classic Ludo Board & Pawn (Goti) Icon Component.
 * Explicitly designed with classic Red, Green, Yellow, and Blue Ludo home bases,
 * safe star cells, and traditional Ludo pawns (goti) — zero casino dice.
 */
export const AuthenticLudoBoardAndGotiSVG: React.FC<{ className?: string }> = ({
  className = 'w-28 h-28',
}) => {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Classic 4-Color Ludo Board and Pawn Goti Icon"
    >
      <defs>
        <filter id="gotiShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.65" />
        </filter>
        <linearGradient id="boardRim" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="redPawn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="55%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="greenPawn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="55%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="yellowPawn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="55%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#713f12" />
        </linearGradient>
        <linearGradient id="bluePawn" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="55%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Outer Isometric/Tilted Classic Board Base */}
      <rect
        x="10"
        y="10"
        width="140"
        height="140"
        rx="14"
        fill="#f8fafc"
        stroke="url(#boardRim)"
        strokeWidth="4"
      />

      {/* Top-Left GREEN Home Base */}
      <rect x="14" y="14" width="52" height="52" rx="6" fill="#16a34a" />
      <rect x="22" y="22" width="36" height="36" rx="4" fill="#ffffff" />
      <circle cx="32" cy="32" r="5" fill="#16a34a" />
      <circle cx="48" cy="32" r="5" fill="#16a34a" />
      <circle cx="32" cy="48" r="5" fill="#16a34a" />
      <circle cx="48" cy="48" r="5" fill="#16a34a" />

      {/* Top-Right YELLOW Home Base */}
      <rect x="94" y="14" width="52" height="52" rx="6" fill="#eab308" />
      <rect x="102" y="22" width="36" height="36" rx="4" fill="#ffffff" />
      <circle cx="112" cy="32" r="5" fill="#eab308" />
      <circle cx="128" cy="32" r="5" fill="#eab308" />
      <circle cx="112" cy="48" r="5" fill="#eab308" />
      <circle cx="128" cy="48" r="5" fill="#eab308" />

      {/* Bottom-Left RED Home Base */}
      <rect x="14" y="94" width="52" height="52" rx="6" fill="#dc2626" />
      <rect x="22" y="102" width="36" height="36" rx="4" fill="#ffffff" />
      <circle cx="32" cy="112" r="5" fill="#dc2626" />
      <circle cx="48" cy="112" r="5" fill="#dc2626" />
      <circle cx="32" cy="128" r="5" fill="#dc2626" />
      <circle cx="48" cy="128" r="5" fill="#dc2626" />

      {/* Bottom-Right BLUE Home Base */}
      <rect x="94" y="94" width="52" height="52" rx="6" fill="#2563eb" />
      <rect x="102" y="102" width="36" height="36" rx="4" fill="#ffffff" />
      <circle cx="112" cy="112" r="5" fill="#2563eb" />
      <circle cx="128" cy="112" r="5" fill="#2563eb" />
      <circle cx="112" cy="128" r="5" fill="#2563eb" />
      <circle cx="128" cy="128" r="5" fill="#2563eb" />

      {/* Colored Home Stretch Paths */}
      {/* Top Yellow Path */}
      <rect x="75" y="22" width="10" height="44" fill="#eab308" opacity="0.85" />
      {/* Bottom Red Path */}
      <rect x="75" y="94" width="10" height="44" fill="#dc2626" opacity="0.85" />
      {/* Left Green Path */}
      <rect x="22" y="75" width="44" height="10" fill="#16a34a" opacity="0.85" />
      {/* Right Blue Path */}
      <rect x="94" y="75" width="44" height="10" fill="#2563eb" opacity="0.85" />

      {/* Track Grid Lines */}
      <rect x="66" y="14" width="28" height="52" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="66" y="94" width="28" height="52" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="14" y="66" width="52" height="28" stroke="#cbd5e1" strokeWidth="1" />
      <rect x="94" y="66" width="52" height="28" stroke="#cbd5e1" strokeWidth="1" />

      {/* Center 4-Color Victory Triangles */}
      <polygon points="66,66 80,80 66,94" fill="#16a34a" />
      <polygon points="66,66 94,66 80,80" fill="#eab308" />
      <polygon points="94,66 94,94 80,80" fill="#2563eb" />
      <polygon points="66,94 94,94 80,80" fill="#dc2626" />
      <rect x="66" y="66" width="28" height="28" stroke="#0f172a" strokeWidth="1.5" />

      {/* Elevated 3D Ludo Pawns (Gotis) Standing on the Board */}
      {/* Red Goti (Foreground Left) */}
      <g filter="url(#gotiShadow)" transform="translate(26, 96)">
        <ellipse cx="14" cy="28" rx="10" ry="4.5" fill="#7f1d1d" stroke="#ffffff" strokeWidth="1.2" />
        <path
          d="M6 27 C6 17, 10 13, 14 9 C18 13, 22 17, 22 27 Z"
          fill="url(#redPawn)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <circle cx="14" cy="7" r="5.5" fill="url(#redPawn)" stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="12" cy="5.5" r="1.6" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Blue Goti (Foreground Right) */}
      <g filter="url(#gotiShadow)" transform="translate(106, 96)">
        <ellipse cx="14" cy="28" rx="10" ry="4.5" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1.2" />
        <path
          d="M6 27 C6 17, 10 13, 14 9 C18 13, 22 17, 22 27 Z"
          fill="url(#bluePawn)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <circle cx="14" cy="7" r="5.5" fill="url(#bluePawn)" stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="12" cy="5.5" r="1.6" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Green Goti (Top Left) */}
      <g filter="url(#gotiShadow)" transform="translate(26, 16)">
        <ellipse cx="14" cy="28" rx="10" ry="4.5" fill="#14532d" stroke="#ffffff" strokeWidth="1.2" />
        <path
          d="M6 27 C6 17, 10 13, 14 9 C18 13, 22 17, 22 27 Z"
          fill="url(#greenPawn)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <circle cx="14" cy="7" r="5.5" fill="url(#greenPawn)" stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="12" cy="5.5" r="1.6" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Yellow Goti (Top Right) */}
      <g filter="url(#gotiShadow)" transform="translate(106, 16)">
        <ellipse cx="14" cy="28" rx="10" ry="4.5" fill="#713f12" stroke="#ffffff" strokeWidth="1.2" />
        <path
          d="M6 27 C6 17, 10 13, 14 9 C18 13, 22 17, 22 27 Z"
          fill="url(#yellowPawn)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />
        <circle cx="14" cy="7" r="5.5" fill="url(#yellowPawn)" stroke="#ffffff" strokeWidth="1.2" />
        <circle cx="12" cy="5.5" r="1.6" fill="#ffffff" opacity="0.8" />
      </g>
    </svg>
  );
};
