"use client";
import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-sm font-medium mb-8"
        >
          <Zap className="w-4 h-4" />
          Pragmatic Operations Automation for Growing Businesses
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
        >
          Turn Daily WhatsApp Chaos & Paper Invoices into <span className="text-emerald-400">Protected Profit Margins.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Eliminate manual data entry, streamline messy messaging updates, and gain instant visibility into late-paying customers—powered by intelligent workflows and 17+ years of supply chain expertise.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16"
        >
          <button 
            onClick={() => scrollTo('diagnostic')}
            className="w-full sm:w-auto px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-md font-semibold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          >
            Start Free 48-Hour Pilot
          </button>
          <button 
            onClick={() => scrollTo('demo')}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-50 border border-slate-700 rounded-md font-semibold text-lg transition-all"
          >
            View WhatsApp Workflow
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-slate-800/50 pt-8"
        >
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium">17+ Yrs Supply Chain Exp</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium">Zero New Software to Learn</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300">
            <Lock className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium">Enterprise-Grade Privacy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
