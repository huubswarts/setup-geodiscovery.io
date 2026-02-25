/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import ImplementationGuide from './components/ImplementationGuide';
import GtmAccess from './components/GtmAccess';
import LinkGenerator from './components/LinkGenerator';
import { FileJson, BarChart3 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'passport' | 'gtm'>('passport');
  const [isGenerator, setIsGenerator] = useState(false);

  useEffect(() => {
    // Check for both pathname (if supported) and hash (fallback)
    if (window.location.pathname === '/generate' || window.location.hash === '#generate') {
      setIsGenerator(true);
    }
    
    // Listen for hash changes
    const handleHashChange = () => {
      setIsGenerator(window.location.hash === '#generate');
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isGenerator) {
    return <LinkGenerator />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-[#e18409] selection:text-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-white text-lg tracking-tight">
            <img src="https://res.cloudinary.com/dpa295hyx/image/upload/v1771427391/GeoDiscovery_White_Orange_s6orlw.png" alt="GeoDiscovery" className="h-10 w-auto object-contain" />
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
