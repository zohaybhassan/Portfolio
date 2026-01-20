import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Internship (Front-End Developer)',
      company: 'Teresol Pvt. Ltd. Islamabad',
      period: 'June 2024 – Aug 2024',
      description:
        'Developed an online web application as a front-end developer. Worked extensively with Vue.JS and FSM (Finite State Machine) to build the product.',
      type: 'work',
    },
    {
      title: 'Software Internship (Front-End Developer)',
      company: 'Aesthetic Dental Co (Remote)',
      period: 'Dec 2024 – Feb 2025',
      description:
        'Working as a digital content and front-end manager for their new website. Collaborated with the team on React development and managed database operations.',
      type: 'work',
    },
    {
      title: 'Content Writer (Freelance)',
      company: 'Remote',
      period: 'April 2023 – Present',
      description:
        'Writing on diverse subjects ranging from marketing to humanities. Producing quality content for various clients and platforms.',
      type: 'work',
    },
    {
      title: 'Admissions Team Intern',
      company: 'FAST NUCES Islamabad',
      period: 'June 2023 – Aug 2023',
      description:
        'Worked on the University Online Portal-FLEX for admissions process. Developed and implemented Excel and Word skills for database management.',
      type: 'work',
    },
    {
      title: 'Digital Operations Officer',
      company: 'NASCON\'24 – FAST NUCES Islamabad',
      period: 'Feb 2024 – March 2024',
      description:
        'Managed digital operations for the conference. Worked extensively on Microsoft Excel and Word for various database management queries.',
      type: 'work',
    },
    {
      title: 'Gaming Guide Writer',
      company: 'FAST NUCES Islamabad',
      period: 'Feb 2024 – March 2024',
      description:
        'Wrote gaming guides for veryaligaming, supervising work. Worked on WordPress for publishing gaming articles on the website.',
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
