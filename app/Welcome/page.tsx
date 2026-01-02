import Link from 'next/link';

export default function WelcomePage() {
  // Data for the sidebar steps
  const steps = [
    { id: 1, label: "Welcome", status: "active" },
    { id: 2, label: "Personalize", status: "inactive" },
    { id: 3, label: "Preferences", status: "inactive" },
    { id: 4, label: "Team", status: "inactive" },
    { id: 5, label: "Tools", status: "inactive" },
    { id: 6, label: "Your Modules", status: "inactive" },
    { id: 7, label: "Our Culture", status: "inactive" },
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
        <div className="w-full h-[620px] lg:w-3/4 bg-amber-50 border-2 border-white rounded-[30px] p-8 md:p-12 shadow-lg flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-12 max-w-2xl w-full">
            {/* Waving Hand Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <img
                  src="/waving-hand.png"
                  alt="Waving Hand"
                  className="w-[120px] h-[120px] animate-bounce"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Welcome to HUB!
            </h1>

            {/* Description */}
            <p className="text-center text-gray-600 mb-8 ml-12 text-lg leading-relaxed max-w-2xl mx-auto">
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
      </div>
    </div>
  );
}
