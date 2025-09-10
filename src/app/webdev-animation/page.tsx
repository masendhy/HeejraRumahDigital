"use client";

import WebDevAnimation from "@/components/WebDevAnimation";

export default function WebDevAnimationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Web Development Animation</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <WebDevAnimation />
      </div>
      <p className="mt-8 text-gray-600 max-w-2xl text-center">
        Hover over the SVG to see the animation. Each component has a subtle scaling effect,
        with special animations for the key, girl, and script elements.
      </p>
    </div>
  );
}