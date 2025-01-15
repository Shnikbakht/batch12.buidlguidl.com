import Image from "next/image";
import { type NextPage } from "next";

const ShahlaNikbakht_ProfilePage: NextPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* Profile Picture */}
        <div className="max-w-sm rounded-lg shadow-2xl overflow-hidden">
          <Image
            src="/ShahlaNikbakht-profile-picture.jpg" // Ensure this file is in the public directory
            alt="Shahla Nikbakht"
            width={300}
            height={300}
          />
        </div>

        {/* Content Section */}
        <div className="ml-8">
          {/* Name and Title */}
          <h1 className="text-5xl font-bold">Shahla Nikbakht</h1>
          <p className="py-4 text-lg">
            Blockchain & Backend Developer passionate about decentralized applications (DApps) and leveraging blockchain
            for innovative solutions.
          </p>

          {/* Expertise */}
          <div className="py-4">
            <h2 className="text-2xl font-semibold">Expertise</h2>
            <ul className="list-disc list-inside mt-2 text-lg">
              <li>Decentralized Applications (DApps) on Ethereum</li>
              <li>Smart Contracts with Solidity</li>
              <li>Blockchain Ecosystems: Hyperledger Fabric, Besu</li>
              <li>Frontend & Backend Integration with Web3.js</li>
              <li>Cloud Deployment: AWS & GCP</li>
              <li>Quantum Computation and Quantum Information</li>
            </ul>
          </div>

          {/* Contact and Social Links */}
          <div className="flex gap-6 py-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/shnikbakht"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.803 8.207 11.401.6.111.823-.262.823-.577 0-.287-.01-1.046-.015-2.051-3.338.726-4.04-1.613-4.04-1.613-.547-1.38-1.334-1.749-1.334-1.749-1.089-.745.083-.73.083-.73 1.204.085 1.834 1.26 1.834 1.26 1.07 1.826 2.807 1.298 3.49.996.107-.776.418-1.298.762-1.597-2.667-.303-5.467-1.334-5.467-5.923 0-1.306.465-2.374 1.229-3.21-.123-.303-.533-.903 0-1.902 0 0 1.007-.322 3.31 1.22 2.132-.594 4.466-.595 6.599 0 2.305-1.467 3.308-1.22 3.308-1.22.533 1 0.123 1.6 0 1.902.765.836 1.229 1.904 1.229 3.21 0 4.595-2.804 5.617-5.475 5.913.432.374.823 1.115.823 2.248 0 1.628-.015 2.94-.015 3.34 0 .317.228.69.833.574 4.773-1.597 8.211-6.097 8.211-11.401 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Telegram Icon (Corrected) */}
            <a
              href="https://t.me/ShahlaNikbakht"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="Telegram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/ShahlaNikbakht"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-10h3v10zm-1.5-11.28c-.96 0-1.72-.78-1.72-1.72s.76-1.72 1.72-1.72 1.72.78 1.72 1.72-.76 1.72-1.72 1.72zm13.5 11.28h-3v-5.28c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.38-2.03 2.78v5.38h-3v-10h2.88v1.38h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v5.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShahlaNikbakht_ProfilePage;
