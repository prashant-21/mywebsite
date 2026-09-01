"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Check, Database } from 'lucide-react';

interface Msg {
  id: number;
  sender: 'user' | 'bot' | 'system';
  text: string;
  hasImage?: boolean;
}

const sequence: Msg[] = [
  { id: 1, sender: 'user', text: "Uploaded bill for project site", hasImage: true },
  { id: 2, sender: 'bot', text: "Receipt received! Amount: ₹14,200. Vendor: Apex Industrial Supplies. Missing Project Code. Please reply with Site Code (e.g., Site-A or Site-B)." },
  { id: 3, sender: 'user', text: "Site-B" },
  { id: 4, sender: 'bot', text: "✓ Logged ₹14,200 to Site-B under Raw Materials. Reply 'YES' to record to database." },
  { id: 5, sender: 'user', text: "YES" },
  { id: 6, sender: 'system', text: "✓ Verified: Transaction #9482 written to Central Database" }
];

export default function WhatsAppDemo() {
  const [visibleMsgs, setVisibleMsgs] = useState<number[]>([]);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx >= sequence.length) {
        clearInterval(interval);
        return;
      }
      currentIdx++;
      setVisibleMsgs(prev => {
        if (prev.length >= sequence.length) return prev;
        return [...prev, sequence[prev.length].id];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-24 bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">See Human-in-the-Loop Capture in Action</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              No new apps for your team. Field workers snap photos and text updates just like they always do. Our intelligent engine extracts the data, verifies missing details directly with them, and locks it into your secure database.
            </p>
            <div className="flex items-center gap-3 text-emerald-400 font-medium">
              <Database className="w-5 h-5" />
              <span>Zero manual data entry required.</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-md mx-auto">
            <div className="bg-[#0b141a] rounded-3xl border-8 border-slate-800 h-[600px] w-full flex flex-col overflow-hidden shadow-2xl relative">
              {/* WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3 border-b border-slate-800 z-10">
                <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center">
                  <ActivityIcon />
                </div>
                <div>
                  <h3 className="text-slate-100 font-medium">OpStream Assistant</h3>
                  <p className="text-slate-400 text-xs">bot • online</p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto bg-[#0b141a] bg-opacity-95 flex flex-col gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <AnimatePresence>
                  {sequence.filter(m => visibleMsgs.includes(m.id)).map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} ${msg.sender === 'system' && 'justify-center'}`}
                    >
                      {msg.sender === 'system' ? (
                        <div className="bg-emerald-900/40 border border-emerald-800/50 text-emerald-300 text-xs py-1.5 px-3 rounded-full mt-2 font-medium flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5" />
                          {msg.text}
                        </div>
                      ) : (
                        <div className={`max-w-[85%] rounded-lg p-2.5 text-sm ${msg.sender === 'user' ? 'bg-[#005c4b] text-[#e9edef] rounded-tr-none' : 'bg-[#202c33] text-[#e9edef] rounded-tl-none'}`}>
                          {msg.hasImage && (
                            <div className="w-full h-32 bg-slate-800 rounded mb-2 flex items-center justify-center opacity-80 border border-slate-700">
                              <FileText className="text-slate-500 w-8 h-8" />
                            </div>
                          )}
                          <p>{msg.text}</p>
                          <div className="text-[10px] text-slate-400 text-right mt-1.5 flex justify-end items-center gap-1">
                            12:4{msg.id} PM {msg.sender === 'user' && <span className="text-sky-400">✓✓</span>}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  )
}
