import { Send } from 'lucide-react';
import gmailIcon from '/assets/gmail.svg';
import linkedinIcon from '/assets/linkedin.png';
import githubIcon from '/assets/github.svg';

export default function Contact() {
  const socialLinks = [
    {
      icon: gmailIcon,
      label: 'Email',
      value: 'zohaybhassan676@gmail.com',
      href: 'mailto:zohaybhassan676@gmail.com',
      iconBackground: 'bg-slate-800',
    },
    {
      icon: linkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/zohaybhassan',
      href: 'https://www.linkedin.com/in/zohaybhassan',
      iconBackground: 'bg-[#0a66c2]',
    },
    {
      icon: githubIcon,
      label: 'GitHub',
      value: 'github.com/zohaybhassan',
      href: 'https://github.com/zohaybhassan',
      iconBackground: 'bg-slate-800',
    },
  ];

  return (
    <section id="contact" className="section-shell section-base">
      <div className="page-container">
        <div className="mb-9">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-description text-sm lg:text-base">
            Get in touch to discuss career opportunities, potential collaborations, or professional inquiries.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card min-w-0 flex items-center gap-3 p-3 sm:p-4"
            >
              <div className={`shrink-0 w-12 h-12 flex items-center justify-center ${link.iconBackground} rounded-lg`}>
                <img src={link.icon} alt="" aria-hidden="true" className="w-10 h-10 object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-400 mb-1">{link.label}</p>
                <p className="whitespace-nowrap text-xs sm:text-sm font-medium text-slate-100">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="surface-card max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-100">Contact me</h3>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-5 mt-6">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" id="name" name="name" autoComplete="name" required className="form-field" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" id="email" name="email" autoComplete="email" required className="form-field" placeholder="your.email@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" required className="form-field" placeholder="Subject of your message" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="form-field resize-y" placeholder="Share your message or details of the opportunity."></textarea>
            </div>
            <button type="submit" className="button-primary">
              <Send className="w-4 h-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
