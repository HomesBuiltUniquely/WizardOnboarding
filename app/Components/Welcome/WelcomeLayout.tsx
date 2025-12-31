import ProgressTracker from "@/app/Components/Welcome/ProgressTracker";
import Herosection from "@/app/Components/Welcome/Herosection";

interface WelcomeLayoutProps {
  currentStep: number;
}

export default function WelcomeLayout({ currentStep }: WelcomeLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex px-15">
      <ProgressTracker currentStep={currentStep} />
      <Herosection />
    </div>
  );
}

