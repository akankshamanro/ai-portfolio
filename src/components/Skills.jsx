import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Core Programming',
        skills: ['Python', 'SQL', 'Java', 'Unix Shell Scripting']
    },
    {
        title: 'Data Science & ML',
        skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'PySpark', 'Supervised Learning', 'Predictive Modeling', 'Regression Analysis', 'Classification', 'Clustering']
    },
    {
        title: 'Generative AI & LLMOps',
        skills: ['Large Language Models (LLMs)', 'AI Agents', 'LangChain', 'RAG Frameworks', 'Prompt Engineering', 'LoRA/QLoRA Fine-Tuning', 'OpenAI API', 'IBM Watson']
    },
    {
        title: 'Data Engineering & Cloud',
        skills: ['Databricks', 'Apache Airflow', 'IBM DataStage', 'Relational Databases (RDBMS)', 'Azure Data Factory', 'AWS', 'Azure', 'GCP']
    },
    {
        title: 'DevOps & Tools',
        skills: ['Git', 'GitHub Actions', 'Azure DevOps', 'CI/CD pipelines']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-4">TECHNICAL SKILLS</h2>
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
