import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Database, Mail, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary px-6">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-blob" />
                <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-secondary/40 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Open to Opportunities in Canada & Remote
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-white-off">
                        Akanksha Manro
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-accent mb-6">
                        AI/ML Engineer
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8 text-slate-light text-base">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-accent" />
                            <span>Ottawa, ON, Canada</span>
                        </div>
                        <span className="hidden sm:inline text-slate-600">|</span>
                        <div className="flex items-center gap-2">
                            <Mail size={18} className="text-accent" />
                            <a href="mailto:akankshamanro2@gmail.com" className="hover:text-accent transition-colors">
                                akankshamanro2@gmail.com
                            </a>
                        </div>
                    </div>

                    <p className="text-slate-lighter text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
                        Specializing in building end-to-end AI systems, Generative AI solutions, and large-scale data engineering pipelines.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-transparent border border-accent text-accent hover:bg-accent/10 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02]"
                        >
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-accent text-primary hover:bg-accent/90 rounded-lg font-semibold transition-all hover:scale-[1.02]"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-slate-light">
                        <div className="flex items-center gap-2">
                            <Brain size={20} className="text-accent" />
                            <span>AI Agents</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code size={20} className="text-accent" />
                            <span>LLMOps</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Database size={20} className="text-accent" />
                            <span>Data Engineering</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual - Clean & Professional Code Editor Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex items-center justify-center p-10"
                >
                    <div className="relative w-full max-w-md aspect-square bg-secondary/50 rounded-2xl backdrop-blur-sm border border-white/5 p-8 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl" />

                        {/* Decorative Code/Data Block */}
                        <div className="space-y-4 font-mono text-sm text-slate-light">
                            <div className="flex gap-2 text-xs opacity-50 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <p><span className="text-accent">class</span> <span className="text-white-off">AIMLEngineer</span>:</p>
                            <p className="pl-4">def <span className="text-yellow-300">__init__</span>(self):</p>
                            <p className="pl-8">self.name = <span className="text-green-300">"Akanksha Manro"</span></p>
                            <p className="pl-8">self.role = <span className="text-green-300">"AI/ML Engineer"</span></p>
                            <p className="pl-8">self.location = <span className="text-green-300">"Ottawa, Canada"</span></p>
                            <p className="pl-8">self.experience = <span className="text-purple-300">3</span>  <span className="text-slate-500"># Years</span></p>
                            <p className="pl-4">&nbsp;</p>
                            <p className="pl-4">def <span className="text-yellow-300">focus</span>(self):</p>
                            <p className="pl-8"><span className="text-accent">return</span> [<span className="text-green-300">"LLMs"</span>, <span className="text-green-300">"RAG"</span>, <span className="text-green-300">"DataPipelines"</span>]</p>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-8 -bottom-8 bg-slate-800 p-4 rounded-lg border border-white/10 shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-accent/20 p-2 rounded-full">
                                <Brain size={24} className="text-accent" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Specialization</div>
                                <div className="text-white-off font-bold">Applied AI</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
