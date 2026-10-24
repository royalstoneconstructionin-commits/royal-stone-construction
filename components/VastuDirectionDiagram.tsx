const compassPoints = [
  { label: "North-West", short: "NW", x: 94, y: 95 },
  { label: "North", short: "N", x: 240, y: 48 },
  { label: "North-East", short: "NE", x: 386, y: 95 },
  { label: "West", short: "W", x: 48, y: 240 },
  { label: "East", short: "E", x: 432, y: 240 },
  { label: "South-West", short: "SW", x: 94, y: 386 },
  { label: "South", short: "S", x: 240, y: 432 },
  { label: "South-East", short: "SE", x: 386, y: 386 },
];

export default function VastuDirectionDiagram() {
  return <figure className="rounded-[30px] border border-brand-200 bg-brand-50 p-4 shadow-sm sm:p-7">
    <svg viewBox="0 0 480 480" role="img" aria-labelledby="vastu-compass-title vastu-compass-description" className="mx-auto h-auto w-full max-w-md">
      <title id="vastu-compass-title">Eight Vastu directions</title>
      <desc id="vastu-compass-description">Compass with north at the top, east on the right, south at the bottom and west on the left. The four diagonal directions lie between them.</desc>
      <circle cx="240" cy="240" r="163" fill="white" className="stroke-brand-200" />
      <circle cx="240" cy="240" r="140" fill="none" strokeDasharray="3 7" className="stroke-brand-200" />
      {[0, 45, 90, 135].map(angle => <line key={angle} x1="240" y1="88" x2="240" y2="392" transform={`rotate(${angle} 240 240)`} className="stroke-brand-200" />)}
      <path d="M240 116L258 222L364 240L258 258L240 364L222 258L116 240L222 222Z" className="fill-brand-100 stroke-brand-500" strokeWidth="1.5" />
      <path d="M240 116L258 222L240 240L222 222Z" className="fill-brand-600" />
      <circle cx="240" cy="240" r="51" className="fill-slate-950" />
      <path d="M223 241L240 227L257 241M228 238V253H252V238M237 253V243H244V253" fill="none" className="stroke-brand-300" strokeWidth="2" strokeLinejoin="round" />
      {compassPoints.map(({ label, short, x, y }) => <g key={short} transform={`translate(${x} ${y})`} textAnchor="middle">
        <rect x="-24" y="-22" width="48" height="37" rx="10" className={short === "N" ? "fill-brand-600" : "fill-white"} />
        <text y="3" fontSize="18" fontWeight="700" className={short === "N" ? "fill-white" : "fill-brand-700"}>{short}</text>
        <text y="34" fontSize="12" className="fill-slate-600">{label}</text>
      </g>)}
    </svg>
    <figcaption className="mt-3 text-center text-sm leading-6 text-slate-600">Start with your plot&apos;s actual orientation. This diagram illustrates directions, rather than a fixed room layout.</figcaption>
  </figure>;
}
