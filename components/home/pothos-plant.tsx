import Link from 'next/link'

export const PothosPlant = ({ isActive }: { isActive: boolean }) => {
  return (
    <Link
      href="/"
      aria-current={isActive ? 'page' : undefined}
      aria-label="Home"
      className="group relative z-10 flex w-[5.5rem] shrink-0 flex-col items-center outline-none sm:w-28"
    >
      <svg
        viewBox="0 0 120 168"
        className="h-[9.5rem] w-full overflow-visible sm:h-[11.5rem]"
        aria-hidden="true"
      >
        <path
          d="M60 150 C58 120 42 108 28 86 C18 70 22 48 34 44"
          fill="none"
          stroke="#0f4f45"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M60 148 C62 118 78 104 92 80 C102 64 98 46 86 42"
          fill="none"
          stroke="#0f4f45"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M60 132 C54 110 40 96 22 78"
          fill="none"
          stroke="#136F63"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M62 128 C74 108 88 94 108 78"
          fill="none"
          stroke="#136F63"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <g className="origin-[34px_44px] animate-leaf-sway">
          <ellipse cx="30" cy="40" rx="16" ry="11" fill="#1a8f7c" transform="rotate(-28 30 40)" />
          <ellipse cx="30" cy="40" rx="10" ry="6" fill="#2db39a" transform="rotate(-28 30 40)" opacity="0.45" />
        </g>
        <g className="origin-[86px_42px] animate-leaf-sway" style={{ animationDelay: '0.6s' }}>
          <ellipse cx="90" cy="38" rx="15" ry="10" fill="#136F63" transform="rotate(24 90 38)" />
          <ellipse cx="90" cy="38" rx="9" ry="5.5" fill="#3ec9ae" transform="rotate(24 90 38)" opacity="0.4" />
        </g>
        <g className="origin-[22px_78px] animate-leaf-sway" style={{ animationDelay: '1.1s' }}>
          <ellipse cx="18" cy="74" rx="14" ry="10" fill="#0f5c53" transform="rotate(-40 18 74)" />
        </g>
        <g className="origin-[108px_78px] animate-leaf-sway" style={{ animationDelay: '1.7s' }}>
          <ellipse cx="110" cy="74" rx="13" ry="9" fill="#1a8f7c" transform="rotate(38 110 74)" />
        </g>
        <g className="origin-[48px_70px] animate-leaf-sway" style={{ animationDelay: '0.3s' }}>
          <ellipse cx="44" cy="66" rx="13" ry="9" fill="#136F63" transform="rotate(-12 44 66)" />
        </g>
        <g className="origin-[76px_64px] animate-leaf-sway" style={{ animationDelay: '2s' }}>
          <ellipse cx="80" cy="60" rx="12" ry="8" fill="#0f5c53" transform="rotate(16 80 60)" />
        </g>
        <g className="origin-[36px_108px] animate-leaf-sway" style={{ animationDelay: '0.9s' }}>
          <ellipse cx="32" cy="104" rx="12" ry="8" fill="#1a8f7c" transform="rotate(-22 32 104)" />
        </g>
        <g className="origin-[88px_100px] animate-leaf-sway" style={{ animationDelay: '1.4s' }}>
          <ellipse cx="92" cy="96" rx="11" ry="8" fill="#136F63" transform="rotate(20 92 96)" />
        </g>
        <g className="origin-[58px_92px] animate-leaf-sway" style={{ animationDelay: '2.2s' }}>
          <ellipse cx="56" cy="88" rx="10" ry="7" fill="#2db39a" transform="rotate(-6 56 88)" />
        </g>
      </svg>

      <span
        className={`relative -mt-6 flex h-12 w-[4.4rem] items-end justify-center rounded-b-[1.15rem] rounded-t-sm border-x-[10px] border-b-[14px] border-t-8 border-room-brown bg-[#c4a090] shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1 sm:h-14 sm:w-[5.4rem] ${
          isActive ? 'ring-2 ring-room-gold ring-offset-2 ring-offset-room-wall' : ''
        }`}
      >
        <span className="absolute inset-x-0 top-0 h-2 bg-black/10" />
        <span className="mb-0.5 font-script text-xl leading-none text-room-gold sm:text-2xl">
          home
        </span>
      </span>
    </Link>
  )
}
