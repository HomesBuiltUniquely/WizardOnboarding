import React from 'react';
import { Check, Award, Sparkles } from 'lucide-react';

export default function OnboardingCompletion() {
  // Array to represent the 9 steps
  const steps = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#E0E7FF] p-4">
      {/* Main Container */}
      <div className="relative w-full max-max-w-4xl aspect-[16/9] bg-[#E8EDFF] rounded-xl border-[3px] border-[#4ADE80] flex overflow-hidden shadow-2xl">
        
        {/* Left Section: Progress Sidebar */}
        <div className="w-1/4 flex flex-col items-center justify-center relative">
          <div className="bg-white/60 backdrop-blur-md rounded-full py-6 px-3 flex flex-col items-center gap-3 shadow-sm border border-white/40">
            {steps.map((step) => (
              <React.Fragment key={step}>
                <div 
                  className={`w-4 h-4 rounded-full flex items-center justify-center 
                    ${step === 9 ? 'bg-[#4ADE80] w-8 h-8' : 'bg-[#93C5FD]'}`}
                >
                  {step === 9 && <Check className="text-white w-5 h-5" />}
                </div>
                {step !== 9 && (
                  <div className="w-[1px] h-4 border-l border-dashed border-gray-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Middle Section: Status Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <img src="/rank.png" alt="Rank Badge" className="w-50 h-40 " />
          <p className="text-gray-500 font-medium">Step 9 of 9</p>
          <h2 className="text-3xl font-semibold text-gray-700 mt-1">Final Completion</h2>
        </div>

        {/* Right Section: Welcome Card */}
        <div className="w-1/2 flex items-center justify-center pr-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-[40px] p-12 w-full shadow-xl border border-white flex flex-col items-center text-center">
            
            {/* Illustration Placeholder */}
            <div className="relative mb-8">
               <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
                  <img
                    src="/lastpage.png" // Replace with your PNG
                    alt="Illustration"
                    className="h-44 object-contain"
                    />
               </div>
               {/* Decorative floating elements */}
               <div className="absolute -top-4 -right-4 text-pink-400">🎉</div>
               <div className="absolute top-0 -left-6 text-blue-400">✨</div>
            </div>

            <h1 className="text-4xl font-bold text-[#1E293B] mb-4">
              Welcome aboard 🎯
            </h1>
            
            <p className="text-gray-500 leading-relaxed mb-10 max-w-sm">
              You're now part of HUB, powered by HOWS — where 
              innovation meets interiors. Let's build something extraordinary.
            </p>

            <button className="group relative bg-[#94A3FF] hover:bg-[#818CF8] text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-200/50 flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-200" />
              Launch HOWS Dashboard
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}