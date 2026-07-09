import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Database } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary px-6">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Adjusted blobs for Navy theme */}
                <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl opacity-40 animate-blob" />
                <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-3xl opacity-40 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-secondary/40 rounded-full blur-3xl opacity-40 animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
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
                        Available for Projects & Consulting
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-white-off">
                        Akanksha Manro
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-slate-light mb-6">
                        Lead Data Scientist | ML Engineer
                    </h2>

                    <p className="text-slate-lighter text-lg lg:text-xl mb-8 leading-relaxed max-w-lg">
                        I specialize in building end-to-end AI systems, Generative AI solutions, and large-scale data engineering pipelines.
                        Transforming complex data into intelligent business outcomes.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-transparent border border-accent text-accent hover:bg-accent/10 rounded-lg font-semibold flex items-center gap-2 transition-all"
                        >
                            View My Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-accent text-primary hover:bg-accent/90 rounded-lg font-semibold transition-all"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-slate-light">
                        <div className="flex items-center gap-2">
                            <Brain size={20} className="text-accent" />
                            <span>GenAI Specialist</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code size={20} className="text-accent" />
                            <span>ML Engineering</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Database size={20} className="text-accent" />
                            <span>Data Pipelines</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Visual - Clean & Professional */}
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
                            <p><span className="text-accent">class</span> <span className="text-white-off">AI_Engineer</span>:</p>
                            <p className="pl-4">def <span className="text-yellow-300">__init__</span>(self):</p>
                            <p className="pl-8">self.skills = [<span className="text-green-300">'GenAI'</span>, <span className="text-green-300">'MLOps'</span>, <span className="text-green-300">'Data Eng'</span>]</p>
                            <p className="pl-8">self.experience = <span className="text-purple-300">3.5</span> <span className="text-slate-500"># Years</span></p>
                            <p className="pl-4">&nbsp;</p>
                            <p className="pl-4">def <span className="text-yellow-300">build_solution</span>(self, problem):</p>
                            <p className="pl-8"><span className="text-accent">return</span> <span className="text-blue-300">deploy_to_production</span>(problem)</p>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-8 -bottom-8 bg-slate-800 p-4 rounded-lg border border-white/10 shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-green-500/20 p-2 rounded-full">
                                <Database size={24} className="text-green-400" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Database Migrations</div>
                                <div className="text-white-off font-bold">Databricks Expert</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
