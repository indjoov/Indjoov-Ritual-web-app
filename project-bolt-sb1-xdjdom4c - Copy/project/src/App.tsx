import React, { useState, useEffect } from 'react';
import { Youtube, Music, Play, Instagram, Mail, Phone } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/Satyrs final.jpg')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Home Section */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/INDJOOV LOGO WHITE.png" 
                alt="Indjoov Logo" 
                className="w-64 h-auto mx-auto mb-6 filter drop-shadow-2xl"
              />
            </div>
            
            {/* Slogan */}
            <div className="mb-12 space-y-2">
              <p className="text-xl md:text-2xl font-light text-red-400 tracking-wide">
                Psychedelic Doom Rituals. Concept Albums. Live Sessions.
              </p>
              <p className="text-lg text-gray-300 font-light">Est. 2022</p>
              <p className="text-base md:text-lg text-gray-400 italic max-w-2xl mx-auto leading-relaxed mt-4">
                Guitars speak, vocals guide, drums breathe and time dissolves.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://www.youtube.com/@indjoov" icon={Youtube} label="YouTube" />
              <SocialLink href="https://indjoov.bandcamp.com/album/phantasmagoria" icon={Music} label="Bandcamp" />
              <SocialLink href="https://open.spotify.com/intl-de/artist/3zgB30BGlt75gle887Sw2U" icon={Play} label="Spotify" />
              <SocialLink href="https://www.tiktok.com/@indjoov" icon={Music} label="TikTok" />
              <SocialLink href="https://www.instagram.com/indjoov/" icon={Instagram} label="Instagram" />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400">Live Session</h2>
            
            <div className="relative aspect-video max-w-3xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/oL2uF76o3Ic"
                title="Indjoov Live Session"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <p className="mt-6 text-gray-300 text-lg">
              Experience the ritualistic atmosphere of Indjoov live
            </p>
          </div>
        </section>

        {/* Album Section */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400">Phantasmagoria</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Album Cover */}
              <div className="order-2 md:order-1">
                <img 
                  src="/PHANTASMAGORIA Album COVER 3 300x300.jpg" 
                  alt="Phantasmagoria Album Cover" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Vinyl Collection */}
              <div className="order-1 md:order-2">
                <img 
                  src="/indjoov vinyl phantasmagoria.jpg" 
                  alt="Phantasmagoria Vinyl Collection" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-xl text-gray-300">
                Our latest concept album exploring psychological and societal transformation
              </p>
              <p className="text-lg text-gray-400">
                Eleven interconnected songs performed with theatrical makeup and analog soundscapes
              </p>
              
              <div className="flex justify-center space-x-6 mt-6">
                <a 
                  href="https://indjoov.bandcamp.com/album/phantasmagoria"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                >
                  Listen on Bandcamp
                </a>
                <a 
                  href="https://open.spotify.com/intl-de/artist/3zgB30BGlt75gle887Sw2U"
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                >
                  Stream on Spotify
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Merch Section */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400">Merchandise</h2>
            
            <div className="max-w-2xl mx-auto">
              <img 
                src="/indjoov merch.jpeg" 
                alt="Indjoov Merchandise" 
                className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="mt-8 space-y-4">
              <p className="text-xl text-gray-300">
                Official Indjoov merchandise and vinyl records
              </p>
              <p className="text-lg text-gray-400">
                Support the band and get exclusive items
              </p>
              
              <div className="mt-6">
                <a 
                  href="mailto:niki.indjov@gmail.com?subject=Merchandise Inquiry"
                  className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg transition-colors duration-300 font-semibold inline-block"
                >
                  Contact for Merch & Vinyl
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-400">About Indjoov</h2>
            
            <div className="bg-black bg-opacity-40 p-8 rounded-lg backdrop-blur-sm border border-red-900 border-opacity-30 text-left">
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Indjoov is a psychedelic doom rock band based in Turku, Finland.
                </p>
                <p>
                  Founded in Berlin and now rooted in the Nordics, Indjoov merges blackened atmospheres, 
                  hypnotic riff cycles and German-language concept albums into a ritualistic live experience.
                </p>
                <p>
                  Our upcoming album Phantasmagoria explores the stages of psychological and societal 
                  transformation through eleven interconnected songs – performed with theatrical makeup, 
                  analog soundscapes and a philosophical backbone.
                </p>
                <p>
                  Indjoov is a self-managed, independent project focusing on international collaboration, 
                  Finnish underground culture, and performance-based storytelling in music.
                </p>
                <p>
                  The band is currently preparing a Finnish club tour, seeking support from the arts 
                  funding system (Taike, MES) and building long-term artistic residency in Turku.
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 bg-black bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-red-900 border-opacity-30">
              <h3 className="text-xl font-semibold text-red-400 mb-4">Contact for Booking, Merch & Vinyl</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-red-400" />
                  <a 
                    href="mailto:niki.indjov@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    niki.indjov@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-red-400" />
                  <a 
                    href="tel:+358449305847" 
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +358 44 930 5847
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110"
      aria-label={label}
    >
      <Icon className="w-6 h-6 group-hover:text-red-400 transition-colors duration-300" />
    </a>
  );
}

export default App;