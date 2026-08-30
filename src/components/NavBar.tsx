"use client";
import React from 'react';
import { Activity } from 'lucide-react';

export default function NavBar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Activity className="w-6 h-6 text-sky-500" />
            <span className="font-bold text-xl text-slate-50 tracking-tight">OpStream</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <button onClick={() => scrollTo('problem')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Problem</button>
              <button onClick={() => scrollTo('solutions')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Solutions</button>
              <button onClick={() => scrollTo('demo')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Demo</button>
              <button onClick={() => scrollTo('cashflow')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Cash Flow</button>
              <button onClick={() => scrollTo('about')} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</button>
            </div>
          </div>
          
          <div>
            <button 
              onClick={() => scrollTo('diagnostic')}
              className="bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              Book 15-Min Audit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
