export default function Leaders() {
  // Data for the sidebar steps
  const steps = [
    { id: 1, label: "Welcome", status: "done" },
    { id: 2, label: "HUB Story", status: "done" },
    { id: 3, label: "HUB Family", status: "done" },
    { id: 4, label: "Our Values", status: "done" },
    { id: 5, label: "Meet HOWS", status: "done" },
    { id: 6, label: "Your Modules", status: "done" },
    { id: 7, label: "Life At HUB", status: "done" },
    { id: 8, label: "Leadership", status: "active" }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white-50 to-amber-50 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Content Wrapper holding both floating cards */}
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-8 items-start">
        
        {/* --- Left Floating Sidebar Card --- */}
        <div className="w-full lg:w-1/4 bg-gradient-to-r from-sky-100 to-pink-100 border-2 border-white rounded-[30px] p-8 shadow-lg h-[620px]">
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
        <div className="w-full lg:w-3/4 bg-gradient-to-r from-sky-100 to-pink-100 border-2 border-white rounded-[30px] p-8 shadow-lg">
          <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800">Your Leaders</h1>
          <p className="text-gray-500 mt-2 mb-8">
            Meet the founders and heads driving our vision forward.
          </p>

          {/* LEADERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Ranjith */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/ranjith.png" alt="Ranjith" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Ranjith P Raj</h3>
              <p className="text-gray-500 text-sm mt-1">Founder & Director</p>
            </div>

            {/* Sushmita */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/girlS.png" alt="Sushmita" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Sushmita</h3>
              <p className="text-gray-500 text-sm mt-1">Co-Founder</p>
            </div>

            {/* Ebbes */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="T.png" alt="Ebbes Alex" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Ebbes Alex</h3>
              <p className="text-gray-500 text-sm mt-1">Operations Head</p>
            </div>

            {/* Kulwant & Saeed */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="ES.png" alt="Sales Heads" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Kulwant & Saeed</h3>
              <p className="text-gray-500 text-sm mt-1">Sales Heads</p>
            </div>

            {/* Razi */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/P.png" alt="Razi" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Razi</h3>
              <p className="text-gray-500 text-sm mt-1">Branch Lead, Sarjapura</p>
            </div>

          </div>

          {/* ADDITIONAL HUBSTERS */}
          <div className="flex justify-between items-center mt-8">
            <p className="text-sm text-gray-400">Additional Hubsters</p>
            <a className="text-sm text-gray-400" href="#">View all 50+ HUBsters</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/P.png" alt="Razi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm">Senior Designer</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="T.png" alt="Sales Heads" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm">Project Manager</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/girlS.png" alt="Sushmita" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm">Senior Designer</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-end mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md">
              Let’s Get Started →
            </button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
