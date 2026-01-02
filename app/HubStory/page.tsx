"use client";
import Link from "next/link";

interface Step {
  id: number;
  label: string;
}

const steps: Step[] = [
  { id: 1, label: "1. Welcome" },
  { id: 2, label: "2. HUB Story" },
  { id: 3, label: "3. HUB Family" },
  { id: 4, label: "4. Our Values" },
  { id: 5, label: "5. Meet HOWS" },
  { id: 6, label: "6. Your Modules" },
  { id: 7, label: "7. Life At HUB" },
  { id: 8, label: "8. Leadership" },
];

function Sidebar({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-64 py-12 px-8 flex flex-col gap-12">
      {/* Logo - Matches the blue/orange "H" in image */}
      <div className="flex items-center gap-2">
        <img src="/Hubstory.png" alt="Logo" className="w-8 h-8 object-contain" />
        <span className="font-bold text-xl tracking-tight text-slate-800">HOWS</span>
      </div>

      {/* Steps Container */}
      <div className="relative flex flex-col gap-8">
        {/* Vertical Connector Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gray-200 -z-10" />

        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="relative flex items-center group">
              {/* The Indicator Dot/Check */}
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all z-10 
                ${isCompleted ? "bg-[#EBAC8B] border-[#EBAC8B]" : isActive ? "bg-[#EBAC8B] border-[#EBAC8B]" : "bg-white border-gray-300"}`}
              >
                {isCompleted && (
                   <span className="text-white text-[10px]">✓</span>
                )}
              </div>

              {/* Label with the Pill background for Active state */}
              <div className={`ml-4 px-4 py-2 rounded-full transition-all duration-300 w-full
                ${isActive ? "bg-[#FCECE4] text-slate-800" : "bg-transparent text-slate-500"}`}>
                <span className="text-sm font-medium">{step.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="flex-1 bg-white/40 backdrop-blur-md rounded-[40px] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-16 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Subtle background glow effect like the image */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-200/30 blur-[60px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-orange-200/20 blur-[60px] rounded-full" />

      {/* Illustration Area */}
      <div className="mb-12">
        <img
          src="/Hubstory.png" // Replace with your PNG
          alt="Illustration"
          className="h-44 object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-xl z-10">
        <h1 className="text-[42px] font-extrabold text-[#2D2D2D] leading-tight mb-6">
          From a gap to a revolution.
        </h1>
        <p className="text-[#6B7280] text-lg leading-relaxed mb-10">
          We started HUB to bridge the gap between unorganized carpentry and
          overpriced designer interiors. Our goal: make quality, modular
          interiors accessible to every home.
        </p>

        {/* The Orange Button */}
        <Link href="#">
          <button className="bg-[#EBAC8B] hover:bg-[#d6997a] text-white px-10 py-3.5 rounded-full font-semibold shadow-lg shadow-orange-200/50 transition-all flex items-center gap-2 mx-auto">
            Meet Our Brands <span className="text-xl">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function HubStoryPage() {
  return (
    <div className="min-h-screen bg-[#F2F9FB] flex items-center justify-center p-6 font-sans">
      {/* Outer Glow Wrapper */}
      <div className="flex w-full max-w-6xl min-h-[700px] bg-white/20 rounded-[50px] p-2 shadow-inner">
        <Sidebar currentStep={2} />
        <Hero />
      </div>
    </div>
  );
}