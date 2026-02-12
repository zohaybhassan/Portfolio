import { ExternalLink, Github } from 'lucide-react';
import primeFitnessImg from '/assets/primefitness.png';
import onlineLibImg from '/assets/onlinelib.jpg';
import pacmanImg from '/assets/pacman.png';
import torcsImg from '/assets/Torcs-title.png';

export default function Projects() {
  const projects = [
    {
      title: 'Salesforce CRM Prototype',
      description:
        'Modelled an \'Order-to-Cash\' workflow in a Developer Org, writing Apex Triggers to automate contact synchronization. Implemented Bulkified SOQL queries to process records efficiently, strictly adhering to Salesforce Governor Limits.',
      tags: ['Apex', 'SOQL', 'Salesforce Platform'],
      image: null,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Prime Fitness Gym Management System',
      description:
        'Engineered a Multi-Tier Client-Server architecture, separating UI logic from database operations (MVC Pattern). Implemented JDBC connectivity to execute complex SQL queries for member tracking, similar to Salesforce integration patterns. Applied GRASP design patterns (High Cohesion, Low Coupling) to ensure scalable and maintainable code.',
      tags: ['Java', 'JavaFX', 'JDBC', 'Springtool', 'MySQL'],
      image: primeFitnessImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Online Library Management System',
      description:
        'Designed a relational data schema in Firebase to handle inventory and user borrowing history (CRUD Operations). Implemented State Management (Vuex) to handle complex user sessions, ensuring data consistency across the application. Enforced Role-Based Access Control (RBAC) to securely separate admin privileges from student access.',
      tags: ['Vue.js', 'Vuex', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: onlineLibImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'TORCS Racing Simulator',
      description:
        'Developed an autonomous racing agent using MLP Regressors, training datasets to optimize driving trajectories. Built a data pipeline to clean and normalize sensor inputs before feeding them into the neural network.',
      tags: ['Python', 'MLP Regressor', 'Machine Learning'],
      image: torcsImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Plants vs. Zombies',
      description:
        'Architected a game engine using C++ Polymorphism, managing diverse entity behaviours via inheritance.',
      tags: ['C++', 'SFML', 'OOP', 'Game Dev'],
      image: null,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Pacman',
      description:
        'Optimized low-level memory usage by developing a clone in Assembly (x86), managing 32-bit registers directly.',
      tags: ['Assembly', 'x86', 'MASM'],
      image: pacmanImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Tetris Game Development',
      description:
        'Classic Tetris game developed in C++ using SFML library on Ubuntu. Applied programming fundamentals with proper array and pointer manipulation.',
      tags: ['C++', 'SFML', 'Ubuntu', 'Game Dev'],
      image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/yourusername',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 rounded-full shadow-lg shadow-emerald-500/50"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Collection of academic and personal projects showcasing various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-700/50 group-hover:border-emerald-500/50 flex flex-col h-full">
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
                        <a
                          href={project.github}
                          className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-6 h-6 text-white" />
                        </a>
                        <a
                          href={project.live}
                          className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center p-6 relative overflow-hidden">
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center leading-tight drop-shadow-2xl relative z-10">
                        {project.title}
                      </h3>
                    </div>
                  )}
                </div>

                {/* Content section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed flex-grow group-hover:text-slate-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full font-medium border border-slate-600/50 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/50 transition-all duration-300 cursor-default"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${0.8 + index * 0.1 + tagIndex * 0.05}s both`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
