import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Programming Language',
        skills: ['Python', 'SQL', 'Pyspark', 'PyTorch', 'TensorFlow']
    },
    {
        title: 'Cloud / Tools',
        skills: ['AWS (EC2, Lambda)', 'Azure (ADF, DevOps)', 'GCP', 'Django', 'RESTful APIs', 'GitHub', 'Flask', 'Databricks', 'JIRA', 'Power BI', 'Docker', 'Git']
    },
    {
        title: 'Data Engineering',
        skills: ['Data Pipelines', 'Data Reporting & Analysis', 'REST API Creation', 'ETL & RAG Pipelines (FAISS, LangChain)', 'AI Workflow Automation']
    },
    {
        title: 'AI / ML',
        skills: ['Model Deployment & AI Integration', 'Generative AI', 'LLMs (GPT, Llama, Mistral)', 'RAG', 'LoRA/QLoRA Fine-tuning', 'Prompt Engineering (CoT, Few-Shot)', 'Agentic AI']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-4">SKILLS</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-secondary p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all hover:translate-y-[-2px] hover:shadow-xl"
                        >
                            <h3 className="text-lg font-bold text-accent mb-6 pb-2 border-b border-white/5">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-primary/60 text-slate-300 rounded text-sm hover:text-white-off transition-colors cursor-default border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
