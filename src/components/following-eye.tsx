
"use client";

import { useState, useEffect } from "react";

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [leftEyePosition, setLeftEyePosition] = useState({ x: 0, y: 0 });
  const [rightEyePosition, setRightEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Get the position of each eye
      const leftEye = document.getElementById("left-eye-socket");
      const rightEye = document.getElementById("right-eye-socket");

      if (leftEye && rightEye) {
        const leftEyeRect = leftEye.getBoundingClientRect();
        const rightEyeRect = rightEye.getBoundingClientRect();

        // Calculate the center of each eye socket
        const leftEyeCenter = {
          x: leftEyeRect.left + leftEyeRect.width / 2,
          y: leftEyeRect.top + leftEyeRect.height / 2,
        };
        const rightEyeCenter = {
          x: rightEyeRect.left + rightEyeRect.width / 2,
          y: rightEyeRect.top + rightEyeRect.height / 2,
        };

        // Calculate the angle and distance for each eye
        const getEyePosition = (
          eyeCenter: { x: number; y: number },
          maxDistance: number
        ) => {
          const angle = Math.atan2(
            e.clientY - eyeCenter.y,
            e.clientX - eyeCenter.x
          );
          const distance = Math.min(
            maxDistance,
            Math.hypot(e.clientX - eyeCenter.x, e.clientY - eyeCenter.y) / 10
          );

          return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
          };
        };

        // Maximum distance the pupil can move from the center (in pixels)
        const maxDistance = 8;

        setLeftEyePosition(getEyePosition(leftEyeCenter, maxDistance));
        setRightEyePosition(getEyePosition(rightEyeCenter, maxDistance));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-[200px] md:min-h-[300px] lg:min-h-[400px] w-full items-center justify-center hover:scale-105 transition-transform duration-200">
      <svg
        width="200"
        height="200"
        viewBox="0 0 300 300"
        className="overflow-visible md:w-[300px] md:h-[300px]"
      >
        {/* Face circle */}
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="#FFE55C"
          stroke="#000"
          strokeWidth="2"
        />

        {/* Left eye socket */}
        <circle
          id="left-eye-socket"
          cx="100"
          cy="120"
          r="25"
          fill="white"
          stroke="#000"
        />
        {/* Right eye socket */}
        <circle
          id="right-eye-socket"
          cx="200"
          cy="120"
          r="25"
          fill="white"
          stroke="#000"
        />

        {/* Left moving pupil */}
        <circle
          cx={100 + leftEyePosition.x}
          cy={120 + leftEyePosition.y}
          r="12"
          fill="#000"
        />

        {/* Right moving pupil */}
        <circle
          cx={200 + rightEyePosition.x}
          cy={120 + rightEyePosition.y}
          r="12"
          fill="#000"
        />

        {/* Smile */}
        <path
          d="M 80 180 Q 150 240 220 180"
          fill="none"
          stroke="#000"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
