import { Github } from 'lucide-react';
import primeFitnessImg from '/assets/primefitness.png';
import onlineLibImg from '/assets/onlinelib.jpg';
import pacmanImg from '/assets/pacman.png';
import torcsImg from '/assets/Torcs-title.png';
import stresslogo from '/assets/stresslogo.jpg';

const githubProfile = 'https://github.com/zohaybhassan';

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
      github: githubProfile,
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
      github: githubProfile,
      live: '#',
    },
    {
      title: '"The Memory Architect": Custom Dynamic Memory Manager',
      description:
        'Engineered a custom, template-based dynamic array class from scratch managing heap memory without standard library containers. Implemented the "Rule of Five" with copy/move constructors and assignment operators. Architected a manual memory reallocation strategy with geometric capacity growth to achieve amortized O(1) insertion time.',
      tags: ['C++', 'Memory Management', 'Templates', 'Systems Programming'],
      image: null,
      github: githubProfile,
      live: '#',
    },
    {
      title: 'TORCS Racing Simulator',
      description:
        'Developed an autonomous racing agent using MLP Regressors, training datasets to optimize driving trajectories. Built a data pipeline to clean and normalize sensor inputs before feeding them into the neural network.',
      tags: ['Python', 'MLP Regressor', 'Machine Learning'],
      image: torcsImg,
      github: githubProfile,
      live: '#',
    },
    {
      title: 'Plants vs. Zombies',
      description:
        'Architected a game engine using C++ Polymorphism, managing diverse entity behaviours via inheritance.',
      tags: ['C++', 'SFML', 'OOP', 'Game Dev'],
      image: null,
      github: githubProfile,
      live: '#',
    },
    {
      title: 'Pacman',
      description:
        'Optimized low-level memory usage by developing a clone in Assembly (x86), managing 32-bit registers directly.',
      tags: ['Assembly', 'x86', 'MASM'],
      image: pacmanImg,
      github: githubProfile,
      live: '#',
    },
    {
      title: 'Tetris Game Development',
      description:
        'Classic Tetris game developed in C++ using SFML library on Ubuntu. Applied programming fundamentals with proper array and pointer manipulation.',
      tags: ['C++', 'SFML', 'Ubuntu', 'Game Dev'],
      image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: githubProfile,
      live: '#',
    },
  ];

  return (
    <section id="projects" className="section-shell section-muted">
      <div className="page-container">
        <div className="mb-9">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-description">
            Collection of academic and personal projects showcasing various technologies
          </p>
        </div>
        {projects.filter((project) => project.featured).map((project) => (
          <article key={project.title} className="surface-card mb-6">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <p className="text-xs font-medium uppercase tracking-wider text-indigo-300 mb-4">Final Year Project</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-100 leading-snug mb-4">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300 mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag} className="skill-tag">{tag}</li>)}
                </ul>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-secondary w-fit" aria-label={`View ${project.title} on GitHub`}>
                  <Github className="w-4 h-4" aria-hidden="true" />
                  View on GitHub
                </a>
              </div>
              <div className="lg:col-span-2">
                {project.image && (
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-52 object-cover rounded-lg border border-slate-700/60 mb-5" />
                )}
                <dl className="grid grid-cols-2 gap-x-5 gap-y-4">
                  {[
                    { label: 'Classification Accuracy', value: '89.41%' },
                    { label: 'ML Ensemble Models', value: '3 Algorithms' },
                    { label: 'Data Balance', value: 'SMOTE Applied' },
                    { label: 'Platform', value: 'Android + BLE' },
                  ].map((stat) => (
                    <div key={stat.label} className="border-t border-slate-700/60 pt-3">
                      <dt className="text-xs text-slate-400 mb-1">{stat.label}</dt>
                      <dd className="text-sm font-medium text-slate-100">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        ))}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.filter((project) => !project.featured).map((project) => (
            <article key={project.title} className="project-card">
              {project.image && (
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-44 object-cover border-b border-slate-700/60" />
              )}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold leading-snug text-slate-100 mb-3">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400 mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag} className="skill-tag">{tag}</li>)}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary mt-auto self-start w-fit"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
