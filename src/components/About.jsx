import React from 'react';
import { GraduationCap, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Narrative Bio Section */}
                <div className="mb-20 text-center md:text-left">
                    <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-white-off">Professional Summary</h2>
                        <div className="hidden md:block h-px bg-slate-700 flex-grow max-w-md" />
                    </div>
                    
                    <div className="max-w-4xl text-slate-300 text-lg leading-relaxed space-y-6">
                        <p>
                            Graduate student and AI Data Engineer with <span className="text-accent font-semibold">3+ years of professional industry experience</span> specializing in Data Science, Machine Learning, and Generative AI systems. Proven track record in architecting autonomous AI agents, fine-tuning Large Language Models (LLMs), building Retrieval-Augmented Generation (RAG) workflows, and engineering scalable data pipelines. Expert in utilizing Python and SQL for core predictive modeling, data preprocessing, and automated relational data validation within enterprise environments.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-bold text-white-off mb-6 flex items-center gap-2">
                            <GraduationCap className="text-accent" /> EDUCATION
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-md">
                                <h4 className="text-white-off font-bold text-lg">University of Ottawa</h4>
                                <p className="text-accent text-sm mb-1 font-medium">Master of Computer Science (M.C.S.) — Applied Artificial Intelligence</p>
                                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                                    <span>Expected Graduation: December 2027</span>
                                </div>
                            </div>
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-md">
                                <h4 className="text-white-off font-bold text-lg">SRM University</h4>
                                <p className="text-accent text-sm mb-1 font-medium">Bachelor of Technology (B.Tech.) in Computer Science and Engineering (Specialization: Data Science and AI)</p>
                                <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                                    <span>Graduated: May 2022</span>
                                    <span>CGPA: 9.09 / 10 (First Class with Distinction)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership & Volunteering */}
                    <div>
                        <h3 className="text-xl font-bold text-white-off mb-6 flex items-center gap-2">
                            <Users className="text-accent" /> CAMPUS LEADERSHIP & VOLUNTEERING
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-md">
                                <h4 className="text-white-off font-bold text-lg">CodeChef Campus Chapter</h4>
                                <p className="text-accent text-sm mb-2 font-medium">Core Member & Organizer (SRM University)</p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Organized large-scale campus hackathons, competitive programming contests, and technical workshops for 200+ engineering students.
                                </p>
                            </div>
                            <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 shadow-md">
                                <h4 className="text-white-off font-bold text-lg">Codify Club</h4>
                                <p className="text-accent text-sm mb-2 font-medium">Founder & Lead Instructor (SRM University)</p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Established campus coding initiatives to build an active peer-to-peer developer community; formally mentored 100+ undergraduate peers in core Python and basic data structures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
