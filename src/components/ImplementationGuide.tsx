import { useState, useEffect } from 'react';
import { Copy, Check, Send, Globe, ShieldCheck, Zap, ArrowRight, Layout, Server, Search, ArrowDown, FileJson, Bot, Database, HelpCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ImplementationGuide() {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmailDev, setCopiedEmailDev] = useState(false);
  const [copiedEmailUs, setCopiedEmailUs] = useState(false);
  const [copiedEmailVerify, setCopiedEmailVerify] = useState(false);
  const [activeTab, setActiveTab] = useState<'wordpress' | 'wix' | 'html' | null>(null);
  const [jsonLdCode, setJsonLdCode] = useState(`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UW BEDRIJFSNAAM",
  "url": "https://www.uwwebsite.nl",
  "logo": "https://www.uwwebsite.nl/logo.png",
  "description": "Korte beschrijving van uw activiteiten voor AI-herkenning.",
  "sameAs": [
    "https://www.facebook.com/uwbedrijf",
    "https://www.linkedin.com/company/uwbedrijf"
  ]
}
</script>`);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get('data');
    if (data) {
      try {
        const decoded = atob(data);
        setJsonLdCode(decoded);
      } catch (e) {
        console.error("Failed to decode JSON-LD data from URL", e);
      }
    }
  }, []);

  const emailTextDev = `Hoi [Naam Webbouwer],

Ik heb een 'Digitaal Paspoort' (JSON-LD Structured Data) laten maken om onze website beter vindbaar te maken voor AI-systemen zoals ChatGPT en Google Gemini.

Zou je onderstaande code in de <head> sectie van de homepage kunnen plaatsen?

${jsonLdCode}

Dit is essentieel voor onze toekomstige vindbaarheid. Laat je even weten als het gelukt is?

Alvast bedankt!`;

  const emailTextUs = `Hoi GeoDiscovery Team,

Ik heb mijn code ontvangen, maar ik vind het lastig om deze zelf te plaatsen. 

Zouden jullie de implementatie voor mij kunnen verzorgen?

Mijn website is: [UW WEBSITE URL]

Graag hoor ik wat de vervolgstappen zijn.`;

  const emailTextVerify = `Hoi GeoDiscovery Team,

De JSON-LD code is geplaatst op mijn website!

Zouden jullie de officiële AI-verificatie scan kunnen draaien om te bevestigen dat alles goed staat voor ChatGPT en Google Gemini?

Mijn website is: [UW WEBSITE URL]

Alvast bedankt!`;

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmail = (to: string, subject: string, body: string) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-[#e18409] selection:text-white pb-20 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#e18409_0%,transparent_50%)] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e18409] rounded-full blur-[100px] opacity-10"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24 relative z-10">
        
        {/* Hero Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-6 py-8"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Activeer uw <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e18409] to-orange-400">Digitale Paspoort</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Volg deze 3 simpele stappen om uw website zichtbaar te maken voor de nieuwe generatie zoekmachines.
            </p>
          </motion.div>
        </motion.section>

        {/* Step 1: The Code */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 relative"
        >
          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-slate-800 hidden md:block"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#e18409] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-900/20 flex-shrink-0 border-4 border-slate-950">1</div>
            <div className="flex-1 space-y-6 pt-2">
              <h2 className="text-3xl font-bold text-white">Kopieer uw unieke code</h2>
              <p className="text-slate-400">Dit blok bevat uw bedrijfsidentiteit in computertaal. U hoeft dit niet te begrijpen, alleen te kopiëren.</p>
              
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative group transform transition-all hover:border-slate-700">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">application/ld+json</div>
                </div>
                
                <div className="p-6 md:p-8 overflow-x-auto bg-[#0B1120]">
                  <pre className="font-mono text-sm md:text-base leading-relaxed text-slate-300">
                    <code>
                      <span className="text-slate-500">&lt;</span>
                      <span className="text-pink-400">script</span> <span className="text-slate-400">type</span>
                      <span className="text-slate-500">=</span>
                      <span className="text-green-400">"application/ld+json"</span>
                      <span className="text-slate-500">&gt;</span>
                      {'\n'}
                      <span className="text-yellow-400">{'{'}</span>
                      {'\n  '}
                      <span className="text-blue-300">"@context"</span>: <span className="text-green-400">"https://schema.org"</span>,
                      {'\n  '}
                      <span className="text-blue-300">"@type"</span>: <span className="text-green-400">"Organization"</span>,
                      {'\n  '}
                      <span className="text-blue-300">"name"</span>: <span className="text-green-400">"UW BEDRIJFSNAAM"</span>,
                      {'\n  '}
                      <span className="text-blue-300">"url"</span>: <span className="text-green-400">"https://www.uwwebsite.nl"</span>,
                      {'\n  '}
                      <span className="text-blue-300">"logo"</span>: <span className="text-green-400">"https://www.uwwebsite.nl/logo.png"</span>,
                      {'\n  '}
                      <span className="text-blue-300">"description"</span>: <span className="text-green-400">"Korte beschrijving..."</span>,
                      {'\n  '}
                      <span className="text-blue-300">"sameAs"</span>: [
                      {'\n    '}
                      <span className="text-green-400">"https://www.linkedin.com/..."</span>
                      {'\n  '}
                      ]
                      {'\n'}
                      <span className="text-yellow-400">{'}'}</span>
                      {'\n'}
                      <span className="text-slate-500">&lt;/</span>
                      <span className="text-pink-400">script</span>
                      <span className="text-slate-500">&gt;</span>
                    </code>
                  </pre>
                </div>

                <button 
                  onClick={() => copyToClipboard(jsonLdCode, setCopiedCode)}
                  className="absolute top-20 right-8 bg-[#e18409] hover:bg-[#c67306] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-orange-900/40 active:scale-95 z-10"
                >
                  {copiedCode ? <Check size={18} /> : <Copy size={18} />}
                  {copiedCode ? "Gekopieerd!" : "Kopieer Code"}
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 2: Implementation Options */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 relative"
        >
          <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-slate-800 hidden md:block"></div>

          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xl">2</div>
            <div className="flex-1 space-y-6 pt-2">
              <h2 className="text-3xl font-bold text-white">Kies hoe u het wilt plaatsen</h2>
              <p className="text-slate-400">Kies de methode die het beste bij u past.</p>

              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* Option A: DIY */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-slate-700 transition-colors">
                  <div className="p-6 border-b border-slate-800">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-4">
                      <Layout size={24} />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Ik doe het zelf</h3>
                    <p className="text-slate-400 text-sm">Voor wie toegang heeft tot het CMS (WordPress, Wix, etc).</p>
                  </div>
                  
                  <div className="p-4 space-y-2 flex-1 bg-slate-950/30">
                    {/* WordPress Accordion */}
                    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
                      <button 
                        onClick={() => setActiveTab(activeTab === 'wordpress' ? null : 'wordpress')}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800 transition-colors"
                      >
                        <span className="font-medium text-white flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#21759b]"></div> WordPress
                        </span>
                        {activeTab === 'wordpress' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {activeTab === 'wordpress' && (
                          <motion.div 
                            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm text-slate-400 space-y-2 border-t border-slate-800">
                              <ol className="list-decimal pl-4 space-y-2 marker:text-slate-600">
                                <li>Installeer de gratis plugin <strong>"WPCode"</strong> (of "Insert Headers and Footers").</li>
                                <li>Ga in het menu naar <strong>Code Snippets &gt; Header & Footer</strong>.</li>
                                <li>Plak de code in het vak <strong>"Header"</strong>.</li>
                                <li>Klik op <strong>Save Changes</strong>. Klaar!</li>
                              </ol>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Wix Accordion */}
                    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
                      <button 
                        onClick={() => setActiveTab(activeTab === 'wix' ? null : 'wix')}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800 transition-colors"
                      >
                        <span className="font-medium text-white flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-400"></div> Wix / Squarespace
                        </span>
                        {activeTab === 'wix' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {activeTab === 'wix' && (
                          <motion.div 
                            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm text-slate-400 space-y-2 border-t border-slate-800">
                              <ol className="list-decimal pl-4 space-y-2 marker:text-slate-600">
                                <li>Ga naar <strong>Instellingen</strong> (Settings).</li>
                                <li>Zoek naar <strong>Custom Code</strong> of <strong>Advanced</strong>.</li>
                                <li>Klik op <strong>+ Add Custom Code</strong>.</li>
                                <li>Plak de code en kies <strong>"Head"</strong> als locatie.</li>
                                <li>Klik op <strong>Apply</strong>.</li>
                              </ol>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* HTML Accordion */}
                    <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
                      <button 
                        onClick={() => setActiveTab(activeTab === 'html' ? null : 'html')}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800 transition-colors"
                      >
                        <span className="font-medium text-white flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-orange-500"></div> HTML / Overig
                        </span>
                        {activeTab === 'html' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      <AnimatePresence>
                        {activeTab === 'html' && (
                          <motion.div 
                            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 pt-0 text-sm text-slate-400 space-y-2 border-t border-slate-800">
                              <ol className="list-decimal pl-4 space-y-2 marker:text-slate-600">
                                <li>Open het bestand <strong>index.html</strong> (of header.php).</li>
                                <li>Zoek de sluitende tag: <code className="bg-slate-800 px-1 rounded">&lt;/head&gt;</code>.</li>
                                <li>Plak de code <strong>direct daarboven</strong>.</li>
                                <li>Sla het bestand op en upload het.</li>
                              </ol>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Option B: Developer */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-slate-700 transition-colors">
                  <div className="p-6 border-b border-slate-800">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-4">
                      <Send size={24} />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Stuur naar webbouwer</h3>
                    <p className="text-slate-400 text-sm">Heeft u een technische partij? Laat hen het doen.</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between bg-slate-950/30">
                    <p className="text-sm text-slate-500 mb-6 italic">
                      "Hoi, ik heb een Digitaal Paspoort laten maken..."
                    </p>
                    <div className="space-y-3">
                      <button 
                        onClick={() => handleEmail('', 'Implementatie Digitaal Paspoort', emailTextDev)}
                        className="w-full bg-[#e18409] hover:bg-[#c67306] text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                      >
                        <Mail size={16} />
                        Open E-mail
                      </button>
                      <button 
                        onClick={() => copyToClipboard(emailTextDev, setCopiedEmailDev)}
                        className="w-full bg-white hover:bg-slate-100 text-slate-900 px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                      >
                        {copiedEmailDev ? <Check size={16} /> : <Copy size={16} />}
                        {copiedEmailDev ? "Tekst Gekopieerd!" : "Kopieer Tekst"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Option C: Let Us Do It */}
                <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex flex-col shadow-xl relative group hover:border-[#e18409]/50 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#e18409] rounded-full blur-[60px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
                  <div className="p-6 border-b border-slate-700 relative z-10">
                    <div className="w-12 h-12 bg-[#e18409] rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-900/30">
                      <HelpCircle size={24} />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Liever dat wij het doen?</h3>
                    <p className="text-slate-300 text-sm">Geen zorgen. Wij regelen de implementatie voor u.</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                    
                    {/* Visual Steps */}
                    <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">1</div>
                            <span>Kopieer het bericht hieronder</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">2</div>
                            <span>Stuur het naar ons</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">3</div>
                            <span>Wij plaatsen de code veilig</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                      <button 
                        onClick={() => handleEmail('contact@geodiscovery.io', 'Hulp bij implementatie', emailTextUs)}
                        className="w-full bg-[#e18409] hover:bg-[#c67306] text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-900/20 active:scale-95"
                      >
                        <Send size={16} />
                        Verstuur Direct
                      </button>
                      <button 
                        onClick={() => copyToClipboard(emailTextUs, setCopiedEmailUs)}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
                      >
                        {copiedEmailUs ? <Check size={16} /> : <Copy size={16} />}
                        {copiedEmailUs ? "Bericht Gekopieerd!" : "Kopieer Tekst"}
                      </button>
                    </div>
                    <p className="text-xs text-center text-slate-500 mt-3">
                      Stuur dit naar: <span className="text-slate-300 font-medium">contact@geodiscovery.io</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 3: Verify */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8 relative"
        >
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-xl">3</div>
            <div className="flex-1 space-y-6 pt-2">
              <h2 className="text-3xl font-bold text-white">Laat het ons weten!</h2>
              <p className="text-slate-400">
                Is de code geplaatst? Geef ons een seintje. Wij draaien dan de officiële <strong>AI-Verificatie Scan</strong> om te bevestigen dat alles werkt.
              </p>

              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
                 
                 <div className="space-y-4 max-w-xl relative z-10">
                   <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                     <ShieldCheck className="text-green-500" size={28} />
                     Klaar voor verificatie?
                   </h3>
                   <p className="text-slate-400 leading-relaxed">
                     Zodra wij uw bericht ontvangen, testen wij uw site met de tools van Google en OpenAI. U ontvangt daarna een officieel <strong>"AI-Ready" Certificaat</strong> per e-mail.
                   </p>
                 </div>

                 <div className="flex flex-col gap-3 w-full md:w-auto relative z-10">
                    <button 
                      onClick={() => handleEmail('contact@geodiscovery.io', 'Verificatie Digitaal Paspoort', emailTextVerify)}
                      className="whitespace-nowrap bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-3 active:scale-95"
                    >
                      <Send size={20} />
                      Verstuur Direct
                    </button>
                    <button 
                      onClick={() => copyToClipboard(emailTextVerify, setCopiedEmailVerify)}
                      className="whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 px-8 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      {copiedEmailVerify ? <Check size={14} /> : <Copy size={14} />}
                      {copiedEmailVerify ? "Gekopieerd!" : "Kopieer Tekst"}
                    </button>
                    <p className="text-xs text-center text-slate-500">
                      Stuur dit naar: <span className="text-slate-400">contact@geodiscovery.io</span>
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        <footer className="text-center text-slate-600 text-sm pt-12 border-t border-slate-900">
          <p>&copy; {new Date().getFullYear()} GeoDiscovery. Uw partner in AI-vindbaarheid.</p>
        </footer>

      </main>
    </div>
  );
}
