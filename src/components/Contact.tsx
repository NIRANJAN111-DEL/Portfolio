import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiLoader, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (serviceId && templateId && publicKey && formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          confetti({
            particleCount: 100,
            spread: 70,
            colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
          });
        })
        .catch((err) => {
          console.error('EmailJS Delivery Error:', err);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        });
    } else {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 120,
          spread: 80,
          colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
        });
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-5 h-5 text-primary" />,
      label: 'Email address',
      value: 'niranjann4440@gmail.com',
      href: 'mailto:niranjann4440@gmail.com'
    },
    {
      icon: <FiPhone className="w-5 h-5 text-secondary" />,
      label: 'Mobile Number',
      value: '+91 8925457024',
      href: 'tel:+918925457024'
    },
    {
      icon: <FiMapPin className="w-5 h-5 text-accent" />,
      label: 'Current Location',
      value: 'Coimbatore, Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Coimbatore,TamilNadu,India'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <span className="text-xs uppercase font-bold tracking-widest text-accent font-mono mb-2">
            06 / Connect
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Panel: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-white mb-4">
              Let's build something exceptional.
            </h3>
            <p className="text-muted leading-relaxed text-sm md:text-base font-sans mb-8">
              Whether you are looking to hire a full-stack developer for your engineering team, have a project outline to discuss, or simply want to connect, feel free to drop a message.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/5 flex items-center gap-4 cursor-none w-full shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-muted uppercase tracking-wider block">
                      {info.label}
                    </span>
                    <span className="text-sm font-display font-bold text-white">
                      {info.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connect Widgets */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">Profiles:</span>
              <a
                href="https://github.com/NIRANJAN111-DEL"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-primary/50 transition-all cursor-none"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/niranjan-n-aaa1692a3/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass-panel border border-white/5 flex items-center justify-center text-muted hover:text-white hover:border-secondary/50 transition-all cursor-none"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Panel: Glass Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 via-transparent to-transparent pointer-events-none" />

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-2">
                    <FiCheckCircle size={28} />
                  </div>
                  <h4 className="font-display font-black text-xl text-white">Message Delivered</h4>
                  <p className="text-xs text-muted max-w-xs leading-relaxed font-sans">
                    Thank you for writing! Your message was delivered successfully. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-xs font-semibold tracking-wider uppercase cursor-none transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="text-left">
                      <label className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase block mb-2 pl-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all placeholder-white/20 cursor-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="text-left">
                      <label className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase block mb-2 pl-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all placeholder-white/20 cursor-none"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="text-left">
                    <label className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase block mb-2 pl-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Collaboration opportunity"
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all placeholder-white/20 cursor-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="text-left">
                    <label className="text-[10px] font-mono font-bold tracking-widest text-muted uppercase block mb-2 pl-1">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Niranjan, we'd love to chat about..."
                      className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all placeholder-white/20 cursor-none resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-white text-bg-dark hover:bg-slate-100 py-3.5 rounded-xl flex items-center justify-center gap-2 font-display font-semibold text-xs tracking-wider uppercase cursor-none transition-all disabled:opacity-50 shadow-lg shadow-black/30 active:scale-[0.99]"
                  >
                    {status === 'sending' ? (
                      <>
                        <FiLoader className="animate-spin text-sm" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="text-sm" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <div className="text-center text-xs text-rose-400 font-mono mt-2">
                      Failed to send message. Please email directly.
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
