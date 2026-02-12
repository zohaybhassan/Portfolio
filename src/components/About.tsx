import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'blue',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Designing intuitive and beautiful user interfaces',
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'purple',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering projects on time without compromising quality',
      gradient: 'from-emerald-500 to-teal-500',
      glowColor: 'emerald',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-25" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Large animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with gradient text */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto rounded-full shadow-lg shadow-purple-500/50 animate-pulse"></div>
          <p className="text-slate-300 mt-4 text-lg">Passionate developer crafting digital experiences</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main bio card with glassmorphism and 3D effect */}
          <div
            className="relative group mb-16 animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Main card */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-indigo-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Top corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">My Journey</h3>
                    <p className="text-cyan-300 text-sm">Crafting Code, Creating Solutions</p>
                  </div>
                </div>

                <p className="text-lg text-slate-200 leading-relaxed mb-6 hover:text-white transition-colors duration-300">
                  I'm a <span className="font-semibold text-cyan-300">Computer Science student</span> at the National University of Computer and Emerging Sciences (FAST NUCES), Islamabad,
                  passionate about <span className="font-semibold text-purple-300">software development</span> and <span className="font-semibold text-pink-300">web technologies</span>. With hands-on experience in front-end development through
                  my internship at <span className="font-semibold text-emerald-300">Teresol Pvt. Ltd.</span>, I've worked on building modern web applications using
                  Vue.js, Vuex state management, and Component-Based Architecture patterns.
                </p>
                <p className="text-lg text-slate-200 leading-relaxed hover:text-white transition-colors duration-300">
                  I have experience with diverse technologies including <span className="font-semibold text-cyan-300">Salesforce platform</span> (Apex, SOQL), full-stack web development,
                  and game engine development. I'm constantly learning and applying best practices in software engineering, from
                  Multi-Tier Architecture and GRASP design patterns to modern frontend frameworks and cloud platforms.
                </p>

                {/* Decorative elements */}
                <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span>Available for opportunities</span>
                  </div>
                  <div className="h-4 w-px bg-slate-600"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Always learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight cards with creative effects */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{
                  animationDelay: `${0.4 + index * 0.15}s`
                }}
              >
                {/* Glowing effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 shadow-xl group-hover:shadow-2xl overflow-hidden h-full flex flex-col">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Floating particles on hover */}
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity"></div>
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-delayed transition-opacity"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon with 3D effect */}
                    <div className={`bg-gradient-to-br ${highlight.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${highlight.glowColor}-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-${highlight.glowColor}-500/50`}>
                      <highlight.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>

                    {/* Text content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${highlight.gradient} transition-all duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 flex-grow">
                      {highlight.description}
                    </p>

                    {/* Hover indicator */}
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
    </section >
  );
}
