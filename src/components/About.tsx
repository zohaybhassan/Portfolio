import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Designing intuitive and beautiful user interfaces',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering projects on time without compromising quality',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a Computer Science student at the National University of Computer and Emerging Sciences (FAST NUCES), Islamabad,
              passionate about software development and web technologies. With hands-on experience in front-end development through
              internships at Teresol Pvt. Ltd. and Aesthetic Dental Co, I've worked on building modern web applications using
              Vue.js, React, and various state management solutions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Beyond internships, I've contributed as a content writer, gaming guide writer, and digital operations officer for
              various organizations. I enjoy working on diverse projects from game development to full-stack web applications,
              constantly learning new technologies and best practices to build elegant, efficient solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                  <highlight.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
