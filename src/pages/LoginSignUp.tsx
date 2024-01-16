import { useEffect, useState } from "react";
import Login from "../Components/Login";

export default function LoginSignUp() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContinue, setShowContinue] = useState(false);
  const uniquePoints = [
    "Technology stacks: React + Typescript + Tailwind",
    "Proper replication of the given web pages",
    "Fully Responsive Design",
    "Clean code and Best Practices",
    "Reusable Components",
    "Google Authentication : Login , Logout , use of local storage",
    "Clean Code",
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowContinue(true);
    }, 2000);
  }, []);

  return (
    <div>
      {showIntro ? (
        <div className="flex gap-4  justify-center items-center h-[80vh]">
          <div className="flex  flex-col gap-3 rounded-lg shadow-xl p-4">
            <p className="text-blue-700 text-xl font-bold">
              What makes it unique
            </p>
            <div className="flex flex-col gap-2">
              {uniquePoints.map((point) => (
                <span>{point}</span>
              ))}
            </div>

            {showContinue ? (
              <button
                className="fadeIn animate-bounce mt-3 p-3"
                onClick={() => setShowIntro(false)}
              >
                Continue
              </button>
            ) : (
              <p className="text-white">.</p>
            )}
          </div>
          <div className="loader"></div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
