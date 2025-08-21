import React from "react";

export default function InfoPanel({ metrics }) {
  if (!metrics) return null;
  const { area, sides, height } = metrics;
  const round = (x) => Math.round(x);

  return (
    <div className="p-4 bg-white rounded-xl shadow border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">Triangle Metrics</h2>
      <ul className="space-y-1 text-sm">
        <li><b>Sides:</b> a=|BC|={round(sides.a)} px, b=|AC|={round(sides.b)} px, c=|AB|={round(sides.c)} px</li>
        <li><b>Perimeter (px):</b> {round(sides.a + sides.b + sides.c)}</li>
        <li><b>Area (px²):</b> {round(area)} (Heron)</li>
        <li><b>Height on AB (px):</b> {round(height)}</li>
      </ul>

      <div className="mt-4 text-sm leading-6">
        <p><b>Heron’s Formula:</b> 
          <span className="ml-1">Area = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2</span>
        </p>
        <p className="mt-2"><b>Base–Height Relation:</b> Area = ½ × base × height</p>
      </div>
    </div>
  );
}
