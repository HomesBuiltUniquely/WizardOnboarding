import Link from 'next/link';
import React from 'react';

const OnboardingPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#A3E4D7] flex items-center justify-center p-8 font-sans">
      <div className="bg-white w-full max-w-6xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">
        
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 bg-[#E8F8F5] p-10 flex flex-col border-r border-gray-100 relative">
          {/* Logo Area */}
          <div className="mb-16 flex items-center gap-2 font-bold text-xl text-slate-700">
            <div className="relative w-8 h-8">
              {/* Simple Logo Placeholder */}
              <svg viewBox="0 0 24 24" fill="none" className="text-slate-700 w-full h-full">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="absolute -top-1 -right-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="4">
                    <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <span>HOWS</span>
          </div>

          {/* Stepper Navigation */}
          <div className="flex-1 relative pl-2">
             {/* Vertical Line */}
            <div className="absolute left-[24px] top-2 bottom-20 w-[2px] bg-[#A3E4D7] "></div>

            <div className="flex flex-col gap-8 relative z-10">
              {/* Step 1: Done */}
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">1. Welcome</span>
              </div>

              {/* Step 2: Done */}
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">2. Profile</span>
              </div>

              {/* Step 3: Done */}
              <div className="flex items-center gap-4 text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">3. Team</span>
              </div>

              {/* Step 4: Done */}
              <div className="flex items-center gap-4 text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">4. Preferences</span>
              </div>

              {/* Step 5: Active */}
              <div className="flex items-center gap-4 text-slate-800">
                <div className="w-8 h-8 rounded-full bg-[#6366F1] shadow-lg shadow-indigo-200 flex items-center justify-center text-white relative">
                   {/* Glowing effect behind dot */}
                   <div className="absolute inset-0 bg-[#6366F1] blur opacity-50 rounded-full"></div>
                   <div className="relative w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm font-bold">5. Meet HOWS</span>
              </div>

            {/* Step 6: Active */}
            <div className="flex items-center gap-4 text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">6. Your Modules</span>
              </div>

            {/* Step 7: Active */}
            <div className="flex items-center gap-4 text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">7. Life At HUB</span>
              </div>

            {/* Step 8: Active */}
            <div className="flex items-center gap-4 text-gray-400">
                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-sm font-medium">8. Leadership</span>
              </div>

            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-2/3 p-12 lg:p-20  border-l-2 border-[#A3E4D7] flex flex-col items-center justify-center text-center bg-[#E8F8F5]">
          
          {/* Illustration Diagram */}
          <div className="mb-12 relative w-full max-w-lg">
            {/* Connection Lines (SVGs) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none text-gray-300" viewBox="0 0 400 200">
               {/* Center to Top Left */}
               <path d="M200 100 C 150 100, 150 50, 100 50" fill="none" stroke="currentColor" strokeWidth="2" />
               {/* Center to Top Right */}
               <path d="M200 100 C 250 100, 250 50, 300 50" fill="none" stroke="currentColor" strokeWidth="2" />
               {/* Center to Bottom Left */}
               <path d="M200 100 C 150 100, 150 150, 100 150" fill="none" stroke="currentColor" strokeWidth="2" />
               {/* Center to Bottom Right */}
               <path d="M200 100 C 250 100, 250 150, 300 150" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center relative z-10">
              {/* Top Left Icon */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-16 h-16 flex items-center justify-center">
                 <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              
              {/* Empty Middle Top */}
              <div></div>

              {/* Top Right Icon */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>

              {/* Middle Left Empty */}
              <div></div>

              {/* Center Hub Icon */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-24 h-24 flex items-center justify-center -my-4">
                 <svg className="w-12 h-12 text-[#6366F1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="14" r="4"/></svg>
              </div>

              {/* Middle Right Empty */}
              <div></div>

              {/* Bottom Left Icon */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-16 h-16 flex items-center justify-center">
                 <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/></svg>
              </div>

              {/* Empty Middle Bottom */}
              <div></div>

              {/* Bottom Right Icon */}
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Your Workspace. Simplified.
          </h1>
          
          <p className="text-slate-500 max-w-xl text-lg mb-10 leading-relaxed">
            HOWS connects every part of HUB — from sales to design, production, finance, and execution. You'll use HOWS to manage your work, track progress, and grow faster.
          </p>

         <Link href="/Modules">
         <button className="bg-[#6366F1] hover:bg-[#5558DD] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
            Explore HOWS Modules
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </button>
         </Link>

        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;