import { ShieldCheck, Palette, Database } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'QA and BA testing to review application behavior and identify issues',
    },
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Designing clear interfaces that support usability and business requirements',
    },
    {
      icon: Database,
      title: 'SQL Queries',
      description: 'Writing and managing SQL queries to retrieve, review, and validate data',
    },
  ];

  return (
    <section id="about" className="section-shell section-base">
      <div className="page-container">
        <div className="mb-9">
          <h2 className="section-heading">About Me</h2>
          <p className="section-description">Connecting business needs with technology</p>
        </div>
        <div className="surface-card max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-100 mb-6">My Journey</h3>
          <div className="max-w-4xl mx-auto space-y-5">
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              I am a <span className="font-medium text-slate-100">Computer Science graduate from FAST NUCES, Islamabad</span>,
              and I am currently working as a <span className="font-medium text-slate-100">Business Analyst with Solar Informatics</span>,
              a U.S.-based company.
              I bring a technical perspective to <span className="font-medium text-slate-100">understanding business requirements</span>,
              reviewing functionality, and shaping practical solutions. Through full-stack, AI, and DevOps projects,
              I have developed an understanding of how digital products are designed, built, and deployed.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              That experience led me toward business analysis, where I can help
              <span className="font-medium text-slate-100"> address user pain points and make products more accessible and intuitive</span>.
              I connect stakeholders and developers, translating business needs into clear requirements that guide design,
              implementation, and deployment. <span className="font-medium text-slate-100">Strong communication is one of my key strengths</span>:
              I explain technical ideas clearly, clarify expectations, and build shared understanding across teams.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              My work spans <span className="font-medium text-slate-100">QA and BA testing</span>,
              <span className="font-medium text-slate-100"> UI design</span>, and
              <span className="font-medium text-slate-100"> SQL query management</span>.
              With strong knowledge of <span className="font-medium text-slate-100">MySQL and MongoDB</span>,
              I use data to investigate issues and validate application behavior.
              I focus on <span className="font-medium text-slate-100">quality assurance, clear user experiences, and reliable data</span>{' '}
              to support business requirements.
            </p>
          </div>
        </div>
        <div className="mt-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="surface-card">
              <highlight.icon className="w-6 h-6 text-indigo-300 mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-slate-100 mb-2">{highlight.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
