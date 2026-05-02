import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  HashtagIcon,
  WindowIcon,
  CommandLineIcon,
  Bars2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  HashtagIcon as HashtagSolid,
  WindowIcon as WindowSolid,
  CommandLineIcon as CommandSolid,
} from "@heroicons/react/24/solid";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  const navItems = [
    {
      path: "/",
      Outline: HashtagIcon,
      Solid: HashtagSolid,
      label: "Index",
      id: "01",
    },
    {
      path: "/archive",
      Outline: WindowIcon,
      Solid: WindowSolid,
      label: "Archive",
      id: "02",
    },
    {
      path: "/system",
      Outline: CommandLineIcon,
      Solid: CommandSolid,
      label: "System",
      id: "03",
    },
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR: Technical Manifest */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-20 border-r border-slate-100 bg-white flex-col justify-between items-center py-10 z-50">
        {/* System Identifier */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center">
            <span className="text-black text-[10px] font-black italic">A.</span>
          </div>
          <span
            className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-300 select-none whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Terminal — SMK N 6 / Hummatech
          </span>
        </div>

        {/* Core Navigation */}
        <nav className="flex flex-col gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative group p-3 transition-all duration-500 ${isActive ? "text-indigo-600 scale-110" : "text-slate-300 hover:text-slate-950"}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <item.Solid className="w-5 h-5" />
                  ) : (
                    <item.Outline className="w-5 h-5" />
                  )}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-focus"
                        className="absolute inset-0 border border-indigo-600/20 rounded-sm -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                      />
                    )}
                  </AnimatePresence>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Global Status Indicator */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[8px] font-mono font-bold text-slate-300 uppercase tracking-tighter">
            Active
          </span>
        </div>
      </aside>

      {/* MOBILE TRIGGER: Floating Interface */}
      <div className="md:hidden fixed top-0 left-0 w-full z-[60] flex justify-between items-center p-6 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <span className="font-black tracking-tightest text-xl uppercase text-slate-950">
          Afdanu.
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 bg-slate-950 text-white flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Bars2Icon className="w-5 h-5" />
        </button>
      </div>

      {/* MOBILE OVERLAY: Typographic Takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-8 border-b border-slate-50">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-indigo-600">
                Protokol Navigasi
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 flex items-center justify-center hover:rotate-90 transition-transform duration-500"
              >
                <XMarkIcon className="w-8 h-8 text-slate-950" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-10 gap-12">
              {navItems.map((item, idx) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-end gap-6 transition-all duration-500 ${isActive ? "translate-x-4" : "opacity-30 hover:opacity-100 hover:translate-x-2"}`
                  }
                >
                  <span className="text-sm font-black text-indigo-600 mb-2">
                    {item.id}
                  </span>
                  <span className="text-[15vw] font-black tracking-tightest leading-none uppercase text-slate-950">
                    {item.label}
                  </span>
                </NavLink>
              ))}
            </nav>

            <div className="p-10 grid grid-cols-2 border-t border-slate-50">
              <div className="flex flex-col gap-1">
                <span className="text-[8px] font-black uppercase text-slate-300 tracking-widest">
                  Environment
                </span>
                <span className="text-[10px] font-bold text-slate-950">
                  CachyOS / Neovim
                </span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span className="text-[8px] font-black uppercase text-slate-300 tracking-widest">
                  Build ID
                </span>
                <span className="text-[10px] font-bold text-slate-950">
                  2026.05.02_STABLE
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
