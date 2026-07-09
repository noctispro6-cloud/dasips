export default function LocationMap({
  lat,
  lon,
  label,
  zoomDelta = 0.01,
}: {
  lat: number;
  lon: number;
  label: string;
  zoomDelta?: number;
}) {
  const bbox = [lon - zoomDelta, lat - zoomDelta, lon + zoomDelta, lat + zoomDelta].join(
    "%2C"
  );
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-gold-500/20">
      <iframe
        title={label}
        src={src}
        width="100%"
        height="360"
        style={{
          border: 0,
          filter: "invert(0.9) hue-rotate(180deg) grayscale(0.2) contrast(0.9)",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
