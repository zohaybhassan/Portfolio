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
      className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Skills &amp; <span className="text-indigo-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full shadow-lg shadow-indigo-500/40"></div>
          <p className="text-slate-400 mt-4 text-lg">Mastering the tools that bring ideas to life</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIndex * 0.15}s both`
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/5 group-hover:to-violet-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-slate-700 group-hover:border-indigo-500/50 transition-colors duration-300">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="transform transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
                        <span className="text-indigo-400 font-semibold tabular-nums text-sm">{skill.level}%</span>
                      </div>
                      <div className="relative w-full bg-slate-700/60 rounded-full h-2 overflow-hidden">
                        <div
                          className="relative bg-gradient-to-r from-indigo-500 to-violet-500 h-2 rounded-full shadow-lg shadow-indigo-500/30 transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1.2s ease-out ${categoryIndex * 0.15 + skillIndex * 0.1}s both`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
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
