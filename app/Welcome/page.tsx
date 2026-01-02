import Link from 'next/link';

interface Step {
  id: number;
  label: string;
  isActive: boolean;
}

interface ProgressTrackerProps {
  currentStep: number;
}

function ProgressTracker({ currentStep }: ProgressTrackerProps) {
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
    <div className="w-64 flex flex-col items-start p-2 gap-4 ml-20 mt-12">
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

function Herosection() {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
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
  );
}

export default function WelcomePage() {
  const currentStep = 1;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex px-12">
      <ProgressTracker currentStep={currentStep} />
      <Herosection />
    </div>
  );
}
