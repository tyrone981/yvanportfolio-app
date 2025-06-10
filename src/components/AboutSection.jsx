"use client";

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Tailwindcss</li>
        <li>JavaScript</li>
        <li>Ui/Ux</li>
        <li>Barbing</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Seven Advance Academy</li>
        <li>Univerisity of Douala</li>
        <li>Hydra Beauty Institute</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Professional Barber</li>
        <li>Professional Esthetician</li>
        <li>Digital Marketer at Hydra Beauty</li>
      </ul>
    )
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image - visible on all screens */}
        <div className="w-full">
          <Image
            src="/image/bureau.png"
            width={500}
            height={500}
            alt="Office setup"
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>

        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg mb-8">
            Hi, I'm a passionate and multi-skilled individual with a strong interest in both tech and creativity...
            {/* Keep your full about text here */}
          </p>

          <div className="flex flex-wrap gap-4">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;