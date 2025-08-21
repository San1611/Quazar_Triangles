import React, { useRef, useState, useEffect } from "react";
import { heronArea, triangleSides, heightGivenBase } from "../utils/geometry";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

export default function TriangleCanvas({ onMetrics }) {
  const svgRef = useRef(null);
  const [A, setA] = useState([100, 300]);
  const [B, setB] = useState([500, 300]);
  const [C, setC] = useState([300, 100]);
  const [drag, setDrag] = useState(null);

  const width = 640, height = 420, pad = 12;

  const area = heronArea(A, B, C);
  const { a, b, c } = triangleSides(A, B, C);
  const base = c; 
  const h = heightGivenBase(base, area);

  // ✅ Lift metrics after render (not during render)
  useEffect(() => {
    onMetrics?.({ area, sides: { a, b, c }, height: h });
  }, [area, a, b, c, h, onMetrics]);

  const startDrag = (which) => (e) => {
    e.preventDefault();
    setDrag(which);
  };

  const endDrag = () => setDrag(null);

  const onMove = (e) => {
    if (!drag || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = clamp(e.clientX - rect.left, pad, width - pad);
    const y = clamp(e.clientY - rect.top, pad, height - pad);
    if (drag === "A") setA([x, y]);
    if (drag === "B") setB([x, y]);
    if (drag === "C") setC([x, y]);
  };

  const circle = (pt, label, color) => (
    <g>
      <circle
        cx={pt[0]}
        cy={pt[1]}
        r="8"
        className={color + " cursor-grab"}
        onMouseDown={startDrag(label)}
      />
      <text
        x={pt[0] + 10}
        y={pt[1] - 10}
        className="fill-gray-700 text-[12px] select-none"
      >
        {label}
      </text>
    </g>
  );

  return (
    <div className="w-full">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="bg-white rounded-xl shadow border border-gray-200 select-none"
        onMouseMove={onMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        <polygon
          points={`${A[0]},${A[1]} ${B[0]},${B[1]} ${C[0]},${C[1]}`}
          className="fill-pink-200 stroke-pink-500"
          strokeWidth="2"
        />
        <line
          x1={A[0]}
          y1={A[1]}
          x2={B[0]}
          y2={B[1]}
          className="stroke-purple-600"
          strokeWidth="3"
        />
        {circle(A, "A", "fill-rose-500")}
        {circle(B, "B", "fill-emerald-500")}
        {circle(C, "C", "fill-sky-500")}
      </svg>
      <p className="text-sm text-gray-600 mt-2">
        Drag A, B, C. Base is AB. Area updates live; height is computed from base & area.
      </p>
    </div>
  );
}
