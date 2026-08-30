"use client";
import React from 'react';
import { BadgeDollarSign, AlertOctagon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CashFlowSection() {
  return (
    <section id="cashflow" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">Reward Your Best Customers. Protect Your Working Capital.</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stop relying on memory to track late payers. Our analytics give you instant cash flow leverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Prompt Payers */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-950/20 border border-emerald-900/50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-900/40 rounded-xl">
                <BadgeDollarSign className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100">Prompt Payers</h3>
                <span className="text-emerald-400 font-medium text-sm">Settles within 15–30 Days</span>
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
              <p className="text-slate-300 text-sm uppercase tracking-wide font-semibold mb-2 text-emerald-500">Tactical Action</p>
              <p className="text-slate-400 leading-relaxed">
                Automatically flag for volume discounts, early delivery perks, and loyalty rewards to accelerate repeat business and maintain strong relationships.
              </p>
            </div>
          </motion.div>

          {/* Chronic Late Payers */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-amber-950/10 border border-amber-900/30 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-900/20 rounded-xl">
                <AlertOctagon className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-100">Chronic Late Payers</h3>
                <span className="text-amber-500 font-medium text-sm">45+ Days Overdue</span>
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-5 border border-slate-800">
              <p className="text-slate-300 text-sm uppercase tracking-wide font-semibold mb-2 text-amber-500">Tactical Action</p>
              <p className="text-slate-400 leading-relaxed">
                Flag for mandatory advance deposits, strict credit limits, and priority offloading of aged inventory before granting fresh terms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
