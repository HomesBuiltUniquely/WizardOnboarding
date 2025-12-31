import Link from 'next/link';

export default function Herosection() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-12 max-w-2xl w-full">
        {/* Waving Hand Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              {/* Hand shape */}
              <path
                d="M60 20 C50 20, 40 25, 35 35 L30 50 C25 60, 25 70, 30 80 L35 90 C40 100, 50 105, 60 105 C70 105, 80 100, 85 90 L90 80 C95 70, 95 60, 90 50 L85 35 C80 25, 70 20, 60 20 Z"
                fill="url(#handGradient)"
              />
              {/* Motion lines */}
              <path
                d="M20 40 L30 45 M20 50 L30 55 M20 60 L30 65"
                stroke="#FF8C42"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
              />
              <defs>
                <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8C42" />
                  <stop offset="100%" stopColor="#FFB84D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Welcome to HUB!
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-8 ml-15 text-lg leading-relaxed w-115">
          You&apos;re now part of a team that&apos;s redefining the way India experiences home interiors. At HUB, we don&apos;t just build spaces — we build stories.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link href="/HubStory">
          <button className="bg-[#FF8C42] hover:bg-[#FF7A2E] text-white font-semibold py-2 px-5 rounded-4xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2 text-sm">
            Let&apos;s Begin
            <span className="text-xl">→</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

