// Visuel de hero : graphique price-action stylisé (SVG pur, sans dépendance, sans
// asset). Représente une lecture structurelle — repli dans une zone de demande puis
// continuation — avec ligne de liquidité. AUCUNE courbe de performance / promesse de gain.
// Couleurs de marque : rouge #7A0F0F (baissier), or #C9A227 (haussier).

type Candle = { x: number; wt: number; wb: number; bt: number; bb: number; up: boolean };

// Récit visuel : downtrend -> tap dans la zone -> reprise haussière.
const candles: Candle[] = [
  { x: 40, wt: 56, wb: 104, bt: 64, bb: 96, up: false },
  { x: 68, wt: 80, wb: 132, bt: 88, bb: 124, up: false },
  { x: 96, wt: 104, wb: 156, bt: 112, bb: 148, up: false },
  { x: 124, wt: 128, wb: 182, bt: 138, bb: 174, up: false },
  { x: 152, wt: 150, wb: 212, bt: 162, bb: 204, up: false },
  { x: 180, wt: 182, wb: 244, bt: 192, bb: 236, up: false },
  { x: 208, wt: 214, wb: 268, bt: 222, bb: 258, up: false },
  { x: 236, wt: 232, wb: 284, bt: 240, bb: 262, up: false },
  { x: 264, wt: 214, wb: 262, bt: 224, bb: 254, up: true },
  { x: 292, wt: 182, wb: 232, bt: 192, bb: 226, up: true },
  { x: 320, wt: 150, wb: 204, bt: 160, bb: 196, up: true },
  { x: 348, wt: 120, wb: 174, bt: 130, bb: 166, up: true },
  { x: 376, wt: 92, wb: 146, bt: 102, bb: 138, up: true },
  { x: 404, wt: 66, wb: 120, bt: 76, bb: 110, up: true },
];

const RED = "#7A0F0F";
const RED_BRIGHT = "#A8201A";
const GOLD = "#C9A227";
const W = 16;

export default function HeroChart({
  liquidityLabel = "LIQUIDITÉ",
  zoneLabel = "ZONE DE DEMANDE",
  ariaLabel = "Illustration d'une lecture d'analyse technique : repli dans une zone de demande puis continuation haussière.",
}: { liquidityLabel?: string; zoneLabel?: string; ariaLabel?: string }) {
  return (
    <svg viewBox="0 0 440 300" className="w-full h-full" role="img" aria-label={ariaLabel}>
      {/* grille horizontale discrète */}
      {[60, 110, 160, 210, 260].map((y) => (
        <line key={y} x1="16" y1={y} x2="424" y2={y} stroke="#27272a" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />
      ))}

      {/* zone de demande */}
      <rect x="196" y="246" width="120" height="42" fill={GOLD} opacity="0.07" />
      <rect x="196" y="246" width="120" height="42" fill="none" stroke={GOLD} strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
      <text x="20" y="278" fill={GOLD} fontSize="9" fontWeight="700" letterSpacing="1.5" opacity="0.75">{zoneLabel}</text>

      {/* ligne de liquidité (objectif structurel) */}
      <line x1="16" y1="58" x2="424" y2="58" stroke={RED_BRIGHT} strokeWidth="1.2" strokeDasharray="5 4" opacity="0.7" />
      <text x="360" y="52" fill={RED_BRIGHT} fontSize="9" fontWeight="700" letterSpacing="1.5" opacity="0.85">{liquidityLabel}</text>

      {/* bougies */}
      {candles.map((c, i) => {
        const color = c.up ? GOLD : RED_BRIGHT;
        return (
          <g key={i}>
            <line x1={c.x} y1={c.wt} x2={c.x} y2={c.wb} stroke={color} strokeWidth="1.4" />
            <rect x={c.x - W / 2} y={c.bt} width={W} height={Math.max(2, c.bb - c.bt)} fill={color} rx="1" />
          </g>
        );
      })}
    </svg>
  );
}
