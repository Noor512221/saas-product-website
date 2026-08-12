import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
      <span className="text-indigo-400 text-sm font-semibold tracking-wide uppercase bg-indigo-950/60 px-4 py-1.5 rounded-full border border-indigo-800/50 mb-6">
        Next-Gen SaaS Platform
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-100 max-w-3xl leading-tight mb-6">
        Automate Your Workflows with Modern Web Tools
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl mb-8">
        Streamline your business processes, estimate project costs, and scale faster with our all-in-one automation dashboard.
      </p>
      <div className="flex gap-4">
        <Link
          to="/calculator"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-indigo-600/30"
        >
          Try Calculator
        </Link>
        <Link
          to="/pricing"
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-lg border border-slate-700 transition-all"
        >
          View Pricing
        </Link>
      </div>
    </div>
  );
}