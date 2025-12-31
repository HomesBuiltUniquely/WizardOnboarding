interface Step {
  id: number;
  label: string;
  isActive: boolean;
}

interface ProgressTrackerProps {
  currentStep: number;
}

export default function ProgressTracker({ currentStep }: ProgressTrackerProps) {
  const steps: Step[] = [
    { id: 1, label: "1. Welcome", isActive: currentStep === 1 },
    { id: 2, label: "2. HUB Story", isActive: currentStep === 2 },
    { id: 3, label: "3. HUB Family", isActive: currentStep === 3 },
    { id: 4, label: "4. Our Values", isActive: currentStep === 4 },
    { id: 5, label: "5. Meet HOWS", isActive: currentStep === 5 },
    { id: 6, label: "6. Your Modules", isActive: currentStep === 6 },
    { id: 7, label: "7. Life At HUB", isActive: currentStep === 7 },
    { id: 8, label: "8. Leadership", isActive: currentStep === 8 },
  ];

  // Find the active step
  const activeStep = steps.find((step) => step.isActive);
  const inactiveSteps = steps.filter((step) => !step.isActive);

  return (
    <div className="w-64 flex flex-col items-start p-2 gap-4 ml-20 mt-13">
        {/* Active Step Card - Smaller, top card - Brighter/More Opaque */}
        {activeStep && (
          <div className="bg-white/50 backdrop-blur-md rounded-2xl shadow-lg p-4 w-full border border-white/30">
            <div className="flex items-center gap-3 h-10">
              {/* Active step indicator with glow */}
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#FF8C42] shadow-[0_0_12px_rgba(255,140,66,0.6)]" />
              </div>
              <span className="text-base font-bold text-gray-800">
                {activeStep.label}
              </span>
            </div>
          </div>
        )}

        {/* Inactive Steps Card - Larger, bottom card - More Transparent */}
        {inactiveSteps.length > 0 && (
          <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-4 w-full border border-white/20">
            <div className="flex flex-col">
              {inactiveSteps.map((step, index) => (
                <div key={step.id}>
                  <div className="flex items-center gap-3 py-2">
                    {/* Inactive step indicator */}
                    <div className="w-4 h-4 rounded-full bg-gray-300" />
                    <span className="text-base font-normal text-gray-500">
                      {step.label}
                    </span>
                  </div>
                  {/* Separator line */}
                  {index < inactiveSteps.length - 1 && (
                    <div className="h-px bg-gray-200/50 my-1 ml-7" />
                  )}
                </div>
              ))}
            </div>
          </div>
      )}
    </div>
  );
}

