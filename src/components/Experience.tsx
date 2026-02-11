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
      title: 'Bachelor of Science in Computer Sciences',
      company: 'National University of Computer and Emerging Sciences, Islamabad',
      period: 'Aug 2022 – Present',
      description:
        'Pursuing BS in Computer Science at FAST NUCES. Engaging in coursework covering software engineering, algorithms, web technologies, and various programming paradigms.',
      type: 'education',
    },
  ];

  const TimelineItem = ({ item, isLast }: { item: typeof experiences[0]; isLast: boolean }) => (
    <div className="relative pl-8 pb-12">
      {!isLast && (
        <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-slate-200"></div>
      )}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
        {item.type === 'work' ? (
          <Briefcase className="w-4 h-4 text-white" />
        ) : (
          <GraduationCap className="w-4 h-4 text-white" />
        )}
      </div>
      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
          <span className="text-emerald-600 font-medium text-sm md:text-base">
            {item.period}
          </span>
        </div>
        <p className="text-slate-600 font-medium mb-3">{item.company}</p>
        <p className="text-slate-600 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Briefcase className="w-7 h-7 text-emerald-600" />
              Work Experience
            </h3>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                item={exp}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-emerald-600" />
              Education
            </h3>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
