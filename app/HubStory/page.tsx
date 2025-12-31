import Herosection from "../Components/HubStory/Herosection";
import ProgressTracker from "../Components/HubStory/ProgressTracker";

export default function HubStoryPage() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-250 bg-blue-500 h-130 rounded-4xl">
            <ProgressTracker currentStep={2} />
            <Herosection />
            </div>
        </div>
    );
}