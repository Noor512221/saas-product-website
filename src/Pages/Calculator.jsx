import { useState } from 'react';

export default function Calculator() {
  const [workflows, setWorkflows] = useState(5);
  const [teamMembers, setTeamMembers] = useState(2);

  // Dynamic cost calculation
  const totalCost = workflows * 10 + teamMembers * 15;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-100 mb-3">Project Cost Calculator</h2>
        <p className="text-slate-400">Estimate your monthly investment based on your required resources.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        {/* Slider 1: Workflows */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-slate-300">Active Workflows: {workflows}</label>
            <span className="text-xs text-slate-500">$10 / workflow</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={workflows}
            onChange={(e) => setWorkflows(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        {/* Slider 2: Team Members */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-slate-300">Team Members: {teamMembers}</label>
            <span className="text-xs text-slate-500">$15 / member</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={teamMembers}
            onChange={(e) => setTeamMembers(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
        </div>

        <hr className="border-slate-800 my-6" />

        {/* Total Cost Output */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-400">Estimated Total</p>
            <p className="text-3xl font-extrabold text-indigo-400">${totalCost} <span className="text-sm text-slate-400 font-normal">/ month</span></p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}