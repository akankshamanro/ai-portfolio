import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Brain, ArrowUpRight, Code2 } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'AI Metric Engine',
        category: 'Data Engineering',
        description: 'Automated metric creation, tracking, and SLA monitoring using ADF, Databricks, and DevOps. Built a dashboard for real-time visibility achieving zero SLA breaches and increased accuracy.',
        tags: ['ADF', 'Databricks', 'Azure DevOps', 'Automation'],
        image: 'bg-gradient-to-br from-blue-900 to-slate-800'
    },
    {
        id: 2,
        title: 'Generative AI Translation Engine',
        category: 'Generative AI',
        description: 'Live enterprise project automating multilingual translation using LLMs. Integrated with ADF pipelines and Azure DevOps to handle real-time client requests.',
        tags: ['Azure OpenAI', 'LLMs', 'ADF', 'DevOps'],
        image: 'bg-gradient-to-br from-indigo-900 to-purple-900'
    },
    {
        id: 3,
        title: 'Data Migration: Collibra to Databricks',
        category: 'Data Engineering',
        description: 'Migrated enterprise datasets by building tables, mapping datasets, and creating transformation/validation logic, ensuring scalable storage in Databricks Lakehouse.',
        tags: ['Databricks', 'SQL', 'PySpark', 'ETL'],
        image: 'bg-gradient-to-br from-emerald-900 to-teal-900'
    },
    {
        id: 4,
        title: 'AI Query Conversion Tool',
        category: 'Generative AI',
        description: 'Tool to convert natural language or JSON queries into optimized SQL using LLMs. Implemented prompt rules, structured responses, and UI integration.',
        tags: ['Prompt Engineering', 'LLMs', 'SQL', 'Python'],
        image: 'bg-gradient-to-br from-slate-800 to-gray-800'
    },
    {
        id: 5,
        title: 'AI Automation Assistants',
        category: 'Generative AI',
        description: 'Built enterprise assistants for data validation, summarization, insights extraction, and document processing, deepening integration with business workflows.',
        tags: ['RAG', 'LangChain', 'Workflow Automation', 'NLP'],
        image: 'bg-gradient-to-br from-cyan-900 to-blue-900'
    }
];

const categories = ['All', 'Generative AI', 'Data Engineering', 'Machine Learning'];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(project =>
        filter === 'All' || project.category === filter
    );

    return (
        <section id="projects" className="py-24 bg-primary px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-6">Featured Projects</h2>
                    <div className="flex flex-wrap gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${filter === cat
                                        ? 'bg-accent text-primary font-bold'
                                        : 'bg-secondary text-slate-400 hover:text-white-off hover:bg-secondary/80'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors shadow-lg"
                            >
                                {/* Header / Image Placeholder */}
                                <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity`}>
                                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                                    {project.category === 'Generative AI' ? (
                                        <Brain size={48} className="text-white/20 z-10" />
                                    ) : (
                                        <Database size={48} className="text-white/20 z-10" />
                                    )}

                                    {/* Overlay Link */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                        <a href="#" className="p-3 bg-primary/80 rounded-full text-accent hover:bg-white-off hover:text-primary transition-colors">
                                            <ArrowUpRight size={24} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white-off group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary text-accent/80 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
