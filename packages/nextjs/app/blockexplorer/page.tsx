import Head from "next/head";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Shahla Nikbakht - Blockchain Developer</title>
        <meta
          name="description"
          content="Explore Shahla Nikbakht's expertise in blockchain and backend development, including smart contracts, Ethereum, and Hyperledger."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl w-full">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
              <img src="/profile-picture.jpg" alt="Shahla Nikbakht" className="w-full h-full object-cover" />
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-gray-800 mt-4">Shahla Nikbakht</h1>
            <p className="text-gray-600 text-lg">Blockchain & Backend Developer</p>

            {/* Contact and Social Links */}
            <div className="flex space-x-6 mt-4">
              <a href="mailto:nikbakht.shahla@gmail.com" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Email
              </a>
              <a href="tel:+14372408523" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Call
              </a>
              <a
                href="https://linkedin.com/in/ShahlaNikbakht"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/shnikbakht"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800">What I Do</h2>
            <p className="text-gray-700 mt-2">
              I specialize in building decentralized applications (DApps), smart contracts, and blockchain systems. My
              focus is on delivering innovative, scalable solutions for DeFi, NFTs, and enterprise blockchain use cases.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">My Tools</h3>
            <ul className="text-gray-700 mt-2 grid grid-cols-2 gap-2">
              <li>🔗 Ethereum & Hyperledger</li>
              <li>💻 Solidity, Web3.js</li>
              <li>🚀 React.js, Next.js</li>
              <li>🌐 IPFS, Chainlink</li>
              <li>☁️ AWS, GCP</li>
              <li>🛠️ Hardhat, Truffle</li>
              <li>📦 Docker, GitHub Actions</li>
              <li>📊 PostgreSQL, MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
