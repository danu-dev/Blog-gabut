import {
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-slate-950 bg-white px-6 py-20 text-slate-950 md:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-12">
          {/* System Info / Identity */}
          <div className="col-span-12 flex flex-col gap-8 md:col-span-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-indigo-600 uppercase">
                System Operator
              </span>
              <h2 className="text-lg font-black tracking-tighter uppercase">
                Mohammad Afdanu Saputra
              </h2>
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-tight">
                Software Engineering // SMK Negeri 6 Jember
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
              <CpuChipIcon className="h-4 w-4" />
              <span>CachyOS Kernel v6.x</span>
            </div>
          </div>

          {/* Environment Specs */}
          <div className="col-span-6 flex flex-col gap-6 md:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-indigo-600 uppercase">
              Environment
            </span>
            <ul className="flex flex-col gap-3 text-[11px] font-semibold text-slate-500 uppercase">
              <li className="flex items-center gap-2">
                <CommandLineIcon className="h-3.5 w-3.5 text-slate-300" />{" "}
                Neovim / VS Code
              </li>
              <li className="flex items-center gap-2">
                <GlobeAltIcon className="h-3.5 w-3.5 text-slate-300" /> Jember,
                ID (UTC+7)
              </li>
            </ul>
          </div>

          {/* Connectivity */}
          <div className="col-span-6 flex flex-col gap-6 md:col-span-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-indigo-600 uppercase">
              Connectivity
            </span>
            <div className="flex flex-col gap-3 text-[11px] font-bold uppercase">
              <a
                href="https://github.com/DanzSukaRgb"
                className="text-slate-500 transition-colors hover:text-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub_Repository
              </a>
              <a
                href="#"
                className="text-slate-500 transition-colors hover:text-indigo-600"
              >
                LinkedIn_Profile
              </a>
              <a
                href="mailto:contact@danu.dev"
                className="text-slate-950 underline decoration-indigo-600 underline-offset-4"
              >
                Initialize_Contact
              </a>
            </div>
          </div>

          {/* Back to Top Intervention */}
          <div className="col-span-12 flex items-end justify-end md:col-span-2">
            <button
              onClick={scrollToTop}
              className="group flex h-14 w-14 items-center justify-center border border-slate-200 transition-all hover:bg-slate-950 hover:text-white"
            >
              <ArrowUpIcon className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 md:flex-row">
          <span className="font-mono text-[9px] text-slate-300 uppercase tracking-widest">
            Build_ID: 2026.05.02_STABLE
          </span>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">
            © 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
