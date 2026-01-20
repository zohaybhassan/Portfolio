import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'i220800@nu.edu.pk',
      href: 'mailto:i220800@nu.edu.pk',
      color: 'hover:bg-red-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/zohaybhassan',
      href: 'https://www.linkedin.com/in/zohaybhassan',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/zohaybhassan',
      href: 'https://github.com/zohaybhassan',
      color: 'hover:bg-slate-800',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 bg-slate-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-700 ${link.color}`}
              >
                <div className="bg-slate-700 p-3 rounded-lg group-hover:bg-white transition-colors">
                  <link.icon className="w-6 h-6 text-emerald-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm mb-1">{link.label}</p>
                  <p className="text-white font-medium group-hover:text-white">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-white placeholder-slate-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
