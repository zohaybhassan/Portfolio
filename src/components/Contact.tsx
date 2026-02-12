import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zohaybhassan676@gmail.com',
      href: 'mailto:zohaybhassan676@gmail.com',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/zohaybhassan',
      href: 'https://www.linkedin.com/in/zohaybhassan',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/zohaybhassan',
      href: 'https://github.com/zohaybhassan',
      gradient: 'from-slate-600 to-slate-800',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 mx-auto mb-4 rounded-full shadow-lg shadow-cyan-500/50"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
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
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Glowing border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>

                {/* Card */}
                <div className="relative flex items-center gap-4 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Icon */}
                  <div className={`relative bg-gradient-to-br ${link.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 relative z-10">
                    <p className="text-slate-400 text-sm mb-1">{link.label}</p>
                    <p className="text-white font-medium group-hover:text-emerald-300 transition-colors">
                      {link.value}
                    </p>
                  </div>

                  {/* Arrow indicator */}
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
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse"></div>

            {/* Form container */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-indigo-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Corner glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Send me a message
                </h3>
                <p className="text-slate-400 mb-8">Let's create something amazing together</p>

                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-emerald-300 transition-colors">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-slate-500 transition-all duration-300 hover:border-slate-600"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-cyan-300 transition-colors">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-slate-500 transition-all duration-300 hover:border-slate-600"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-purple-300 transition-colors">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-slate-500 transition-all duration-300 hover:border-slate-600"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300 group-hover:text-pink-300 transition-colors">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 text-white placeholder-slate-500 transition-all duration-300 resize-none hover:border-slate-600"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="relative group inline-block">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <button
                      type="submit"
                      className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105"
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
