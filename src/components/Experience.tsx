import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Internship',
      company: 'Teresol Pvt. Ltd. Islamabad (On-site)',
      period: 'June 2024 – Aug 2024',
      description:
        'Architected a Vue.js Finite State Machine (FSM) to manage complex user sessions and ensure data consistency. Built scalable, reusable UI components using Component-Based Architecture, mirroring Salesforce LWC patterns. Implemented Vuex state management, reducing redundant API calls and boosting performance by 30%.',
      type: 'work',
    },
    {
      title: 'Technical Content Writer',
      company: 'VeryAliGaming (Remote)',
      period: 'Feb 2024 – May 2024',
      description:
        'Published gaming articles on the website. Managed content workflows via WordPress (CMS), ensuring SEO compliance and accuracy.',
      type: 'work',
    },
  ];

  const education = [
    {
      title: 'Bachelors of Science in Computer Sciences',
      company: 'National University of Computer and Emerging Sciences, Islamabad',
      period: 'Aug 2022 – Present',
      description:
        'Pursuing BS in Computer Science at FAST NUCES. Engaging in coursework covering software engineering, algorithms, web technologies, and various programming paradigms.',
      type: 'education',
    },
  ];

  const TimelineItem = ({ item, isLast, index }: { item: typeof experiences[0]; isLast: boolean; index: number }) => (
    <div
      className="relative pl-8 pb-12 group"
      style={{
        animation: `fadeSlideIn 0.6s ease-out ${index * 0.2}s both`
      }}
    >
      {!isLast && (
        <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent"></div>
      )}

      {/* Timeline node */}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/40 ring-4 ring-slate-900 group-hover:ring-indigo-500/30 transition-all duration-300 group-hover:scale-110">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 animate-ping opacity-20"></div>
        {item.type === 'work' ? (
          <Briefcase className="w-4 h-4 text-white relative z-10" />
        ) : (
          <GraduationCap className="w-4 h-4 text-white relative z-10" />
        )}
      </div>

      {/* Card */}
      <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-indigo-500/40 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group-hover:-translate-y-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0 group-hover:from-indigo-500/5 group-hover:to-violet-500/5 transition-all duration-700"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/8 to-transparent blur-2xl group-hover:from-indigo-500/15 transition-all duration-500"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
              {item.title}
            </h3>
            <span className="text-indigo-400 font-semibold text-sm px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/30 mt-2 md:mt-0 w-fit">
              {item.period}
            </span>
          </div>
          <p className="text-violet-300/80 font-medium mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            {item.company}
          </p>
          <p className="text-slate-300 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience &amp; <span className="text-indigo-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full shadow-lg shadow-indigo-500/40"></div>
          <p className="text-slate-400 mt-4 text-lg">My journey in technology and learning</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 animate-fade-in-left">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h3>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                item={exp}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3 animate-fade-in-left delay-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Education
              </span>
            </h3>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                index={experiences.length + index}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
