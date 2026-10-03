export default function Skills() {
  const skillCategories = [
    {
      category: 'Business Analysis',
      description: 'Connecting stakeholder needs with development teams.',
      skills: ['Requirements Analysis', 'Stakeholder Communication', 'Developer Collaboration'],
    },
    {
      category: 'UI Design & Delivery',
      description: 'Taking interface designs through approval and developer handoff.',
      skills: ['UI Design', 'Design Approval', 'Frontend & Backend Handoff'],
    },
    {
      category: 'Databases & Queries',
      description: 'Strong knowledge of MySQL and MongoDB, applied to query writing and data validation.',
      skills: ['MySQL', 'SQL Query Writing', 'MongoDB'],
      focus: 'MySQL: primary strength',
    },
    {
      category: 'Quality Assurance & Testing',
      description: 'Checking application behavior against business requirements.',
      skills: ['QA Testing', 'BA Testing', 'Quality Assurance'],
    },
    {
      category: 'Azure & AI Agents',
      description: 'Building chatbot agents and MCP server-client integrations.',
      skills: ['Microsoft Azure', 'Azure Foundry', 'Chatbot Agents', 'MCP Servers & Clients'],
    },
    {
      category: 'Tools & Collaboration',
      description: 'Practical experience with Jenkins and GitHub-based project work.',
      skills: ['Jenkins', 'Git', 'GitHub'],
    },
  ];

  const technicalBackground = ['C++', 'Java', 'Python', 'HTML & CSS', 'JavaScript', 'React', 'Vue.js'];

  return (
    <section id="skills" className="section-shell section-muted">
      <div className="page-container">
        <div className="mb-9">
          <h2 className="section-heading">Skills &amp; Expertise</h2>
          <p className="section-description">
            Business understanding, thoughtful design, and the technical skills to support delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div key={category.category} className="surface-card">
              <h3 className="text-lg font-semibold text-slate-100 mb-3">{category.category}</h3>
              <p className="text-sm leading-relaxed text-slate-400 mb-5">{category.description}</p>
              {category.focus && <p className="text-xs font-medium text-indigo-300 mb-4">{category.focus}</p>}
              <ul className="flex flex-wrap gap-2" aria-label={`${category.category} skills`}>
                {category.skills.map((skill) => <li key={skill} className="skill-tag">{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-slate-700/60 pt-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-2">Technical Background</h3>
          <p className="text-sm text-slate-400 mb-4">
            Foundations developed through my Computer Science degree and academic projects.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Technical background skills">
            {technicalBackground.map((skill) => <li key={skill} className="skill-tag">{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
