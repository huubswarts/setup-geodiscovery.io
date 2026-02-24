/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import ImplementationGuide from './components/ImplementationGuide';
import GtmAccess from './components/GtmAccess';
import { FileJson, BarChart3 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'passport' | 'gtm'>('passport');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-[#e18409] selection:text-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-white text-lg tracking-tight">
            <div className="w-8 h-8 bg-gradient-to-br from-[#e18409] to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-900/20">
              <span className="text-xs">AI</span>
            </div>
            AI-Signal
          </div>
          
          <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('passport')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'passport' 
                  ? 'bg-slate-800 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <FileJson size={16} />
              <span className="hidden sm:inline">1. Digitaal Paspoort</span>
              <span className="sm:hidden">Paspoort</span>
            </button>
            <button
              onClick={() => setActiveTab('gtm')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'gtm' 
                  ? 'bg-slate-800 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <BarChart3 size={16} />
              <span className="hidden sm:inline">2. Toegang Cijfers</span>
              <span className="sm:hidden">Cijfers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      {activeTab === 'passport' ? <ImplementationGuide /> : <GtmAccess />}
    </div>
  );
}
