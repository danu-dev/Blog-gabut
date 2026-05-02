import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CommandLineIcon,
  ArrowRightIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { posts } from "../data/posts";

export default function Archive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-white font-['Poppins'] md:flex-row">
      {/* MOBILE HEADER: Ditambahkan pt-24 untuk menghindar dari Fixed Navbar mobile */}
      <div className="flex w-full flex-col border-b border-slate-100 p-8 pt-24 md:hidden">
        <div className="mb-6 flex items-center gap-4 text-indigo-600">
          <CommandLineIcon className="h-5 w-5" />
          <span className="text-[10px] font-black tracking-[0.5em] uppercase">
            System Archive // V1.0
          </span>
        </div>
        <h1 className="text-5xl font-black leading-none tracking-tightest uppercase text-slate-950">
          Deep <br /> <span className="text-indigo-600 italic">Index.</span>
        </h1>
      </div>

      {/* DESKTOP SIDEBAR: Pilar identitas tetap statis */}
      <div className="hidden w-[35%] md:block">
        <aside className="sticky top-0 flex h-screen flex-col justify-between border-r border-slate-100 p-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-indigo-600">
              <CommandLineIcon className="h-5 w-5" />
              <span className="text-[10px] font-black tracking-[0.5em] uppercase">
                System Archive // V1.0
              </span>
            </div>

            <h1 className="text-[6vw] font-black leading-[0.85] tracking-tightest text-slate-950 uppercase">
              Deep <br /> <span className="text-indigo-600 italic">Index.</span>
            </h1>

            <p className="max-w-xs text-[11px] font-bold leading-relaxed tracking-tight text-slate-400 uppercase">
              Rekayasa perangkat lunak oleh Danu. Fokus pada optimasi kernel
              CachyOS.
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-100">
            <AnimatePresence mode="wait">
              {activeIndex !== null ? (
                <motion.img
                  key={posts[activeIndex].id}
                  initial={{
                    opacity: 0,
                    scale: 1.1,
                    filter: "grayscale(100%)",
                  }}
                  animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={posts[activeIndex].img}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <CpuChipIcon className="h-10 w-10 text-slate-100" />
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-[9px] font-black tracking-[0.4em] text-slate-300 uppercase">
            M. Afdanu Saputra // SMK N 6 Jember
          </div>
        </aside>
      </div>

      {/* PROJECT LEDGER: Offset mobile disesuaikan agar tidak menumpuk */}
      <div className="w-full md:w-[65%]">
        <div className="flex flex-col border-t border-slate-950 md:border-t-0">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative flex cursor-pointer flex-col border-b border-slate-100 p-8 transition-all duration-500 hover:bg-slate-50 md:p-20"
            >
              <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-[10px] font-bold text-slate-200 md:text-xs">
                    [{post.id}]
                  </span>
                  <div>
                    <h2 className="mb-2 text-3xl font-black tracking-tightest uppercase transition-colors duration-500 group-hover:text-indigo-600 md:text-6xl">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-slate-400">
                      <div className="h-[2px] w-6 bg-indigo-600 md:w-8" />
                      <span className="text-[9px] font-bold tracking-[0.3em] uppercase md:text-[10px]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex h-12 w-12 items-center justify-center border border-slate-200 transition-all duration-500 group-hover:bg-slate-950 group-hover:text-white md:h-14 md:w-14">
                  <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <span className="absolute right-10 top-1/2 -translate-y-1/2 select-none text-[15vw] font-black text-slate-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-[12vw]">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
