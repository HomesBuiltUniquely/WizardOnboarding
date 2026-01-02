"use client";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex-1 bg-gradient-to-b from-cyan-50 to-cyan-50 backdrop-blur-md   p-16 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Subtle background glow effect like the image */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-200/30 blur-[60px] rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-orange-200/20 blur-[60px] rounded-full" />

      {/* Illustration Area */}
      <div className="mb-12">
        <img
          src="/Hubstory.png" // Replace with your PNG
          alt="Illustration"
          className="h-44 object-contain mix-blend-multiply"
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
        <Link href="/HubFamily">
          <button className="bg-[#EBAC8B] hover:bg-[#d6997a] text-white px-10 py-3.5 rounded-full font-semibold shadow-lg shadow-orange-200/50 transition-all flex items-center gap-2 mx-auto">
            Meet Our Brands <span className="text-xl">→</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function HubStoryPage() {
  // Data for the sidebar steps
  const steps = [
    { id: 1, label: "Welcome", status: "done" },
    { id: 2, label: "HUB Story", status: "active" },
    { id: 3, label: "HUB Family", status: "done" },
    { id: 4, label: "Our Values", status: "inactive" },
    { id: 5, label: "Meet HOWS", status: "done" },
    { id: 6, label: "Your Modules", status: "inactive" },
    { id: 7, label: "Life At HUB", status: "inactive" },
    { id:8, label: "Leadership", status: "inactive" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-cyan-50 to-amber-50 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Content Wrapper holding both floating cards */}
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-8 items-start">
        
        {/* --- Left Floating Sidebar Card --- */}
        <div className="w-full lg:w-1/4 bg-gradient-to-b from-cyan-50 to-cyan-50 border-2 border-white rounded-[30px] p-8 shadow-lg h-[620px]">
          <div className="flex flex-col gap-8 relative pl-2 pt-10">

            
             {/* Vertical connector line */}
            <div className="absolute left-[19px] top-10 bottom-4 w-[2px] bg-gray-300 z-0"></div>

            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4 relative z-10 ">
                {step.status === 'active' ? (
                   // Active Step (Orange Glow)
                   <div className="w-6 h-6 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.6)] flex items-center justify-center relative">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                   </div>
                ) : (
                  // Done/Inactive Step (Simple Dot)
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                )}
                
                <span className={`text-sm font-medium ${step.status === 'active' ? 'text-orange-500 font-bold' : 'text-gray-500'}`}>
                  {step.id}. {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Right Floating Main Content Card --- */}
        <div className="w-full h-[620px] lg:w-3/4 bg-cyan-50 border-2 border-white rounded-[30px] p-8 md:p-12 shadow-lg flex items-center justify-center">
          <Hero />
        </div>
      </div>
    </div>
  );
}