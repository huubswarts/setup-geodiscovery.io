import { useState } from 'react';
import { Copy, Check, Link as LinkIcon, Lock, Zap, ArrowRight, Code } from 'lucide-react';
import { motion } from 'motion/react';

export default function LinkGenerator() {
  const [inputCode, setInputCode] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const generateLink = () => {
    if (!inputCode.trim()) return;
    
    // Encode the JSON-LD code to Base64 to make it URL-safe
    const encodedCode = btoa(inputCode);
    const baseUrl = window.location.origin; // Gets the current domain
    const link = `${baseUrl}/?data=${encodedCode}`;
    
    setGeneratedLink(link);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-[#e18409] selection:text-white flex items-center justify-center p-6 relative">
      <a href="#" className="absolute top-6 left-6 text-slate-500 hover:text-white flex items-center gap-2 transition-colors">
        <ArrowRight className="rotate-180" size={20} /> Terug
      </a>
      <div className="max-w-2xl w-full space-y-8">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 mb-4">
            <Lock size={24} className="text-[#e18409]" />
          </div>
          <h1 className="text-3xl font-bold text-white">Klant Link Generator</h1>
          <p className="text-slate-400">Plak de JSON-LD code hieronder om een unieke deelbare link te maken.</p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-6 shadow-2xl">
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
              <Code size={16} /> JSON-LD Code
            </label>
            <textarea
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder='<script type="application/ld+json">...'
              className="w-full h-64 bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-sm text-slate-300 focus:outline-none focus:border-[#e18409] transition-colors resize-none"
            />
          </div>

          <button
            onClick={generateLink}
            disabled={!inputCode.trim()}
            className="w-full bg-[#e18409] hover:bg-[#c67306] disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Zap size={20} />
            Genereer Link
          </button>

          {generatedLink && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-400 flex items-center gap-2">
                  <Check size={16} /> Link klaar voor gebruik
                </span>
              </div>
              
              <div className="flex gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value={generatedLink}
                  className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-400 focus:outline-none"
                />
                <button
                  onClick={copyLink}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-4 rounded-lg flex items-center gap-2 transition-colors"
                >
                  {copiedLink ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              
              <div className="flex justify-end">
                <a 
                  href={generatedLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-[#e18409] hover:underline flex items-center gap-1"
                >
                  Test link <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
