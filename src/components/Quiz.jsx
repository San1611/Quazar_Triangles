import React, { useMemo, useState } from "react";

export default function Quiz({ metrics }) {
  const [ans, setAns] = useState("");
  const [status, setStatus] = useState(null);

  const question = useMemo(() => {
    if (!metrics) return null;
    const base = Math.round(metrics.sides.c);
    const area = Math.round(metrics.area);
    return { base, area, correct: Math.round((2 * area) / (base || 1)) };
  }, [metrics]);

  if (!question) return null;

  return (
    <div className="p-4 bg-white rounded-xl shadow border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">Quick Check</h2>
      <p className="text-sm mb-2">
        If base AB = <b>{question.base}px</b> and area = <b>{question.area}px²</b>, 
        what is the height on AB?
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const ok = Number(ans) === question.correct;
          setStatus(ok ? "✅ Correct!" : `❌ Try again (expected ${question.correct})`);
        }}
        className="flex gap-2"
      >
        <input
          className="border rounded px-3 py-2 text-sm flex-1"
          placeholder="Your answer (px)"
          value={ans}
          onChange={(e) => setAns(e.target.value)}
        />
        <button className="px-4 py-2 rounded bg-rose-500 text-white text-sm">Check</button>
      </form>
      {status && <p className="text-sm mt-2">{status}</p>}
    </div>
  );
}
