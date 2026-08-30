"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Does our team need to install new software or apps?",
    a: "No, everything runs through standard WhatsApp messaging and camera uploads. There is zero learning curve. If they know how to send a photo on WhatsApp, they know how to use our system."
  },
  {
    q: "Is our financial and vendor data secure?",
    a: "Yes. All data pipelines are private, strictly isolated, and never used to train public AI models. Your business data remains exclusively yours, hosted in secure, enterprise-grade cloud environments."
  },
  {
    q: "How long does setup take?",
    a: "We can run a live 48-hour pilot on 10 of your past invoices or one WhatsApp channel with zero business disruption. A full deployment typically takes less than a week."
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-50 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400">Clear answers for practical operations leaders.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-100 text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
