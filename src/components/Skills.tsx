export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Vue.js', level: 85 },
        { name: 'React', level: 75 },
      ],
    },
    {
      category: 'Languages',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Assembly', level: 75 },
      ],
    },
    {
      category: 'Salesforce & Database',
      skills: [
        { name: 'Apex (Basic)', level: 65 },
        { name: 'SOQL', level: 70 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'JDBC/JavaFX', level: 85 },
        { name: 'WordPress', level: 70 },
        { name: 'Vuex/State Mgmt', level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto shadow-lg shadow-emerald-500/50"></div>
          <p className="text-slate-300 mt-4 text-lg">Mastering the tools that bring ideas to life</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.15}s both`
              }}
            >
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 pb-3 border-b-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="transform transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="text-emerald-400 font-semibold tabular-nums">{skill.level}%</span>
                      </div>
                      <div className="relative w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                        {/* Animated glow background */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 animate-pulse"
                        ></div>
                        {/* Progress bar with gradient and glow */}
                        <div
                          className="relative bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-400 h-2.5 rounded-full shadow-lg shadow-emerald-500/50 transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1.2s ease-out ${categoryIndex * 0.15 + skillIndex * 0.1}s both`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
