import {
  RiArrowDownSLine,
  RiNotification3Line,
  RiSearch2Line,
  RiStarLine,
  RiUserSettingsLine,
  RiWallet3Line,
} from "react-icons/ri";

const navItems = [
  "Discover",
  "Pulse",
  "Trackers",
  "Perpetuals",
  "Yield",
  "Vision",
  "Portfolio",
  "Rewards",
];

export default function Header() {
  return (
    <header className="border-b border-[#13131C] bg-[#05060B]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between gap-3 px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-3">
              <img
                src="/axiom.png"
                alt="axiom logo"
                className="h-6 w-auto"
              />
          </a>

          <nav className="hidden items-center text-sm font-medium text-white/70 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative rounded-sm px-4 py-1.5 transition hover:bg-[#141C3C] ${
                  item === "Pulse" ? "text-[#526FFF]" : "text-white  hover:text-[#5865F2]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1D1F2A] bg-[#0C0F16] text-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <RiSearch2Line className="h-4 w-4 font-bold" />
          </button>

          <div className="flex h-10 items-center gap-2 rounded-full border border-[#11231A] bg-[#020709] px-4 text-xs text-white">
            <img
                src="/solana.png"
                alt="solana logo"
                className="h-3 w-auto"
              />
            <span className="text-sm font-medium tracking-wide text-white">
              SOL
            </span>
            <RiArrowDownSLine className="text-white font-extrabold" />
          </div>

          <button className="h-8 rounded-full bg-[#526FFF] px-3 text-sm font-extrabold text-black  transition hover:bg-[#]">
            Deposit
          </button>

          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#22242D] text-white/80 transition hover:border-[#3A3E55] md:flex">
            <RiStarLine className="h-4 w-4 font-extrabold" />
          </button>

          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#22242D] text-white/80 transition hover:border-[#3A3E55] md:flex">
            <RiNotification3Line className="h-4 w-4 font-extrabold" />
          </button>

          <div className="hidden h-10 items-center gap-3 rounded-full bg-[#22242D] px-4 text-xs font-medium text-white md:flex">
            <RiWallet3Line className="h-4 w-4 text-white/80" />
            <div className="flex items-center gap-2">
              <img
                src="/solana.png"
                alt="solana logo"
                className="h-3 w-auto"
              />
              <span className="text-white/70">0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/70">0</span>
            </div>
            <RiArrowDownSLine className="text-white/80" />
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22242D] text-white/80 transition hover:border-[#3A3E55]">
            <RiUserSettingsLine className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}