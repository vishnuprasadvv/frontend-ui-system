import React from "react";
import { Loader2 } from "lucide-react";

export interface LoadingScreenProps {
  message?: string;
  fullScreen?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading...",
  fullScreen = false,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? "h-screen" : "h-40"
      } w-full text-center space-y-4 text-gray-600`}
    >
      <Loader2 className="animate-spin text-(--custom-primary) w-10 h-10" />
      <p className="text-md font-medium">{message}</p>
    </div>
  );
};

export { LoadingScreen };
