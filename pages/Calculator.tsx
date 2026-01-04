
import React, { useState } from 'react';
import { getSolarAnalysis } from '../services/geminiService';
import { Sparkles, Calculator, Zap, ThermometerSun, Wallet, Loader2 } from 'lucide-react';

const SolarCalculator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [bill, setBill] = useState(150);
  const [roofSize, setRoofSize] = useState(1000);
  const [location, setLocation] = useState('Los Angeles, CA');
  const [results, setResults] = useState<any>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data = await getSolarAnalysis(bill, roofSize, location);
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase mb-4">
            <Sparkles className="h-3 w-3" />
            <span>AI Powered Energy Analysis</span>
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Solar Potential Estimator</h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            Discover how much you could save by switching to solar with our Gemini-powered 
            analysis engine. Just enter a few details about your property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Avg. Monthly Electricity Bill ($)
                </label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-lg font-bold mt-2 text-blue-600">
                  <span>$50</span>
                  <span>${bill}</span>
                  <span>$1,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Estimated Roof Size (sq ft)
                </label>
                <input
                  type="number"
                  value={roofSize}
                  onChange={(e) => setRoofSize(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="e.g. 1500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Property Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="City, State"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Analyzing Data...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2" /> Generate Analysis
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {!results && !loading && (
              <div className="bg-white/50 border-2 border-dashed border-slate-200 rounded-3xl p-12 text-center">
                <Zap className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-400">Complete the form to see your results</p>
              </div>
            )}

            {loading && (
              <div className="bg-white p-12 rounded-3xl shadow-sm animate-pulse">
                <div className="h-8 bg-slate-100 rounded w-1/2 mb-6"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                </div>
              </div>
            )}

            {results && !loading && (
              <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2" /> Your Solar Report
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-50 p-6 rounded-2xl">
                    <Wallet className="h-6 w-6 text-emerald-600 mb-2" />
                    <p className="text-sm text-emerald-600 font-medium uppercase">Estimated Monthly Savings</p>
                    <p className="text-3xl font-bold text-slate-900">${results.estimatedSavings.toFixed(0)}</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-2xl">
                    <ThermometerSun className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="text-sm text-blue-600 font-medium uppercase">Panels Required</p>
                    <p className="text-3xl font-bold text-slate-900">{results.panelCount}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <p className="text-sm text-slate-500 font-medium uppercase mb-1">CO2 Offset (Tons/yr)</p>
                    <p className="text-2xl font-bold text-slate-900">{results.co2Reduction.toFixed(1)}</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl">
                    <p className="text-sm text-slate-500 font-medium uppercase mb-1">Payback Period</p>
                    <p className="text-2xl font-bold text-slate-900">{results.paybackYears} Years</p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-2xl">
                  <h4 className="font-bold mb-2 flex items-center text-emerald-400">
                    <Sparkles className="h-4 w-4 mr-2" /> AI Recommendation
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{results.recommendation}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
