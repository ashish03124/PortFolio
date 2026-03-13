import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, MessageSquare, Code2, Flame, Terminal } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Switched to FormSubmit to eliminate the need for an Access Key!
      // The very first time you send a message, you will receive an Activation Email from FormSubmit.
      const response = await fetch("https://formsubmit.co/ajax/ashishgarud539@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Portfolio Message from ${formState.name}`,
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success === "true" || result.success === true) {
        setSubmitStatus("success");
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const codingProfiles = [
    { name: 'GitHub', url: 'https://github.com/ashish03124', icon: <Github className="w-6 h-6" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashishgarud/', icon: <Linkedin className="w-6 h-6" /> },
    { name: 'LeetCode', url: 'https://leetcode.com/u/ashishgarud539/', icon: <Code2 className="w-6 h-6" /> },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-demon-black transition-colors duration-300 relative">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-black dark:bg-demon-red mb-4"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white uppercase tracking-tighter">Transmission</h2>
          <p className="text-black dark:text-demon-flame font-black text-sm mt-2 tracking-widest uppercase">Reach the Hashira</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-extrabold text-black dark:text-white leading-tight">
              Ready to collaborate on a <span className="text-black dark:text-demon-red font-black italic underline">mission</span>?
            </h3>
            <p className="text-gray-800 dark:text-gray-400 font-bold text-lg transition-colors">
              Whether it's a new software project or a data science challenge, I'm always ready to sharpen my skills.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-black text-white dark:bg-demon-red/10 p-3 rounded-none md:rounded-lg dark:text-demon-red group-hover:bg-gray-800 dark:group-hover:bg-demon-red/20 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-none border-2 border-black dark:border-none">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Email</p>
                  <p className="text-black dark:text-white font-black tracking-wide">ashishgarud539@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-black text-white dark:bg-demon-red/10 p-3 rounded-none md:rounded-lg dark:text-demon-red group-hover:bg-gray-800 dark:group-hover:bg-demon-red/20 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-none border-2 border-black dark:border-none">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Mobile</p>
                  <p className="text-black dark:text-white font-black tracking-wide">+91-9067557760</p>
                </div>
              </div>
            </div>

            {/* Coding Profiles Mini Section */}
            <div className="pt-8 border-t border-demon-olive/5 dark:border-white/5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 font-bold">Summon via Profiles</p>
              <div className="flex gap-4">
                {codingProfiles.map((profile, idx) => (
                  <motion.a
                    key={idx}
                    href={profile.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 bg-white dark:bg-white/5 rounded-none md:rounded-full text-black dark:text-gray-400 hover:text-gray-500 transition-all border-2 border-black dark:border-white/10 dark:hover:text-demon-red shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none dark:hover:shadow-none"
                    title={profile.name}
                  >
                    {profile.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-demon-charcoal p-8 md:p-10 rounded-none md:rounded-3xl border-2 border-black dark:border-white/5 relative group overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-5 group-hover:opacity-20 transition-opacity">
              <MessageSquare className="w-32 h-32 text-black dark:text-demon-red" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label className="block text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Inosuke Hashibira"
                  className="w-full bg-white dark:bg-demon-charcoal border-2 border-black dark:border-white/10 rounded-none md:rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:border-black dark:focus:border-demon-red/50 focus:outline-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none dark:focus:shadow-none"
                />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-400 text-xs uppercase tracking-widest font-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="boar@slayer.com"
                  className="w-full bg-white dark:bg-demon-charcoal border-2 border-black dark:border-white/10 rounded-none md:rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:border-black dark:focus:border-demon-red/50 focus:outline-none transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none dark:focus:shadow-none"
                />
              </div>
              <div>
                <label className="block text-gray-800 dark:text-gray-400 text-xs uppercase tracking-widest font-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="How do I join the Demon Slayer Corps?"
                  className="w-full bg-white dark:bg-demon-charcoal border-2 border-black dark:border-white/10 rounded-none md:rounded-xl px-4 py-4 text-black dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-700 focus:border-black dark:focus:border-demon-red/50 focus:outline-none transition-all resize-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none dark:focus:shadow-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full ${isSubmitting ? 'bg-gray-600' : 'bg-black hover:bg-gray-800 dark:bg-demon-red dark:hover:bg-red-700'} text-white font-bold py-4 rounded-none md:rounded-xl flex items-center justify-center space-x-2 border-2 border-transparent dark:border-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all dark:shadow-[0_0_20px_rgba(185,28,28,0.3)] dark:hover:shadow-[0_0_30px_rgba(185,28,28,0.5)]`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="w-5 h-5" />}
              </motion.button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-300 dark:border-green-800 rounded-lg text-center font-bold">
                  Message sent successfully! I will reach out soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-300 dark:border-red-800 rounded-lg text-center font-bold">
                  Failed to send message. Please ensure your Access Key is set.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-demon-black border-t-2 border-black dark:border-t dark:border-white/5 relative transition-colors">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8 text-gray-500">
          <a href="https://github.com/ashish03124" className="hover:text-demon-red transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/ashishgarud/" className="hover:text-demon-red transition-colors">LinkedIn</a>
        </div>
        <p className="text-gray-600 dark:text-gray-500 text-sm tracking-widest uppercase">
          © 2026 Ashish Garud. All Rights Reserved.
          <br />
          <span className="text-[10px] mt-2 block italic opacity-50">"Protect the users, slay the bugs."</span>
        </p>
      </div>
    </footer>
  );
};

export { Contact, Footer };
