import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-white px-6 md:px-24">
      {/* Background Structural Grid */}
      <div className="absolute inset-0 grid grid-cols-12 opacity-[0.03] pointer-events-none">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="h-full border-r border-slate-950" />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-12 gap-4 border-t border-slate-950 pt-12">
          {/* Metadata: Identity & Specs */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-12 md:col-span-3 flex flex-col gap-10"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold tracking-[0.4em] text-indigo-600 uppercase">
                System Identity
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase leading-tight">
                Mohammad Afdanu Saputra <br />
                SMK Negeri 6 Jember
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold tracking-[0.4em] text-indigo-600 uppercase">
                Core Stack
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase">
                React, TS, Flutter, Arch
              </span>
            </div>
          </motion.div>

          {/* Core Statement */}
          <div className="col-span-12 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl font-black tracking-tighter text-slate-950 uppercase leading-[0.85] mb-8 md:text-5xl">
                Engineering <br />
                <span className="text-indigo-600 italic">Structural</span>{" "}
                Silence.
              </h1>
              <p className="max-w-xs text-[12px] leading-relaxed font-medium text-slate-400 uppercase tracking-tight">
                Membangun logika digital dengan presisi kernel. Fokus pada
                integritas kode dan estetika fungsional.
              </p>
            </motion.div>
          </div>

          {/* Action Trigger */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-12 md:col-span-3 flex justify-end items-end"
          >
            <button className="group flex items-center gap-6 border border-slate-200 px-8 py-4 hover:bg-slate-950 hover:text-white transition-all duration-500">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase">
                Initialize
              </span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
