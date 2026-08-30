"use client";
import React from 'react';
import { Workflow, LineChart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-24 bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">The 2-Pillar Operational Intelligence Engine</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Practical automation designed for the real world—built by operations experts, not just software devs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 lg:p-10"
          >
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 border border-sky-500/20">
              <Workflow className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Frictionless Workflow Automation</h3>
            <p className="text-sky-400 text-sm font-medium mb-6 uppercase tracking-wider">Immediate Productivity</p>
            
            <ul className="space-y-5">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-medium mb-1">Dedicated Assistant Line</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Field staff send invoice photos or daily wrap-up audio notes directly to a dedicated WhatsApp business number.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-medium mb-1">Human-in-the-Loop Verification</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">If a receipt is missing context, the assistant automatically asks 1-2 quick questions (e.g., Vendor Code) and confirms with a text summary before logging.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-medium mb-1">Daily Standup Intelligence</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">End-of-day prompts collect team progress and automatically generate a 1-minute executive summary for the owner.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-2xl p-8 lg:p-10"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 border border-emerald-500/20">
              <LineChart className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-2">Margin Protection & Cash Flow</h3>
            <p className="text-emerald-400 text-sm font-medium mb-6 uppercase tracking-wider">Strategic Impact</p>
            
            <ul className="space-y-5">
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-medium mb-1">Centralized Structured Database</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">All operational entries flow automatically into structured, clean records without any manual typing or messy spreadsheets.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-medium mb-1">Payment Health & DSO Tracking</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Tracks Days Sales Outstanding (DSO) automatically to highlight cash flow risks and overdue accounts before they hurt your margins.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-200 font-medium mb-1">Vendor Audit Trails</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Cross-reference every delivery and challan perfectly mapped to its exact project code for airtight monthly billing.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
