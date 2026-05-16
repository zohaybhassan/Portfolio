import { ExternalLink, Github } from 'lucide-react';
import primeFitnessImg from '/assets/primefitness.png';
import onlineLibImg from '/assets/onlinelib.jpg';
import pacmanImg from '/assets/pacman.png';
import torcsImg from '/assets/Torcs-title.png';
import stresslogo from '/assets/stresslogo.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'StressGuard: Intelligent Stress Detection Ecosystem',
      description:
        'Built a native Android ecosystem that captures continuous BLE smartwatch telemetry to predict physiological stress spikes before they escalate. Implemented a high-stability Voting Ensemble (XGBoost, CatBoost, Random Forest) trained on SMOTE-balanced data, achieving 89.41% classification accuracy. Created a context-aware rule engine that dynamically alters safety thresholds and triggers real-time alerts based on a user\'s aggregated medical history.',
      tags: ['Python', 'XGBoost', 'CatBoost', 'Random Forest', 'Android', 'BLE', 'SMOTE'],
      image: stresslogo,
      github: 'https://github.com/zohaybhassan/StressGuard-ML-Based-Stress-Detection',
      live: '#',
      featured: true,
    },
    {
      title: 'Salesforce CRM Prototype',
      description:
        'Modelled an \'Order-to-Cash\' workflow in a Developer Org, writing Apex Triggers to automate contact synchronization. Implemented Bulkified SOQL queries to process records efficiently, strictly adhering to Salesforce Governor Limits.',
      tags: ['Apex', 'SOQL', 'Salesforce Platform'],
      image: null,
      github: null,
      live: '#',
    },
    {
      title: 'Prime Fitness Gym Management System',
      description:
        'Engineered a Multi-Tier Client-Server architecture, separating UI logic from database operations (MVC Pattern). Implemented JDBC connectivity to execute complex SQL queries for member tracking, similar to Salesforce integration patterns. Applied GRASP design patterns (High Cohesion, Low Coupling) to ensure scalable and maintainable code.',
      tags: ['Java', 'JavaFX', 'JDBC', 'Springtool', 'MySQL'],
      image: primeFitnessImg,
      github: 'https://github.com/zohaybhassan/Prime-Fitness-',
      live: '#',
    },
    {
      title: 'Online Library Management System',
      description:
        'Designed a relational data schema in Firebase to handle inventory and user borrowing history (CRUD Operations). Implemented State Management (Vuex) to handle complex user sessions, ensuring data consistency across the application. Enforced Role-Based Access Control (RBAC) to securely separate admin privileges from student access.',
      tags: ['Vue.js', 'Vuex', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: onlineLibImg,
      github: 'https://github.com/zohaybhassan/Magicbook.vue',
      live: '#',
    },

    {
      title: 'Self-Correcting RAG Chatbot',
      description:
        'Developed a Retrieval-Augmented Generation system for high-accuracy document retrieval using FAISS vector databases. Implemented an "LLM-as-a-Judge" pipeline to automate scoring of responses for factual consistency, significantly reducing hallucinations. Focused on data security ensuring AI outputs adhere to strict enterprise compliance standards.',
      tags: ['OpenAI', 'FAISS', 'LangSmith', 'Python', 'RAG'],
      image: null,
      github: 'https://github.com/zohaybhassan',
      live: '#',
    },
    {
      title: '"The Memory Architect": Custom Dynamic Memory Manager',
      description:
        'Engineered a custom, template-based dynamic array class from scratch managing heap memory without standard library containers. Implemented the "Rule of Five" with copy/move constructors and assignment operators. Architected a manual memory reallocation strategy with geometric capacity growth to achieve amortized O(1) insertion time.',
      tags: ['C++', 'Memory Management', 'Templates', 'Systems Programming'],
      image: null,
      github: 'https://github.com/zohaybhassan',
      live: '#',
    },
    {
      title: 'TORCS Racing Simulator',
      description:
        'Developed an autonomous racing agent using MLP Regressors, training datasets to optimize driving trajectories. Built a data pipeline to clean and normalize sensor inputs before feeding them into the neural network.',
      tags: ['Python', 'MLP Regressor', 'Machine Learning'],
      image: torcsImg,
      github: 'https://github.com/zohaybhassan',
      live: '#',
    },
    {
      title: 'Plants vs. Zombies',
      description:
        'Architected a game engine using C++ Polymorphism, managing diverse entity behaviours via inheritance.',
      tags: ['C++', 'SFML', 'OOP', 'Game Dev'],
      image: null,
      github: 'https://github.com/zohaybhassan',
      live: '#',
    },
    {
      title: 'Pacman',
      description:
        'Optimized low-level memory usage by developing a clone in Assembly (x86), managing 32-bit registers directly.',
      tags: ['Assembly', 'x86', 'MASM'],
      image: pacmanImg,
      github: 'https://github.com/zohaybhassan',
      live: '#',
    },
    {
      title: 'Tetris Game Development',
      description:
        'Classic Tetris game developed in C++ using SFML library on Ubuntu. Applied programming fundamentals with proper array and pointer manipulation.',
      tags: ['C++', 'SFML', 'Ubuntu', 'Game Dev'],
      image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/zohaybhassan',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-4 rounded-full shadow-lg shadow-indigo-500/40"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Collection of academic and personal projects showcasing various technologies
          </p>
        </div>

        {/* ── Featured FYP Card ── */}
        {projects.filter(p => p.featured).map((project, index) => (
          <div key={`featured-${index}`} className="max-w-7xl mx-auto mb-12 group relative animate-fade-in-up">
            {/* Persistent glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-violet-500/40 group-hover:border-violet-400/70 transition-all duration-500">

              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500"></div>

              <div className="p-8 md:p-10 grid md:grid-cols-5 gap-8 items-center">

                {/* Left: text content — takes 3 cols */}
                <div className="md:col-span-3 flex flex-col gap-5">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 uppercase tracking-widest">
                      ⭐ Final Year Project
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      89.41% Accuracy
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      Android + BLE
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight group-hover:text-violet-200 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-violet-500/10 text-violet-300 text-xs rounded-full font-medium border border-violet-500/30 hover:bg-violet-500/25 hover:text-violet-200 transition-all duration-300 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub CTA */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>

                {/* Right: visual panel — takes 2 cols */}
                <div className="md:col-span-2 flex flex-col gap-4">
                  {/* Logo image */}
                  {project.image && (
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-violet-500/30 group-hover:border-violet-400/60 transition-all duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                        style={{ maxHeight: '220px', objectPosition: 'center' }}
                      />
                    </div>
                  )}
                  {/* Stat cards */}
                  {[
                    { label: 'Classification Accuracy', value: '89.41%', color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300' },
                    { label: 'ML Ensemble Models', value: '3 Algorithms', color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-300' },
                    { label: 'Data Balance', value: 'SMOTE Applied', color: 'from-cyan-500/20 to-sky-500/20 border-cyan-500/30 text-cyan-300' },
                    { label: 'Platform', value: 'Android + BLE', color: 'from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30 text-fuchsia-300' },
                  ].map((stat, i) => (
                    <div key={i} className={`bg-gradient-to-r ${stat.color} border rounded-xl p-4 flex justify-between items-center`}>
                      <span className="text-slate-400 text-xs font-medium">{stat.label}</span>
                      <span className={`font-bold text-sm ${stat.color.split(' ').find(c => c.startsWith('text-'))}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-500 transition-all duration-700"></div>
            </div>
          </div>
        ))}

        {/* ── Regular Project Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-700/50 group-hover:border-indigo-500/40 flex flex-col h-full">
                {/* Image section */}
                <div className="relative overflow-hidden h-48">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Dark overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                      {/* Hover action buttons */}
                      <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                            aria-label="View GitHub repository"
                          >
                            <Github className="w-6 h-6 text-white" />
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 flex items-center justify-center p-6 relative overflow-hidden">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center leading-tight drop-shadow-2xl relative z-10">
                        {project.title}
                      </h3>
                      {/* Hover overlay for no-image cards */}
                      {project.github && (
                        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                            aria-label="View GitHub repository"
                          >
                            <Github className="w-6 h-6 text-white" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed flex-grow group-hover:text-slate-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-800/60 text-slate-400 text-xs rounded-full font-medium border border-slate-700/50 hover:bg-indigo-500/15 hover:text-indigo-300 hover:border-indigo-500/40 transition-all duration-300 cursor-default"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${0.8 + index * 0.1 + tagIndex * 0.05}s both`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors duration-300 mt-auto"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
