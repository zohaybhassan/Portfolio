import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zohaybhassan676@gmail.com',
      href: 'mailto:zohaybhassan676@gmail.com',
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/zohaybhassan',
      href: 'https://www.linkedin.com/in/zohaybhassan',
      gradient: 'from-indigo-400 to-sky-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/zohaybhassan',
      href: 'https://github.com/zohaybhassan',
      gradient: 'from-slate-500 to-slate-700',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-4 rounded-full shadow-lg shadow-indigo-500/40"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Social Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>

                <div className="relative flex items-center gap-4 bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-indigo-500/40 transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className={`relative bg-gradient-to-br ${link.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1 relative z-10">
                    <p className="text-slate-500 text-sm mb-1">{link.label}</p>
                    <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                      {link.value}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Send className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className="relative group animate-scale-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 rounded-3xl blur opacity-15 group-hover:opacity-30 transition duration-1000 animate-pulse"></div>

            <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-500/8 to-transparent blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500/8 to-transparent blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Send me a message
                </h3>
                <p className="text-slate-400 mb-8">Let's create something amazing together</p>

                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
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
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-white placeholder-slate-600 transition-all duration-300 hover:border-slate-600"
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
                        className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-white placeholder-slate-600 transition-all duration-300 hover:border-slate-600"
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
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-white placeholder-slate-600 transition-all duration-300 hover:border-slate-600"
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
                      className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 text-white placeholder-slate-600 transition-all duration-300 resize-none hover:border-slate-600"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="relative group/btn inline-block">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl blur opacity-50 group-hover/btn:opacity-75 transition duration-300"></div>
                    <button
                      type="submit"
                      className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold shadow-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
