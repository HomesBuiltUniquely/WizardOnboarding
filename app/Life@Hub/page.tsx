import Link from 'next/link';

export default function Life() {
  // Data for the sidebar steps (7 steps as shown in the design)
  const steps = [
    { id: 1, label: "Welcome", status: "done" },
    { id: 2, label: "Your Profile", status: "done" },
    { id: 3, label: "Team", status: "done" },
    { id: 4, label: "Tools", status: "done" },
    { id: 5, label: "Projects", status: "done" },
    { id: 6, label: "Culture", status: "done" },
    { id: 7, label: "Life at HUB", status: "active" },
    { id: 8, label: "Leadership", status: "inactive" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white-50 to-amber-50 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Content Wrapper holding both floating cards */}
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-8 items-start">
        
        {/* --- Left Floating Sidebar Card --- */}
        <div className="w-full lg:w-1/4 bg-amber-50 border-2 border-white rounded-[30px] p-8 shadow-lg h-[620px]">
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
                ) : step.status === 'done' ? (
                  // Done Step (Orange without glow)
                  <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                ) : (
                  // Inactive Step (Simple Dot)
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
        <div className="w-full h-[620px] lg:w-3/4 bg-amber-50 border-2 border-white rounded-[30px] p-8 md:p-12 shadow-lg flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-12 w-full h-full flex flex-col">
            
            {/* Main Content Area - Flex layout for text and illustration */}
            <div className="flex-1 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Left Text Content */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight mb-6 -mt-5">
                  Work hard. Create joy.<br/>Celebrate often.
                </h1>

                {/* Body Text */}
                <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                  We call it Hubppening! — where recognition, laughter, and creativity come together. And yes, meet Dinkan, our Junior Happiness Associate 🐶
                </p>

                {/* Button */}
                <Link href="/Leaders">
                  <button className="bg-[#FF8C42] hover:bg-[#FF7A2E] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-base">
                    Meet the People
                    <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>

              {/* Right Illustration Area */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Illustration with people and dog */}
                  <img
                    src="/dog.png"
                    alt="Team collaboration with Dinkan"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
