import {
  CommandLineIcon,
  CpuChipIcon,
  TrophyIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

export default function System() {
  const coreSpecs = [
    {
      label: "Primary OS",
      value: "Arch Linux (CachyOS)",
      icon: CommandLineIcon,
    },
    { label: "Hardware", value: "ThinkPad T420 Specialist", icon: CpuChipIcon },
    {
      label: "Focus",
      value: "Software Engineering / Mobile Dev",
      icon: CircleStackIcon,
    },
  ];

  const achievements = [
    {
      year: "2025",
      title: "Finalist Jagoan Hosting Infra Competition",
      desc: "Infrastruktur performa tinggi.",
    },
    {
      year: "2026",
      title: "Internship at Hummatech",
      desc: "Mobile development division.",
    },
  ];

  return (
    <section className="relative px-6 py-32 md:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header Section: Asymmetric Identity */}
        <div className="mb-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <span className="mb-6 block text-[10px] font-bold tracking-[0.5em] text-indigo-600 uppercase">
              System Operator // Profile
            </span>
            <h1 className="text-4xl font-black leading-[0.9] tracking-tightest text-slate-950 uppercase md:text-7xl">
              Mohammad <br />{" "}
              <span className="text-indigo-600 italic">Afdanu</span> Saputra.
            </h1>
          </div>
          <div className="col-span-12 flex flex-col justify-end md:col-span-4">
            <div className="border-l border-slate-200 pl-8">
              <p className="text-[13px] font-medium leading-relaxed text-slate-500 uppercase">
                Student at SMK Negeri 6 Jember. Berfokus pada rekayasa perangkat
                lunak dengan obsesi pada presisi sistem dan efisiensi kernel.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Ledger: Two Column Data */}
        <div className="grid grid-cols-12 gap-16">
          {/* Left Column: Specs */}
          <div className="col-span-12 md:col-span-5">
            <h3 className="mb-12 text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase">
              Core_Environment.log
            </h3>
            <div className="flex flex-col gap-12">
              {coreSpecs.map((spec) => (
                <div key={spec.label} className="group flex items-start gap-6">
                  <spec.icon className="h-5 w-5 text-slate-300 transition-colors group-hover:text-indigo-600" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                      {spec.label}
                    </span>
                    <span className="text-sm font-bold text-slate-950 uppercase">
                      {spec.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="col-span-12 md:col-span-7">
            <h3 className="mb-12 text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase">
              Achievement_History.txt
            </h3>
            <div className="flex flex-col gap-1">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="group border-b border-slate-100 py-8 transition-colors hover:bg-white px-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-indigo-600">
                      {item.year}
                    </span>
                    <TrophyIcon className="h-4 w-4 text-slate-200 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h4 className="text-lg font-black tracking-tighter text-slate-950 uppercase mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
