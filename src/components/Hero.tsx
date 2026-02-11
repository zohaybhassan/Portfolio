import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      {/* Dark Galaxy Background */}
      <div className="absolute inset-0 bg-black"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Animated Stars */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwMCIgaGVpZ2h0PSIyMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ2xvdyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZjtzdG9wLW9wYWNpdHk6MCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMiIgZmlsbD0idXJsKCNnbG93KSIgb3BhY2l0eT0iMC44Ii8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMjAwIiByPSIxLjUiIGZpbGw9InVybCgjZ2xvdykiIG9wYWNpdHk9IjAuNiIvPjxjaXJjbGUgY3g9IjUwMCIgY3k9IjMwMCIgcj0iMSIgZmlsbD0idXJsKCNnbG93KSIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iNzAwIiBjeT0iMTUwIiByPSIyIiBmaWxsPSJ1cmwoI2dsb3cpIiBvcGFjaXR5PSIwLjkiLz48Y2lyY2xlIGN4PSI5MDAiIGN5PSI0MDAiIHI9IjEuNSIgZmlsbD0idXJsKCNnbG93KSIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iMTEwMCIgY3k9IjI1MCIgcj0iMSIgZmlsbD0idXJsKCNnbG93KSIgb3BhY2l0eT0iMC44Ii8+PGNpcmNsZSBjeD0iMTMwMCIgY3k9IjM1MCIgcj0iMiIgZmlsbD0idXJsKCNnbG93KSIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTUwMCIgY3k9IjEwMCIgcj0iMS41IiBmaWxsPSJ1cmwoI2dsb3cpIiBvcGFjaXR5PSIwLjYiLz48Y2lyY2xlIGN4PSIyMDAiIGN5PSI1MDAiIHI9IjEiIGZpbGw9InVybCgjZ2xvdykiIG9wYWNpdHk9IjAuOSIvPjxjaXJjbGUgY3g9IjYwMCIgY3k9IjYwMCIgcj0iMiIgZmlsbD0idXJsKCNnbG93KSIgb3BhY2l0eT0iMC44Ii8+PC9zdmc+')] opacity-30 animate-pulse"></div>

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 via-transparent to-blue-950/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <h2 className="text-xl md:text-2xl font-light text-emerald-400 mb-4">
              Hello, I'm
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Zohaib Hassan
          </h1>
          <p className="text-xl md:text-3xl text-slate-300 font-light">
            Software Developer & Full Stack Trainee
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            Computer Science student passionate about crafting elegant web applications and innovative solutions
          </p>

          <div className="flex gap-4 justify-center mt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105"
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
        <ArrowDown className="w-8 h-8 text-emerald-400" />
      </button>
    </section>
  );
}
