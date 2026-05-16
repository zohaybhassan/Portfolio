import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      {/* Dark base */}
      <div className="absolute inset-0 bg-slate-950"></div>
      {/* Space background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop')" }}
      ></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80"></div>

      {/* Ambient glow orbs — indigo/violet only */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Monospace tag line */}
          <div className="inline-block relative">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-6 h-px bg-indigo-400 opacity-70"></span>
            <h2
              className="text-lg md:text-xl font-mono tracking-[0.3em] uppercase mb-4"
              style={{
                color: '#a5b4fc',
                textShadow: '0 0 20px rgba(99,102,241,0.5)',
              }}
            >
              &lt; Hello, I'm /&gt;
            </h2>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-6 h-px bg-indigo-400 opacity-70"></span>
          </div>

          {/* Name — indigo to violet gradient */}
          <h1
            className="text-5xl md:text-7xl font-black mb-4 tracking-tight animate-neon-shimmer"
            style={{
              background: 'linear-gradient(90deg, #818cf8, #a78bfa, #c4b5fd, #a78bfa, #818cf8)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(129,140,248,0.4))',
            }}
          >
            Zohaib Hassan
          </h1>

          <p className="text-xl md:text-3xl text-slate-300 font-light">
            Software Developer &amp; Full Stack Trainee
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            Computer Science student passionate about crafting elegant web applications and innovative solutions
          </p>

          {/* CTA Buttons — indigo themed */}
          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-indigo-500/40"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border border-indigo-500/60 text-indigo-300 rounded-lg font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-8 h-8 text-indigo-400" />
      </button>
    </section>
  );
}
