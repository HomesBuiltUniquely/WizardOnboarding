import React from 'react';

const ModulesPage = () => {
  // Data for the sidebar steps
  const steps = [
    { id: 1, label: "Welcome", status: "done" },
    { id: 2, label: "Personalize", status: "done" },
    { id: 3, label: "Preferences", status: "done" },
    { id: 4, label: "Team", status: "done" },
    { id: 5, label: "Tools", status: "done" },
    { id: 6, label: "Your Modules", status: "active" },
    { id: 7, label: "Our Culture", status: "inactive" },
    { id:8, label: "Leadership", status: "inactive" }
  ];

  // Data for the modules cards
  const modules = [
    {
      title: "CRM",
      description: "Manage leads & follow-ups",
      icon: "💼", // Using emoji as placeholder for 3D icon
      bgClass: "bg-orange-100",
      textClass: "text-orange-800",
      iconBg: "bg-orange-200"
    },
    {
      title: "Projects",
      description: "Track design/production/ execution",
      icon: "🏗️",
      bgClass: "bg-green-100",
      textClass: "text-green-800",
      iconBg: "bg-green-200"
    },
    {
      title: "Finance",
      description: "Invoices, collections, commissions",
      icon: "💰",
      bgClass: "bg-yellow-100",
      textClass: "text-yellow-800",
      iconBg: "bg-yellow-200"
    },
    {
      title: "HR",
      description: "Attendance, leaves, payroll",
      icon: "🧑‍💼",
      bgClass: "bg-purple-100",
      textClass: "text-purple-800",
      iconBg: "bg-purple-200"
    },
    {
      title: "Analytics",
      description: "Performance dashboards",
      icon: "📊",
      bgClass: "bg-blue-100",
      textClass: "text-blue-800",
      iconBg: "bg-blue-200"
    },
  ];

  return (
    // Outer Container - Mint Background
    <div className="min-h-screen w-full bg-[#A3E4D7] flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Content Wrapper holding both floating cards */}
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row gap-8 items-start">
        
        {/* --- Left Floating Sidebar Card --- */}
        <div className="w-full lg:w-1/4 bg-[#E8F8F5] rounded-[30px] p-8 shadow-lg h-[620px]">
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
        <div className="w-full  lg:w-3/4 bg-[#E8F8F5] rounded-[30px] p-8 md:p-12 shadow-lg flex flex-col items-center text-center">
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 self-start text-left">
            HOWS Modules
          </h1>
          <p className="text-slate-600 text-lg mb-12 self-start text-left">
            Explore your core workspace. Each module is a home for your daily tasks.
          </p>

        
              {/* Modules Grid Section */}
              <div className="relative w-full mt-20 mb-12 ">
            
            {/* Floating Tooltip Box */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-1/3 md:translate-x-12 z-20 animate-bounce-slow">
               <div className="bg-[#FDF4C4] border-2 border-dashed border-yellow-400 text-yellow-800 px-4 py-3 rounded-xl shadow-sm text-sm font-medium relative">
                  Click on each module to know where your daily tasks live.
                  {/* Tooltip pointy arrow */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-yellow-400"></div>
               </div>
            </div>

            {/* Grid of Modules */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
              {modules.map((mod, index) => (
                <div key={index} className={`${mod.bgClass} rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all cursor-pointer hover:-translate-y-1`}>
                  <div className={`w-16 h-16 ${mod.iconBg} rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner`}>
                    {mod.icon}
                  </div>
                  <h3 className={`font-bold text-lg mb-2 ${mod.textClass}`}>{mod.title}</h3>
                  <p className="text-sm text-slate-600 leading-tight">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Button */}
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-200 flex items-center gap-2">
            Our Culture
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>


        </div>
      </div>
    </div>
  );
};

export default ModulesPage;