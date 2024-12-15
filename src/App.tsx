import React from 'react';
import { GitBranch, KeyRound, LayoutTemplate } from 'lucide-react';
import { Logo } from './components/Logo';
import { Card } from './components/Card';
import { MainOrb } from './components/MainOrb';
import { MetricCard } from './components/MetricCard';
import { FeatureCard } from './components/FeatureCard';
import "./index.css"
import FluidCursor from './components/FluidCursor';

function App() {
  return (
    <div className="min-h-screen bg-[#13141f] p-6">
      <FluidCursor />
      <div className="lg:max-w-6xl lg:mx-auto lg:grid sm:grid-cols-12 sm:gap-6 sm:min-h-screen sm:flex sm:flex-col ">
        {/* Top Row */}
        <Card className="col-span-3 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-white mb-2">Transforming Ideas into Scalable Tech
          </h1>
          <div className="text-sm text-gray-400">
            <div>Certified CORDA DLT Developer</div>
            <div>Blockchain | Cloud | DevOps</div>
          </div>
        </Card>

        <Card className="col-span-6 text-center py-12 bg-[radial-gradient(circle_at_bottom,#c09bff,#825aff_40%,#4b1ea8_80%)]">
          <Logo />
          <h1 className="text-4xl font-bold text-white mt-6 mb-4">
            Blockchain &
            Software Engineer
          </h1>
        </Card>

        <Card className="col-span-3 flex justify-between flex-col rounded-lg p-6">
          <h2 className="text-lg font-semibold">Blockchain Expertise </h2>
          <div className="flex gap-2">
            <div className="bg-purple-600 text-white py-1 px-3 rounded-full text-sm">Corda</div>
            <div className="bg-purple-600 text-white py-1 px-3 rounded-full text-sm">Ethereum</div>
          </div>
          <h2 className="text-lg font-semibold">Cloud Platforms </h2>

          <div className="flex space-x-2 mt-2">
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">AWS</span>
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">GCP</span>
          </div>

          <h2 className="text-lg font-semibold">Languages </h2>

          <div className="flex space-x-2 mt-2">
            <p className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">Java</p>
            <p className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">Node.js </p>
            <p className="bg-purple-700 text-white py-1 px-3 rounded-full text-sm">Golang</p>
          </div>

          <h2 className="text-lg font-semibold">Protocols </h2>

          <div className="flex space-x-2 mt-2">
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">REST</span>
            <span className="bg-gray-700 text-white py-1 px-3 rounded-full text-sm">GraphQL</span><br />
          </div>
        </Card>

        {/* Middle Row */}
        <MetricCard
          value="8+"
          label="Years Of Experience "
          className="col-span-3"
        />

        <div className="col-span-6 grid grid-cols-2 gap-6">
          <FeatureCard
            icon={GitBranch}
            title="Certifications"
            description="R3 certified CORDA DLT developer (2019)."
            descriptionOne=''
          />
          <FeatureCard
            icon={KeyRound}
            title="Recent Projects"
            description="Redbelly Blockchain."
            descriptionOne="StockPlan Connect (Morgan Stanley)."
          />
        </div>
        <Card className="col-span-3">
          <h2 className="text-2xl font-bold text-white mb-2">Blockchain Solutions</h2>
          <div className="text-sm text-gray-400">
            <div>Developed Redbelly Blockchain and several enterprise projects</div>
          </div>
        </Card>

        <Card className="col-span-3 rounded-2xl p-4 text-white text-center flex justify-center items-center">
          <button className="text-lg font-semibold bg--600 py-2 px-6 rounded-2xl">
            <a href="https://github.com/ashubisht" target="_blank">
              <i className='bx bxl-github text-[35px]'></i>
            </a>
          </button>
          <button className="text-lg font-semibold bg--600 py-2 px-6 rounded-2xl">
            <a href="https://www.linkedin.com/in/utkarsh-bisht/" target="_blank">
              <i className='bx bxl-linkedin-square text-[35px]'></i>
            </a>
          </button>
        </Card>

        <div className="col-span-6 grid grid-cols-2 gap-6" style={{ visibility: 'hidden' }}>

        </div>

        {/* Bottom Row */}
        <MetricCard
          value="1.2M"
          label="Transactions handled in a single job cycle"
          className="col-span-3 top-right"
        />


      </div>
    </div>
  );
}

export default App;