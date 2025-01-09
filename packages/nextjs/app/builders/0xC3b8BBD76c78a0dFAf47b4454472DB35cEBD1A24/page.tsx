"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiFarcaster } from "react-icons/si";
import { TbPlant2 } from "react-icons/tb";
import { Address } from "~~/components/scaffold-eth";

const LudmilaProfile: NextPage = () => {
  const address = "0xC3b8BBD76c78a0dFAf47b4454472DB35cEBD1A24";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-10">
        <div className="flex items-center space-x-6">
          <div className="avatar">
            <Image
              src="https://avatars.githubusercontent.com/u/16783967"
              alt="@ludmila-omlopes"
              width={100}
              height={100}
              className="rounded-full ring ring-primary"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">@ludmila-omlopes</h1>
            <Address address={address} />
            <p className="text-sm text-gray-600 dark:text-gray-400">🌟 Professional Generalist</p>
          </div>
        </div>
        <div className="flex mt-4 gap-4">
          <a
            href="https://github.com/ludmila-omlopes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://hey.xyz/u/definn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-green-500 dark:hover:text-green-300 transition"
            aria-label="Lens"
          >
            <TbPlant2 size={24} />
          </a>
          <a
            href="https://twitter.com/DeFinnTheFarmer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://warpcast.com/definn.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-300 transition"
            aria-label="Farcaster"
          >
            <SiFarcaster size={24} />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-lg font-semibold mb-2">About Me</h2>
        <p>
          I&apos;m Ludmila, a Brazilian woman and primarily a <strong>developer</strong> but also with experience in
          <strong> SEO, marketing, and growth</strong>. Currently passionate about solving problems in the{" "}
          <a
            href="https://lens.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Lens Protocol
          </a>{" "}
          ecosystem, I&apos;ve been building in the crypto space since 2017.
        </p>
        <p>
          I&apos;m building{" "}
          <a href="https://lens.xyz" className="text-blue-500 hover:underline">
            Mystic Garden
          </a>
          ,{" "}
          <a href="https://oriona.xyz/" className="text-blue-500 hover:underline">
            Oriona
          </a>
          , and{" "}
          <a href="https://lens-agora.vercel.app/" className="text-blue-500 hover:underline">
            Lens Agora
          </a>
          . These projects aim to empower communities and creators in the web3 space.
        </p>
        <p>
          In my free time, I enjoy gaming and spending time with my three cats 😺😺😺. Feel free to connect if
          you&apos;d like to learn more about my projects!
        </p>
      </div>
    </div>
  );
};

export default LudmilaProfile;
