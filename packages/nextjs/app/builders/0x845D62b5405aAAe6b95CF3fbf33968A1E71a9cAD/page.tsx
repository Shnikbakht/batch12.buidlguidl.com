import Image from "next/image";
import { type NextPage } from "next";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { GithubIcon } from "~~/components/assets/GithubIcon";
import { TelegramIcon } from "~~/components/assets/TelegramIcon";
import { TwitterIcon } from "~~/components/assets/TwitterIcon";
import { Address } from "~~/components/scaffold-eth";

const BUILDER_INFO = {
  name: "DimaKush",
  role: "Full Stack Developer",
  address: "0x845D62b5405aAAe6b95CF3fbf33968A1E71a9cAD",
  avatar: "https://avatars.githubusercontent.com/u/81520363",
  tagline: "Love decentralication, simplicity and Mom",
  languages: ["En", "Ru"],
  links: {
    bg: "https://app.buidlguidl.com/builders/0x845D62b5405aAAe6b95CF3fbf33968A1E71a9cAD",
    github: "https://github.com/DimaKush",
    twitter: "https://twitter.com/_Dima_Kush_",
    telegram: "https://t.me/kushnarevdn",
  },
  focus: {
    building: "weird stuff",
    learning: "amazing things from awesome people",
    contributing: "to the better future",
  },
  journey: [
    {
      year: "2023",
      milestone: "Backend Developer",
      detail: "Building modern web applications",
    },
    {
      year: "2024",
      milestone: "Next.js Developer",
      detail: "Frontend development & Web3",
    },
    {
      year: "2025",
      milestone: "Full Stack Developer",
      detail: "Hustling around",
    },
  ],
} as const;

const DimaKushProfile: NextPage = () => {
  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-base-100">
      <div className="max-w-2xl w-full">
        <div className="bg-base-200 rounded-lg shadow-xl p-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4">
            {/* Avatar with loading and error handling */}
            <div className="relative w-32 h-32">
              <Image
                src={BUILDER_INFO.avatar}
                alt={`${BUILDER_INFO.name}'s profile picture`}
                fill
                priority
                className="rounded-full object-cover"
              />
            </div>

            {/* Identity */}
            <h1 className="text-3xl font-bold">{BUILDER_INFO.name}</h1>
            <Address address={BUILDER_INFO.address} />
            <p className="text-lg opacity-80">{BUILDER_INFO.tagline}</p>
            <a
              href={BUILDER_INFO.links.bg}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <BuidlGuidlLogo className=" h-6" />
            </a>
            {/* Enhanced Social Links */}
            <div className="flex items-center gap-8">
              <a
                href={BUILDER_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <GithubIcon className="h-6" />
              </a>
              <a
                href={BUILDER_INFO.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <TwitterIcon className="h-6" />
              </a>
              <a
                href={BUILDER_INFO.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <TelegramIcon className="h-6" />
              </a>
            </div>
          </div>

          {/* Languages */}
          <div className="text-center">
            <p className="text-lg opacity-80">{BUILDER_INFO.languages.join(" ")}</p>
          </div>

          {/* Current Focus */}
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-base-300 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">Building</h2>
                <p className="text-center">{BUILDER_INFO.focus.building}</p>
              </div>
              <div className="flex flex-col items-center bg-base-300 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">Learning</h2>
                <p className="text-center">{BUILDER_INFO.focus.learning}</p>
              </div>
              <div className="flex flex-col items-center bg-base-300 rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">Contributing</h2>
                <p className="text-center">{BUILDER_INFO.focus.contributing}</p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Journey</h2>
            <div className="space-y-4">
              {BUILDER_INFO.journey.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="font-bold">{step.year}</span>
                  <span className="flex-grow border-t border-base-300"></span>
                  <div className="flex flex-col items-end">
                    <span className="font-bold">{step.milestone}</span>
                    <span>{step.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimaKushProfile;
