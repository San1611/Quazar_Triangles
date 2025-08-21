import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TriangleCanvas from "./components/TriangleCanvas";
import InfoPanel from "./components/InfoPanel";
import Quiz from "./components/Quiz";
import Formulae from "./components/Formulae";

export default function App() {
  const [metrics, setMetrics] = useState(null);

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto p-4">
        <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-4">
            <Formulae />
            <div className="justify-center flex flex-col md:flex-row gap-4">
            <TriangleCanvas onMetrics={setMetrics} />
            <InfoPanel metrics={metrics} />
             
            </div>
            <Quiz metrics={metrics} />
          </div>
          
           
            
          
        </div>
        
        </div>
      </main>
      <Footer />
    </div>
  );
}
