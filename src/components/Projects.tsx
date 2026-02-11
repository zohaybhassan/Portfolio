import { ExternalLink, Github } from 'lucide-react';
import primeFitnessImg from '/assets/primefitness.png';
import onlineLibImg from '/assets/onlinelib.jpg';
import pacmanImg from '/assets/pacman.png';
import torcsImg from '/assets/Torcs-title.png';

export default function Projects() {
  const projects = [
    {
      title: 'Prime Fitness Gym Management System',
      description:
        'Web application with multi-tier client-server architecture using JavaFX and JDBC. Integrated with mySQL database following GRASP design patterns.',
      tags: ['JavaFX', 'JDBC', 'Springtool', 'MySQL', 'JavaScript'],
      image: primeFitnessImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Online Library Management System',
      description:
        'Full-stack web application built with Vue.js and Firebase database. Implemented FSM for state management to handle complex book lending workflows.',
      tags: ['Vue.js', 'Vuex', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
      image: onlineLibImg,
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
    {
      title: 'Pacman Game Development',
      description:
        'Developed Pacman game from scratch using Assembly language and Irvine library. Used 32-bit MASM 615 for x8086 processor programming.',
      tags: ['Assembly', 'Irvine', 'MASM', 'x8086'],
      image: pacmanImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'Plants Vs Zombies Game',
      description:
        'Tower defense game developed using C++ and SFML. Applied OOP concepts including inheritance and polymorphism with proper UML design.',
      tags: ['C++', 'SFML', 'OOP', 'Game Dev'],
      image: null,
      github: 'https://github.com/yourusername',
      live: '#',
    },
    {
      title: 'TORCS Racing Simulator',
      description:
        'AI-powered racing game using Python with MLP Regressor. Trained datasets on the model for autonomous driving simulation.',
      tags: ['Python', 'MLP', 'Machine Learning', 'AI'],
      image: torcsImg,
      github: 'https://github.com/yourusername',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Collection of academic and personal projects showcasing various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative overflow-hidden h-48">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                      <a
                        href={project.github}
                        className="p-2 bg-white rounded-lg hover:bg-emerald-500 transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5 text-slate-900 hover:text-white" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 bg-white rounded-lg hover:bg-emerald-500 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-900 hover:text-white" />
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center p-6">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white text-center leading-tight drop-shadow-2xl">
                      {project.title}
                    </h3>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                    >
                      {tag}
                    </span>
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
