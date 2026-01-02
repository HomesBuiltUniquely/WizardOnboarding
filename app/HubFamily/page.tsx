"use client";
import Link from 'next/link';

// --- CUSTOM SVG COMPONENTS TO MATCH IMAGE EXACTLY ---

const HubInteriorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M9 21V11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10" />
    <path d="M12 2C7 2 3 5 3 9c0 1 1 2 1 2" />
    <path d="M12 2c5 0 9 3 9 7c0 1-1 2-1 2" />
    <path d="M8 14h8" />
  </svg>
);

const HomesUnderBudgetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .5-2 .5-3a3.5 3.5 0 1 0-7 0c0 1 .3 2 .5 3" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2v2" />
    <path d="M5 8h2" />
    <path d="M17 8h2" />
  </svg>
);

const HubsoluteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813L4.275 8.813l4.713 3.425-1.8 5.537L12 14.35l4.812 3.425-1.8-5.537 4.713-3.425-5.813-.001L12 3Z" />
    <path d="M5 3L6 4" /><path d="M19 3L18 4" /><path d="M5 21L6 20" />
  </svg>
);

const HomeAndMerryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
    <path d="M3 11v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-3" />
    <path d="M3 11h18" />
    <path d="M7 17v2" /><path d="M17 17v2" />
  </svg>
);

const TheOfficeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h2" /><path d="M14 7h2" />
    <path d="M8 11h2" /><path d="M14 11h2" />
    <path d="M8 15h2" /><path d="M14 15h2" />
    <path d="M12 21v-3" />
  </svg>
);

// --- UPDATED BRAND DATA ---

const brands = [
  {
    name: "Hub Interior",
    desc: "The umbrella brand",
    icon: <HubInteriorIcon />,
    bg: "bg-[#FCECE4]",
    textColor: "text-[#D97706]"
  },
  {
    name: "Homes Under Budget",
    desc: "Smart, modular, affordable interiors",
    icon: <HomesUnderBudgetIcon />,
    bg: "bg-[#FEF3C7]",
    textColor: "text-[#B45309]"
  },
  {
    name: "Hubsolute",
    desc: "Luxury interiors",
    icon: <HubsoluteIcon />,
    bg: "bg-[#D1FAE5]",
    textColor: "text-[#059669]"
  },
  {
    name: "Home & Merry",
    desc: "Décor & furnishings e-commerce",
    icon: <HomeAndMerryIcon />,
    bg: "bg-[#DBEAFE]",
    textColor: "text-[#2563EB]"
  },
  {
    name: "The Office",
    desc: "Commercial interiors",
    icon: <TheOfficeIcon />,
    bg: "bg-[#F3E8FF]",
    textColor: "text-[#7C3AED]"
  },
];

interface Step {
  id: number;
  label: string;
  isActive: boolean;
  isCompleted?: boolean;
}

function ProgressTracker({ currentStep }: { currentStep: number }) {
  const steps: Step[] = [
    { id: 1, label: "Welcome", isActive: currentStep === 1, isCompleted: currentStep > 1 },
    { id: 2, label: "HUB Story", isActive: currentStep === 2, isCompleted: currentStep > 2 },
    { id: 3, label: "HUB Family", isActive: currentStep === 3 },
    { id: 4, label: "Our Values", isActive: currentStep === 4 },
    { id: 5, label: "Meet HOWS", isActive: currentStep === 5 },
    { id: 6, label: "Your Modules", isActive: currentStep === 6 },
    { id: 7, label: "Life At HUB", isActive: currentStep === 7 },
    { id: 8, label: "Leadership", isActive: currentStep === 8 },
  ];

  return (
    <div className="w-72 flex flex-col items-start p-12">
      <div className="relative flex flex-col gap-10">
        <div className="absolute left-[11px] top-[10px] bottom-[10px] w-[2px] bg-orange-100" />
        
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-6 relative">
            <div className={`
              w-[24px] h-[24px] rounded-full flex items-center justify-center transition-all relative z-10
              ${step.isCompleted || step.isActive ? "bg-[#EBA886]" : "bg-gray-200"}
            `}>
              {step.isCompleted && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <div className={`
              px-5 py-2 rounded-full transition-all
              ${step.isActive ? "bg-white shadow-md text-gray-800 font-bold scale-105" : "text-gray-400 font-medium"}
            `}>
              <span className="text-sm whitespace-nowrap">Step {step.id}: {step.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Herosection() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl p-16 max-w-5xl w-full border border-white/50">
        <h1 className="text-5xl font-extrabold mb-12 text-[#1A2B4E]">Our Ecosystem</h1>

        <div className="grid grid-cols-2 gap-8 mb-12">
          {brands.map((brand, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-gray-100 hover:border-orange-200 transition-all hover:shadow-xl group cursor-pointer flex flex-col items-start">
              <div className={`w-14 h-14 ${brand.bg} ${brand.textColor} rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:rotate-6`}>
                {brand.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">{brand.name}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{brand.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <Link href="/OurValues">
            <button className="bg-[#5676C2] hover:bg-[#4561a3] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg flex items-center gap-3">
              Our Values <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HubFamilyPage() {
  return (
    <div className="min-h-screen bg-[#FDF6F0] flex overflow-hidden">
      <ProgressTracker currentStep={3} />
      <Herosection />
    </div>
  );
}