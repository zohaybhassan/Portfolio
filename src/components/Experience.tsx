import { Briefcase, GraduationCap } from 'lucide-react';

type TimelineEntry = {
  title: string;
  company: string;
  period: string;
  description?: string;
  bullets?: string[];
  type: 'work' | 'education';
};

export default function Experience() {
  const experiences: TimelineEntry[] = [
    {
      title: 'Junior Business Analyst',
      company: 'Solar Informatics, Minnesota, USA',
      period: 'Oct 2026 – Present',
      bullets: [
        'Analyze business requirements, create UI designs, obtain stakeholder approval, and coordinate implementation with frontend and backend developers.',
        'Perform hands-on QA and BA testing to validate functionality against requirements and identify issues.',
        'Write and manage MySQL queries and work with MongoDB to investigate data issues and validate application behavior.',
      ],
      type: 'work',
    },
    {
      title: 'Software Product Business Analyst (Internship)',
      company: 'Solar Informatics, Minnesota, USA',
      period: 'Aug 2026 – Sep 2026',
      description:
        'Completed a business analysis internship focused on requirements analysis and product management.',
      type: 'work',
    },
    {
      title: 'Full Stack Engineer (Internship)',
      company: 'Teresol Pvt. Ltd. Islamabad (On-site)',
      period: 'June 2025 – Aug 2025',
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

  const education: TimelineEntry[] = [
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'National University of Computer and Emerging Sciences, Islamabad',
      period: 'Aug 2022 – June 2026',
      description:
        'Graduated with a Bachelor of Science in Computer Science from FAST NUCES, Islamabad. Studied software engineering, algorithms, databases, and web technologies, building a technical foundation for business analysis.',
      type: 'education',
    },
  ];

  const TimelineItem = ({ item }: { item: TimelineEntry }) => (
    <article className="surface-card">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between mb-3">
        <h4 className="text-lg font-semibold text-slate-100">{item.title}</h4>
        <p className="shrink-0 text-sm text-slate-400">{item.period}</p>
      </div>
      <p className="text-sm text-indigo-300 mb-4">{item.company}</p>
      {item.description && <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>}
      {item.bullets && (
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-slate-300 marker:text-slate-400">
          {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      )}
    </article>
  );

  return (
    <section id="experience" className="section-shell section-base">
      <div className="page-container">
        <div className="mb-9">
          <h2 className="section-heading">Experience &amp; Education</h2>
          <p className="section-description">My journey in technology and learning</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-100 mb-5">
            <Briefcase className="w-5 h-5 text-indigo-300" aria-hidden="true" />
            Work Experience
          </h3>
          <div className="space-y-4">
            {experiences.map((item) => <TimelineItem key={`${item.company}-${item.title}`} item={item} />)}
          </div>
          <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-100 mt-10 mb-5">
            <GraduationCap className="w-5 h-5 text-indigo-300" aria-hidden="true" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item) => <TimelineItem key={item.title} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
