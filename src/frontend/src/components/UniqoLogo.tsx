// SVG logo matching the actual UNIQO BD illustrated logo
// U = gift box (yellow/gold), N = green block with measuring tape,
// i = sewing needle (light blue), Q = orange gear, O = pink ring with lightbulb
// BD = navy sans-serif text

const TAPE_TICKS = [50, 56, 62, 68, 74, 80, 86] as const;

export default function UniqoLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 72"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="UNIQO BD"
    >
      {/* ── U: Gift Box ──────────────────────────────────────────────── */}
      {/* Box body */}
      <rect x="4" y="28" width="38" height="36" rx="3" fill="#FFD21A" />
      {/* Box lid top stripe */}
      <rect x="4" y="24" width="38" height="8" rx="2" fill="#F5B400" />
      {/* Ribbon vertical */}
      <rect x="20" y="24" width="6" height="40" fill="#1F2B45" />
      {/* Ribbon horizontal on lid */}
      <rect x="4" y="26" width="38" height="4" fill="#1F2B45" />
      {/* Bow loops */}
      <ellipse cx="17" cy="22" rx="8" ry="5" fill="#1F2B45" />
      <ellipse cx="29" cy="22" rx="8" ry="5" fill="#1F2B45" />
      <ellipse cx="17" cy="22" rx="5" ry="3" fill="#FFD21A" />
      <ellipse cx="29" cy="22" rx="5" ry="3" fill="#FFD21A" />
      {/* Bow center knot */}
      <circle cx="23" cy="22" r="4" fill="#1F2B45" />
      <circle cx="23" cy="22" r="2" fill="#FFD21A" />

      {/* ── N: Green block + measuring tape ─────────────────────────── */}
      {/* N green body */}
      <path
        d="M52 18 L52 64 L63 64 L63 38 L75 64 L86 64 L86 18 L75 18 L75 44 L63 18 Z"
        fill="#63B64B"
      />
      {/* Measuring tape curve */}
      <path
        d="M48 62 Q55 55 62 62 Q70 70 77 62 Q84 54 91 60"
        stroke="#B9D93A"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Tape tick marks */}
      {TAPE_TICKS.map((x) => (
        <line
          key={`tick-${x}`}
          x1={x}
          y1={56}
          x2={x}
          y2={60}
          stroke="#2F6F3A"
          strokeWidth="1.5"
        />
      ))}

      {/* ── i: Sewing needle ──────────────────────────────────────────── */}
      {/* Needle shaft */}
      <rect x="99" y="22" width="6" height="42" rx="3" fill="#46B8E6" />
      {/* Needle eye hole */}
      <ellipse cx="102" cy="28" rx="2" ry="3" fill="white" />
      {/* Thread through eye */}
      <path
        d="M102 26 Q108 20 114 26"
        stroke="#F28B1A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* i dot */}
      <circle cx="102" cy="14" r="5" fill="#46B8E6" />
      {/* Needle tip */}
      <polygon points="99,64 105,64 102,70" fill="#9AA0A6" />

      {/* ── Q: Orange gear ──────────────────────────────────────────── */}
      {/* Gear teeth (8 teeth) */}
      <rect
        x="109"
        y="16"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(0, 113, 20)"
      />
      <rect
        x="123"
        y="19"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(45, 127, 23)"
      />
      <rect
        x="130"
        y="33"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(90, 134, 37)"
      />
      <rect
        x="123"
        y="47"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(135, 127, 51)"
      />
      <rect
        x="109"
        y="50"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(180, 113, 54)"
      />
      <rect
        x="95"
        y="47"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(225, 99, 51)"
      />
      <rect
        x="88"
        y="33"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(270, 92, 37)"
      />
      <rect
        x="95"
        y="19"
        width="8"
        height="8"
        rx="1"
        fill="#F39A1E"
        transform="rotate(315, 99, 23)"
      />
      {/* Gear outer circle */}
      <circle cx="136" cy="42" r="20" fill="#F39A1E" />
      {/* Gear inner ring navy */}
      <circle cx="136" cy="42" r="13" fill="#1F2B45" />
      {/* Gear center hole */}
      <circle cx="136" cy="42" r="7" fill="#F39A1E" />
      {/* Q tail */}
      <line
        x1="146"
        y1="55"
        x2="155"
        y2="66"
        stroke="#F39A1E"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* ── O: Pink ring with lightbulb ────────────────────────────── */}
      {/* Outer pink ring */}
      <circle cx="178" cy="42" r="22" fill="#F06A94" />
      {/* Inner white fill */}
      <circle cx="178" cy="42" r="15" fill="white" />
      {/* Lightbulb bulb */}
      <ellipse cx="178" cy="39" rx="8" ry="9" fill="#FFE9A6" />
      {/* Bulb glow highlight */}
      <ellipse cx="175" cy="36" rx="3" ry="4" fill="white" opacity="0.6" />
      {/* Bulb base / cap */}
      <rect x="174" y="47" width="8" height="4" rx="1" fill="#2C3448" />
      <rect x="175" y="51" width="6" height="3" rx="1" fill="#2C3448" />
      {/* Bulb filament lines */}
      <path
        d="M176 43 Q178 46 180 43"
        stroke="#6B6F77"
        strokeWidth="1"
        fill="none"
      />

      {/* ── BD: Navy sans-serif text ─────────────────────────────────── */}
      <text
        x="208"
        y="58"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#1F2B45"
        letterSpacing="1"
      >
        BD
      </text>
    </svg>
  );
}
