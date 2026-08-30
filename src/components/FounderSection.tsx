"use client";
import React from 'react';
import { HardHat } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border-2 border-slate-700">
              <HardHat className="w-10 h-10 text-sky-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-50 mb-4">Why Domain Experience Matters More Than Tech Jargon</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  With <strong className="text-slate-100">17+ years of hands-on experience</strong> in supply chain, piping material control, and complex operations, I know that introducing flashy, complicated software to a busy team usually fails.
                </p>
                <p className="pl-4 border-l-2 border-sky-500 italic text-slate-400">
                  "Most AI agencies are run by junior developers who don't understand vendor delays, cash flow crunches, or messy site operations. I build systems that fit your existing habits—not the other way around."
                </p>
                <p>
                  That's why our automation runs on tools your team already uses daily, like WhatsApp. We turn your operational clutter into protected profit margins without the learning curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
