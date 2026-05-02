import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import { posts } from "../data/posts";

export default function Feed() {
  return (
    <section className="bg-white px-6 py-24 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-6">
          <span className="text-[10px] font-bold tracking-[0.5em] text-slate-400 uppercase">
            Project Ledger
          </span>
          <span className="text-[10px] font-mono text-slate-300">v1.0.26</span>
        </div>

        <div className="flex flex-col">
          {posts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-12 gap-6 border-b border-slate-100 py-12 hover:bg-slate-50/50 transition-all px-4 cursor-pointer"
            >
              <div className="col-span-1 flex items-start pt-1">
                <span className="text-[10px] font-bold text-slate-300 font-mono">
                  0{idx + 1}
                </span>
              </div>

              <div className="col-span-11 md:col-span-7 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-black tracking-tighter text-slate-950 group-hover:text-indigo-600 transition-colors uppercase">
                    {item.title}
                  </h3>
                  <div className="h-[1px] w-8 bg-slate-200 group-hover:w-12 group-hover:bg-indigo-600 transition-all" />
                </div>
                <p className="max-w-md text-[11px] font-medium leading-relaxed text-slate-400 uppercase tracking-tight">
                  {item.desc}
                </p>
              </div>

              <div className="hidden md:flex col-span-3 items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">
                  {item.category}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-end">
                <div className="w-10 h-10 border border-slate-100 flex items-center justify-center group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <PlusIcon className="h-4 w-4 transition-transform group-hover:rotate-90" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
