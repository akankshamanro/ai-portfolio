import React from 'react';
import { Mail, Linkedin, Github, Instagram, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-12 text-center">Get In Touch</h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Info Card */}
                    <div className="bg-secondary p-8 rounded-2xl border border-white/5 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white-off mb-6">Let's Connect</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                I am available for freelance work, consulting, or full-time opportunities.
                                Whether you have a question about GenAI or just want to say hi, my inbox is open!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/50 text-accent rounded-lg">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500">Email</div>
                                        <a href="mailto:akankshamanro1@gmail.com" className="text-white-off font-medium hover:text-accent transition-colors">
                                            akankshamanro1@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/50 text-accent rounded-lg">
                                        <Linkedin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500">LinkedIn</div>
                                        <a href="#" className="text-white-off font-medium hover:text-accent transition-colors">
                                            /in/akankshamanro
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="text-sm text-slate-500 mb-4">Connect on Socials</div>
                            <div className="flex gap-4">
                                <a href="#" className="p-3 bg-primary/50 rounded-lg text-slate-400 hover:text-white hover:bg-accent/20 transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-3 bg-primary/50 rounded-lg text-slate-400 hover:text-white hover:bg-accent/20 transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="p-3 bg-primary/50 rounded-lg text-slate-400 hover:text-white hover:bg-accent/20 transition-all">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6 bg-secondary/50 p-8 rounded-2xl border border-white/5">
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white-off focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-slate-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white-off focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-slate-600"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white-off focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-slate-600"
                                placeholder="Hello! I'd like to discuss a project..."
                            ></textarea>
                        </div>
                        <button className="w-full py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
