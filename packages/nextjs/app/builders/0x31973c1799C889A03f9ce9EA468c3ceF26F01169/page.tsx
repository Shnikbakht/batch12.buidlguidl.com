"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import type { NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { GithubIcon } from "~~/components/assets/GithubIcon";
import { TwitterIcon } from "~~/components/assets/TwitterIcon";
import { Address } from "~~/components/scaffold-eth";

const textColorStyles = "dark:text-white text-gray-800";

const SOCIALS = [
  { href: "https://github.com/zelkibuilds", Icon: GithubIcon, title: "GitHub" },
  { href: "https://x.com/_zelki", Icon: TwitterIcon, title: "X Profile" },
  {
    href: "https://app.buidlguidl.com/builders/0x31973c1799C889A03f9ce9EA468c3ceF26F01169",
    Icon: BuidlGuidlLogo,
    title: "BuidlGuidl Profile",
  },
] as const;

const BuilderProfile: NextPage = () => {
  return (
    <article className={clsx("flex flex-col gap-y-2 justify-center items-center pt-5", textColorStyles)}>
      <h1 className="font-bold text-[3rem]">zelki</h1>
      <Image src="/zelki.gif" alt="zelki's avatar" width={100} height={100} className="rounded-full" />
      <Address address="0x31973c1799C889A03f9ce9EA468c3ceF26F01169" />

      <SectionTitle title="Socials" />
      <div className="flex gap-x-4">
        {SOCIALS.map(({ href, Icon, title }) => (
          <a key={href} href={href} rel="noreferrer" title={title}>
            <Icon className="size-6 dark:hover:text-gray-400 hover:text-primary" />
          </a>
        ))}
      </div>

      <SectionTitle title="About me" />
      <p className={clsx(textColorStyles, "text-base w-3/4 m-0")}>
        <span>I&apos;m a fullstack developer with a focus on front-end. Currently employed at </span>
        <a
          className="font-bold underline bg-gradient-to-r from-[#6600AC] to-[#FF6F5B] text-transparent bg-clip-text"
          href="https://zharta.io"
          rel="noreferrer"
          title="Zharta"
        >
          Zharta
        </a>
        . I&apos;m going through BuidlGuild since it looked like a lot of fun and I&apos;d like to dive deeper into
        smart contract engineering.
      </p>

      <SectionTitle title="Thanks for having a look" />
      <TrackingEye />
    </article>
  );
};

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className={clsx(textColorStyles, "font-semibold text-center pt-6 text-xl")}>{title}</h2>
);

const TrackingEye = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const eyeRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | undefined>();
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      const maxRadius = eye.width * 0.2;

      const angle = Math.atan2(deltaY, deltaX);
      const radius = Math.min(distance / 2, maxRadius);

      targetRef.current = {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    };

    const animate = () => {
      if (!frameRef.current) return;

      setPosition(prev => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.1,
        y: prev.y + (targetRef.current.y - prev.y) * 0.1,
      }));

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div ref={eyeRef} className="relative size-16 rounded-full bg-white border-4 border-gray-800">
        <div
          className="absolute top-1/2 left-1/2 size-8 -mt-4 -ml-4 rounded-full bg-primary/80"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 size-4 -mt-2 -ml-2 rounded-full bg-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default BuilderProfile;
