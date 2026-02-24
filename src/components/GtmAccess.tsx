import { useState } from 'react';
import { Settings, UserPlus, Mail, Globe, Lock, Copy, Check, Shield, MousePointerClick, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function GtmAccess() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "info@geodiscovery.io";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const steps = [
    {
      icon: Globe,
      title: "Log in op Google Tag Manager",
      desc: "Ga naar tagmanager.google.com en log in met uw Google account."
    },
    {
      icon: Settings,
      title: "Ga naar Beheer (Admin)",
      desc: "Klik linksboven op het tabblad 'Beheer'."
    },
    {
      icon: UserPlus,
      title: "Klik op Gebruikersbeheer",
      desc: "Kies 'Gebruikersbeheer' in de kolom 'Account' (of Container)."
    },
    {
      icon: MousePointerClick,
      title: "Klik op de blauwe Plus (+)",
      desc: "Rechtsboven vindt u een blauwe knop. Klik erop en kies 'Gebruikers toevoegen'."
    },
    {
      icon: Mail,
      title: "Vul het e-mailadres in",
      desc: "Gebruik het adres dat hiernaast staat.",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-[#e18409] selection:text-white pb-20 relative overflow-hidden">
       
       {/* Background Pattern */}
       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#e18409_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e18409] rounded-full blur-[100px] opacity-10"></div>
      </div>

       <main className="max-w-6xl mx-auto px-6 py-12 space-y-16 relative z-10">
        
        {/* Header */}
        <section className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Toegang tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e18409] to-orange-400">De Cijfers</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Om de resultaten van de AI-optimalisatie te kunnen bewijzen, hebben we toegang nodig tot uw Google Tag Manager. Zo kunnen we conversies meten.
            </p>
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Timeline Steps */}
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800"></div>

            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex gap-6 ${step.highlight ? 'bg-slate-900/50 p-4 rounded-2xl border border-slate-800 -mx-4' : ''}`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-950 z-10 flex-shrink-0 ${step.highlight ? 'bg-[#e18409] text-white shadow-lg shadow-orange-900/40' : 'bg-slate-800 text-slate-400 border-slate-950'}`}>
                  <step.icon size={20} />
                </div>
                <div className="pt-2">
                  <h3 className={`font-bold text-lg mb-1 ${step.highlight ? 'text-white' : 'text-slate-200'}`}>{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Action Card */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#e18409] to-orange-700 rounded-3xl p-8 shadow-2xl shadow-orange-900/20 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm border border-white/30">
                  <Mail size={32} />
                </div>
                
                <div>
                  <p className="text-orange-100 text-sm font-medium uppercase tracking-wider mb-2">Gebruiker toevoegen</p>
                  <h3 className="text-2xl md:text-3xl font-bold break-all">{email}</h3>
                </div>

                <button 
                  onClick={handleCopyEmail}
                  className="w-full bg-white text-orange-600 hover:bg-orange-50 px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl active:scale-95"
                >
                  {copiedEmail ? <Check size={20} /> : <Copy size={20} />}
                  {copiedEmail ? "E-mail Gekopieerd!" : "Kopieer E-mailadres"}
                </button>
              </div>
            </motion.div>

            {/* Explanation Block */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex gap-4">
              <div className="p-3 bg-slate-800 rounded-xl h-fit text-slate-400">
                <Lock size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-white">Waarom "Publiceren"?</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Zorg dat u het vinkje <strong>"Publiceren"</strong> (of Publish) aan zet. 
                  Zonder deze rechten kunnen wij de metingen wel voorbereiden, maar niet live zetten op uw website.
                </p>
              </div>
            </div>

            {/* Help Link */}
            <div className="text-center">
              <a href="https://support.google.com/tagmanager/answer/6107011?hl=nl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#e18409] transition-colors text-sm font-medium">
                Meer hulp nodig bij Google? <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
