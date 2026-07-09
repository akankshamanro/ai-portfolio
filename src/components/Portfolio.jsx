import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-4">PORTFOLIO & PROFILES</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Explore my open-source code repositories, contributions, and professional network.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-2xl mx-auto">
                    {/* GitHub Card */}
                    <motion.a
                        href="https://github.com/akankshamanro"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 bg-secondary/80 p-8 rounded-2xl border border-white/5 hover:border-accent/40 transition-all flex flex-col items-center justify-between text-center group cursor-pointer shadow-lg"
                    >
                        <div className="bg-primary/60 p-4 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
                            <Github size={36} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white-off mb-3 group-hover:text-accent transition-colors">
                                GitHub Profile
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                View my projects, source code, and development contributions in ML, Data Engineering, and GenAI.
                            </p>
                        </div>
                        <span className="text-accent text-sm font-semibold flex items-center gap-1">
                            github.com/akankshamanro <ExternalLink size={14} />
                        </span>
                    </motion.a>

                    {/* LinkedIn Card */}
                    <motion.a
                        href="https://linkedin.com/in/akankshamanro"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex-1 bg-secondary/80 p-8 rounded-2xl border border-white/5 hover:border-accent/40 transition-all flex flex-col items-center justify-between text-center group cursor-pointer shadow-lg"
                    >
                        <div className="bg-primary/60 p-4 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
                            <Linkedin size={36} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white-off mb-3 group-hover:text-accent transition-colors">
                                LinkedIn Profile
                            </h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Connect with me, read my posts about artificial intelligence, and view my professional milestones.
                            </p>
                        </div>
                        <span className="text-accent text-sm font-semibold flex items-center gap-1">
                            linkedin.com/in/akankshamanro <ExternalLink size={14} />
                        </span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
