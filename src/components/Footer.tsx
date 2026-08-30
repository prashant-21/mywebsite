"use client";
import React from 'react';
import { Activity, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <Activity className="w-6 h-6 text-sky-500" />
              <span className="font-bold text-xl text-slate-50 tracking-tight">OpStream</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Pragmatic operational automation for SMBs. Turn chaos into protected profit margins.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#" 
              className="text-slate-400 hover:text-sky-400 text-sm mb-4 transition-colors font-medium"
            >
              Connect on LinkedIn
            </a>
            <button className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors shadow-lg">
              <MessageCircle className="w-4 h-4" />
              Chat Directly on WhatsApp
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} OpStream Automations. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
