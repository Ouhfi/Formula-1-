/** Ambient dashboard graphics — CSS + inline SVG, no raster images. */
export function MotorsportBackdrop() {
  return (
    <div className="motorsport-backdrop" aria-hidden>
      <div className="motorsport-backdrop__grid" />
      <div className="motorsport-backdrop__glow motorsport-backdrop__glow--red" />
      <div className="motorsport-backdrop__glow motorsport-backdrop__glow--cyan" />
      <svg
        className="motorsport-backdrop__circuit"
        viewBox="0 0 640 320"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path
          d="M80 200 C80 120 140 80 220 80 H420 C500 80 560 120 560 180 C560 240 500 260 420 260 H280 C200 260 160 280 120 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M120 300 C100 260 90 220 100 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="4 6"
        />
      </svg>
      <div className="motorsport-backdrop__stripes" />
    </div>
  );
}
