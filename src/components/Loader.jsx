import React, { useMemo } from "react";
import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Loader Card */}
      <div className="flex text-gray-700 text-xl font-medium space-x-2">
        <p>Loading</p>

        <p className="text-orange-400 animate-bounce"> Model </p>

      </div>

      {/* Progress Bar */}
      <div className="w-40 h-1.5 bg-gray-700 rounded mt-4 overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
