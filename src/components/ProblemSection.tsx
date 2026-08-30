"use client";
import React from 'react';
import { MessageSquareOff, FileWarning, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: <MessageSquareOff className="w-8 h-8 text-amber-500 mb-4" />,
    title: "Scattered WhatsApp Groups",
    desc: "Sales updates, site engineering logs, and material delays get lost inside 200 daily messages. Critical data is buried in endless scrolling."
  },
  {
    icon: <FileWarning className="w-8 h-8 text-amber-500 mb-4" />,
    title: "Crumpled Paper Receipts",
    desc: "Handwritten bills, vendor delivery challans, and fuel receipts pile up on desks, delaying billing cycles and causing manual entry errors."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-red-400 mb-4" />,
    title: "Blind Spot Cash Flow",
    desc: "Business owners have no real-time visibility into which clients habitually pay late until working capital unexpectedly runs dry."
  }
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">Where Growing Businesses Leak Time, Cash, and Margins</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Managing day-to-day operations through sheer memory and scattered chats creates critical blind spots.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:bg-slate-900 transition-colors"
            >
              {prob.icon}
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{prob.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
