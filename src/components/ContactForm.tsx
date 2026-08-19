import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle, Sparkles, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { Button } from './ui/Button';
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);
  // formRef is kept but not strictly needed – you can remove it if you like
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    setUsingFallback(false);
    setIsLoading(true);

    // --- Validation ---
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    // --- EmailJS configuration ---
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '4e9kSItRZeT2Rz9mL';
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xn8bjdy';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xc25eec';

    // IMPORTANT: The keys here must match your EmailJS template variables exactly.
    // If your template uses "subject" instead of "title", change the key below.
    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject, // ← adapt this to your template's actual key
      message: formData.message,
    };

    // Local flag to track whether we fell back to mailto
    let fallbackUsed = false;

    try {
      // Attempt to send via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSent(true);
    } catch (err: any) {
      console.warn('EmailJS delivery failed, falling back to mailto client:', err);
      fallbackUsed = true;
      setUsingFallback(true);

      // Fallback: open the user's default email client
      const subject = encodeURIComponent(formData.subject || `New Portfolio Contact: from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`);
      window.location.href = `mailto:rawatakash1612@gmail.com?subject=${subject}&body=${body}`;

      setSent(true);
    } finally {
      setIsLoading(false);
      // Only clear the form if EmailJS succeeded (i.e., no fallback was used).
      // For fallback, we keep the data so the success message can still display the name.
      if (!fallbackUsed) {
        // Optionally, you could store the name in a separate state if you want to clear the form,
        // but for simplicity we keep the data until the user clicks "Send Another Message".
        // If you must clear it immediately, store the name in a ref before clearing.
        // We'll clear it on reset anyway.
        // setFormData({ name: '', email: '', subject: '', message: '' }); // <- not here
      }
    }
  };

  const handleReset = () => {
    setSent(false);
    setUsingFallback(false);
    setError(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-white/80 dark:bg-neutral-800/80 rounded-3xl p-8 md:p-10 shadow-2xl border border-neutral-200/50 dark:border-neutral-700/50 backdrop-blur-md"
    >
      {/* Visual background decoration */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-violet-500 animate-pulse" />
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Send a Message
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Fill out the form below or reach out directly. I'll get back to you as soon as possible.
            </p>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-800/30"
                >
                  <AlertCircle className="h-5 w-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-rose-700 dark:text-rose-300 font-medium">{error}</p>
                </motion.div>
              )}

              <div className="space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-violet-500 transition-colors">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-violet-500 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject / Title
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-violet-500 transition-colors">
                      <Tag className="h-5 w-5" />
                    </div>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                      placeholder="Collaboration opportunity, Job proposal, etc."
                      required
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      Your Message
                    </label>
                    <span className="text-xs text-neutral-400">
                      {formData.message.length} / 1000
                    </span>
                  </div>
                  <div className="relative group">
                    <div className="absolute top-4 left-4 pointer-events-none text-neutral-400 group-focus-within:text-violet-500 transition-colors">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project or vision..."
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Delivering message...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center py-10"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="relative p-4 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full text-white shadow-lg"
              >
                <CheckCircle2 className="h-12 w-12" />
              </motion.div>
            </div>

            <h3 className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-3">
              Message Sent!
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
              {usingFallback ? (
                <>
                  Opening your default email client. If it doesn't open automatically, you can email me directly at{' '}
                  <span className="font-semibold text-violet-600 dark:text-violet-400">
                    rawatakash1612@gmail.com
                  </span>
                  .
                </>
              ) : (
                <>
                  Thank you for reaching out,{' '}
                  <span className="font-semibold">{formData.name || 'friend'}</span>! I've received your message via
                  EmailJS and will get back to you shortly.
                </>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button
                variant="secondary"
                onClick={handleReset}
                className="px-8 py-3.5 rounded-2xl font-bold border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Send Another Message
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}