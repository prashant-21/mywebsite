"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  industry: z.string().min(1, 'Please select an industry'),
  bottlenecks: z.array(z.string()).min(1, 'Select at least one bottleneck'),
  currentUpdateMethod: z.string().min(1, 'Please select a method'),
  phone: z.string().min(5, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
});

type FormValues = z.infer<typeof formSchema>;

export default function DiagnosticForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bottlenecks: [],
    }
  });

  const selectedBottlenecks = watch('bottlenecks') || [];

  const handleToggleBottleneck = (value: string) => {
    if (selectedBottlenecks.includes(value)) {
      setValue('bottlenecks', selectedBottlenecks.filter(b => b !== value), { shouldValidate: true });
    } else {
      setValue('bottlenecks', [...selectedBottlenecks, value], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="diagnostic" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-950 border border-emerald-900/50 rounded-2xl p-10 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-50 mb-2">Audit Request Received!</h3>
            <p className="text-slate-400 mb-6">
              We'll analyze your bottlenecks and prepare your customized 1-page efficiency breakdown. Expect to hear from us within 24 hours.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-sky-400 hover:text-sky-300 font-medium text-sm transition-colors"
            >
              Submit another request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="diagnostic" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-emerald-500"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-50 mb-3">Get Your Free 2-Minute Operational Bottleneck Audit</h2>
            <p className="text-slate-400">Tell us your current operational bottlenecks and receive a customized 1-page efficiency breakdown.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input 
                  {...register('fullName')}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all" 
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                <input 
                  {...register('companyName')}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all" 
                  placeholder="Acme Corp"
                />
                {errors.companyName && <p className="text-red-400 text-xs mt-1">{errors.companyName.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Industry / Sector</label>
              <select 
                {...register('industry')}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all appearance-none"
              >
                <option value="">Select an industry...</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Engineering/Contracting">Engineering / Contracting</option>
                <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                <option value="Site Services">Site Services</option>
                <option value="Other">Other</option>
              </select>
              {errors.industry && <p className="text-red-400 text-xs mt-1">{errors.industry.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Primary Daily Bottlenecks (Select all that apply)</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Tracking WhatsApp group updates",
                  "Paper/Handwritten invoice backlog",
                  "Chasing late customer payments",
                  "Project cost tracking"
                ].map(b => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => handleToggleBottleneck(b)}
                    className={`text-left px-4 py-3 rounded-lg border text-sm transition-all ${selectedBottlenecks.includes(b) ? 'bg-sky-500/20 border-sky-500 text-sky-300' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {errors.bottlenecks && <p className="text-red-400 text-xs mt-1">{errors.bottlenecks.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">How does your team currently share daily updates?</label>
              <div className="space-y-3">
                {[
                  "Mostly WhatsApp chats",
                  "Excel spreadsheets",
                  "Physical paper logs"
                ].map(opt => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      value={opt} 
                      {...register('currentUpdateMethod')}
                      className="w-4 h-4 text-sky-500 bg-slate-900 border-slate-700 focus:ring-sky-500 focus:ring-offset-slate-950" 
                    />
                    <span className="text-slate-300 text-sm group-hover:text-slate-100 transition-colors">{opt}</span>
                  </label>
                ))}
              </div>
              {errors.currentUpdateMethod && <p className="text-red-400 text-xs mt-1">{errors.currentUpdateMethod.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">WhatsApp / Phone Number</label>
                <input 
                  {...register('phone')}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all" 
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input 
                  {...register('email')}
                  type="email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all" 
                  placeholder="john@acmecorp.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-sky-500 hover:bg-sky-400 disabled:bg-sky-600 disabled:cursor-not-allowed text-white rounded-lg py-4 font-bold text-lg transition-all flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(14,165,233,0.3)] mt-6"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Processing...</>
              ) : (
                "Generate My Free Operational Audit"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
