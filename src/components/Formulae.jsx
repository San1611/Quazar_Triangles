import React from "react";

export default function Formulae() {
  return (
    <div className="p-4 bg-white rounded-xl shadow border border-gray-200">
           <div className="mt-4 text-sm leading-6">
        <p><b>Heron’s Formula:</b> 
          <span className="ml-1">Area = √(s(s−a)(s−b)(s−c)), where s = (a+b+c)/2</span>
        </p>
        <p className="mt-2"><b>Base–Height Relation:</b> Area = ½ × base × height</p>
      </div>
    </div>
  );
}
