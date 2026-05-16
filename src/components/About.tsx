import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Designing intuitive and beautiful user interfaces',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering projects on time without compromising quality',
      gradient: 'from-indigo-500 to-sky-500',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Ambient orbs — indigo/violet only */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full shadow-lg shadow-indigo-500/40"></div>
          <p className="text-slate-400 mt-4 text-lg">Passionate developer crafting digital experiences</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Bio card */}
          <div
            className="relative group mb-16 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Glowing border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

            <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/10 to-transparent blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-indigo-400 to-violet-400 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">My Journey</h3>
                    <p className="text-indigo-300 text-sm">Crafting Code, Creating Solutions</p>
                  </div>
                </div>

                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  I am a <span className="font-semibold text-indigo-300">software developer and CS senior at FAST NUCES</span>, specializing at the intersection of
                  <span className="font-semibold text-violet-300"> scalable system architecture</span> and <span className="font-semibold text-violet-300">applied artificial intelligence</span>.
                  While I have a strong foundation in full-stack development, my core expertise lies in engineering
                  <span className="font-semibold text-sky-300"> predictive machine learning pipelines</span>, integrating real-time data telemetry,
                  and developing autonomous, multi-agent workflows.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed">
                  Proficient in a versatile stack, including <span className="font-semibold text-indigo-300">Python, Java, C++, and Salesforce.</span> I build everything from
                  custom Android health ecosystems to intelligent agentic automation tools. I am adept at applying
                  <span className="font-semibold text-violet-300"> clean design patterns</span> to build resilient, high-performance software that leverages
                  <span className="font-semibold text-sky-300"> AI to solve complex challenges</span>.
                </p>

                <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                  <div className="h-4 w-px bg-slate-700"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Always learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>

                <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-indigo-500/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden h-full flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`bg-gradient-to-br ${highlight.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <highlight.icon className="w-7 h-7 text-white drop-shadow-lg" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                      {highlight.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                      <div className={`w-0 group-hover:w-8 h-0.5 bg-gradient-to-r ${highlight.gradient} transition-all duration-500 rounded-full`}></div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
