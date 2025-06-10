"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically load with proper error boundary
const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers").catch(() => ({
    default: ({ animateToNumber }) => <span>{animateToNumber}</span>,
  })),
  { 
    ssr: false,
    loading: () => <span className="text-white text-4xl font-bold">0</span>
  }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100000", // Removed comma for proper parsing
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-4 sm:px-16 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8">
        {achievementsList.map((achievement, index) => (
          <div
            key={`${achievement.metric}-${index}`}
            className="flex flex-col items-center justify-center min-w-[100px]"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-2">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;