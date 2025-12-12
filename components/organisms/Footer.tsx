import {
  RiArrowDownSLine,
  RiBookOpenLine,
  RiCloseLine,
  RiDiscordFill,
  RiEqualizerLine,
  RiFullscreenLine,
  RiLayout5Line,
  RiLayoutGridLine,
  RiNotification3Line,
  RiQuestionLine,
} from "react-icons/ri";

const navItems = [
  { label: "Wallet", hasDot: true },
  { label: "Twitter", hasDot: true },
  { label: "Discover", hasDot: true },
  { label: "Pulse", hasDot: true },
  { label: "PnL", hasDot: false },
];

const utilityIcons = [
  { label: "Layouts", Icon: RiLayout5Line },
  { label: "Fullscreen", Icon: RiFullscreenLine },
  { label: "Notifications", Icon: RiNotification3Line },
  { label: "Support", Icon: RiQuestionLine },
  { label: "Discord", Icon: RiDiscordFill },
  { label: "Close Dock", Icon: RiCloseLine },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#090B12] bg-[#040509]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-350 flex-col gap-3 text-[11px] text-white/70 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <button className="flex items-center gap-2 rounded-full border border-[#1D2E66] bg-linear-to-r from-[#0F1E4D] to-[#162F73] px-4 py-1.5 font-semibold text-[#9AB6FF] shadow-[0_0_20px_rgba(22,69,211,0.35)]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#11204D] text-[#96ABFF]">
              <RiEqualizerLine className="h-3.5 w-3.5" />
            </span>
            PRESET 1
          </button>

          <div className="flex items-center gap-2 rounded-full border border-[#161A25] bg-[#070A11] px-3 py-1 text-[10px] uppercase tracking-wider text-white/60">
            <RiLayoutGridLine className="text-white/50" />
            <span className="rounded-full border border-[#242838] bg-[#10131F] px-2 py-0.5 text-[10px] font-semibold text-white/80">
              1
            </span>
            <img src="/solana.png" alt="Solana" className="h-3 w-auto" />
            <span className="rounded-full border border-[#242838] bg-[#0F131D] px-2 py-0.5 font-semibold text-white/80">
              0
            </span>
            <RiArrowDownSLine className="text-white/40" />
          </div>

          <div className="flex items-center gap-1 border-l border-white/5 pl-2 text-[12px] font-medium">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="relative px-2 py-1 text-white/70 transition hover:text-white"
              >
                {item.hasDot && (
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#FF4BA0] shadow-[0_0_6px_rgba(255,75,160,0.7)]" />
                )}
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#1C3523] bg-[#07130C] px-3 py-1 text-[#8CFDC6] shadow-[0_0_15px_rgba(20,84,49,0.4)]">
            <span className="flex h-6 w-10 items-center justify-center rounded-full bg-[#0F2316] text-[11px] font-semibold text-[#7FE7AD]">
              ◎
            </span>
            <span className="text-sm font-semibold">$134.43</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <div className="flex items-center gap-2 rounded-full border border-[#1A3E2D] bg-[#06150D] px-3 py-1 text-[11px] text-[#8CFDC6]">
            <span className="h-2 w-2 rounded-full bg-[#38FF84] shadow-[0_0_8px_rgba(56,255,132,0.8)]" />
            Connection is stable
          </div>

          <button className="flex items-center gap-1 rounded-full border border-[#181C2A] bg-[#070A12] px-3 py-1 text-[11px] text-white/70">
            GLOBAL <RiArrowDownSLine className="text-white/40" />
          </button>

          {utilityIcons.map(({ Icon, label }) => (
            <button
              key={label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#141724] bg-[#070A11] text-white/70 transition hover:text-white"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}

          <button className="flex items-center gap-1 rounded-full border border-[#151924] bg-[#070A11] px-3 py-1 text-[11px] text-white/70">
            <RiBookOpenLine className="h-4 w-4 text-white/50" />
            Docs
          </button>
        </div>
      </div>
    </footer>
  );
}
