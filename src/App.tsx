import React from "react";
import { GitBranch, KeyRound } from "lucide-react";
import { Logo } from "./components/Logo";
import { Card } from "./components/Card";
import { MetricCard } from "./components/MetricCard";
import { FeatureCard } from "./components/FeatureCard";
import "./index.css";
import FluidCursor from "./components/FluidCursor";
import { GridPattern } from "./components/magicui/dot-pattern";
import FollowingEye from "./components/following-eye";
import { LetterPullup, TypingAnimation } from "./components/magicui/TypingAnimation";

function App() {
  return (
    <div className="relative min-h-screen bg-[#13141f] p-6">
      {/* GridPattern as the background */}
      <div className="absolute inset-0 z-0">
        <GridPattern width={40} height={40} cx={20} cy={20} cr={2} />
        <FluidCursor />

      </div>

      {/* Foreground Content */}
      <div className="relative z-10 lg:max-w-7xl lg:mx-auto lg:grid sm:grid-cols-12 md:min-h-screen md:flex md:flex-col md:gap-6 gap-4 flex flex-col">

        {/* Top Row */}
        <Card className="col-span-3 flex flex-col justify-between bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f]">
          <h1 className="text-3xl font-bold text-white mb-2">Transforming Ideas into Scalable Tech</h1>
          <div className="text-sm text-gray-400">
            <div>Certified CORDA DLT Developer</div>
            <div>Blockchain | Cloud | DevOps</div>
          </div>
        </Card>

        <Card className="col-span-6 text-center py-12 bg-[radial-gradient(circle_at_bottom,#c09bff,#825aff_40%,#4b1ea8_80%)]">
          <Logo />
          <h1 className="text-4xl font-bold text-white mt-6 mb-4">
            {/* <LetterPullup words="Blockchain & Software Engineer" delay={0.11} /> */}
            Blockchain & Software Engineer
          </h1>
        </Card>

        <Card className="col-span-3 flex justify-between flex-col rounded-lg p-6 bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f]">
          <h2 className="text-lg font-semibold">Blockchain Expertise</h2>
          <div className="flex gap-2">
            <div className="bg-purple-600 text-white py-1 px-3 rounded-full text-sm">Corda</div>
            <div className="bg-purple-600 text-white py-1 px-3 rounded-full text-sm">Ethereum</div>
          </div>
          <h2 className="text-lg font-semibold mt-2">Cloud Platforms</h2>
          <div className="flex space-x-2 mt-2">
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">AWS</span>
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">GCP</span>
          </div>
          <h2 className="text-lg font-semibold mt-2">Languages</h2>
          <div className="flex space-x-2 mt-2">
            <p className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">Java</p>
            <p className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">Node.js</p>
            <p className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">Golang</p>
          </div>
          <h2 className="text-lg font-semibold mt-2">Protocols</h2>
          <div className="flex space-x-2 mt-2">
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">REST</span>
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">GraphQL</span>
          </div>
        </Card>

        {/* Middle Row */}
        <MetricCard value="8+" label="Years Of Experience" className="col-span-3" />

        <div className="col-span-6 grid grid-cols-2 gap-6 row-span-2 h-auto">
          <FeatureCard
            className="top-right bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f]"
            icon={GitBranch}
            title="Certifications"
            description="R3 certified CORDA DLT developer (2019)."
          />
          <FeatureCard
            className="top-left bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f]"
            icon={KeyRound}
            title="Recent Projects"
            description="Redbelly Blockchain."
            descriptionOne="StockPlan Connect (Morgan Stanley)."
          />
        </div>

        {/* GitHub and LinkedIn Card (Center-Right) */}
        <Card className="col-span-3 flex justify-center items-center flex-col bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f]">
          <h2 className="text-2xl font-bold text-white mb-2">Blockchain Solutions</h2>
          <div className="text-sm text-gray-400">
            <div>Developed Redbelly Blockchain and several enterprise projects</div>
          </div>
        </Card>

        {/* Center Circle with Image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[18rem] lg:h-[18rem] rounded-full border-4 border-gray-800 shadow-lg bg-white mt-[9rem] md:mt-[5rem] lg:mt-[-3rem]">
          <FollowingEye />
        </div>


        {/* Bottom Row */}
        <Card className="bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f] col-span-3 flex justify-center items-center gap-5">
          <a href="https://github.com/ashubisht" target="_blank" rel="noopener noreferrer">
            <button className="text-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 py-2 px-6 rounded-2xl">
              <i className="bx bxl-github text-[35px]"></i>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/utkarsh-bisht/" target="_blank" rel="noopener noreferrer">
            <button className="text-lg font-semibold text-white bg-blue-800 hover:bg-blue-700 py-2 px-6 rounded-2xl">
              <i className="bx bxl-linkedin-square text-[35px]"></i>
            </button>
          </a>
        </Card>

        <MetricCard
          value="1.2M"
          label="Transactions handled in a single job cycle"
          className="col-span-3 top-right bg-gradient-to-br from-[#0f0f1f] via-[#1a1b2e] to-[#28293f]"
        />
      </div>
    </div>
  );
}

export default App;
