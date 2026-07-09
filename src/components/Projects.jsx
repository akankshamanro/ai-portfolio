import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Brain, BookOpen, Briefcase, ArrowUpRight } from 'lucide-react';

const academicProjects = [
    {
        id: 'acad-1',
        title: 'Real-Time Vehicle Speed Detection & Number Plate Recognition',
        subtitle: 'Undergraduate Research Thesis',
        description: 'Built an end-to-end machine learning and computer vision pipeline using Python and OpenCV for video-based vehicle tracking and frame-by-frame speed estimation. Engineered localized image preprocessing pipelines and deployed deep learning models for character segmentation and high-accuracy optical character recognition (OCR) on dynamic license plates. Successfully defended technical architecture, model performance metrics, and validation methodologies before a faculty evaluation committee.',
        tags: ['Python', 'OpenCV', 'Computer Vision', 'OCR', 'Deep Learning'],
        icon: <BookOpen className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-indigo-900/50 to-slate-800/50'
    },
    {
        id: 'acad-2',
        title: 'Notepad with Speech Recognition Assistant',
        description: 'Developed an intelligent text editing application integrating speech-to-text conversion tools and Python background processing tools.',
        tags: ['Python', 'Speech Recognition', 'GUI', 'Speech-to-Text'],
        icon: <Brain className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-purple-900/50 to-slate-800/50'
    },
    {
        id: 'acad-3',
        title: 'Telegram QA Chatbot (IBM Watson Integration)',
        description: 'Designed and deployed a functional question-answering conversational agent connected directly to the Telegram API utilizing IBM Watson NLP services.',
        tags: ['IBM Watson', 'NLP', 'Chatbot', 'Telegram API'],
        icon: <Brain className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-blue-900/50 to-slate-800/50'
    },
    {
        id: 'acad-4',
        title: 'Customer Subscription Classification Model',
        description: 'Designed a predictive machine learning classifier in Python to determine customer conversion likelihoods using Scikit-Learn pipelines.',
        tags: ['Python', 'Scikit-Learn', 'Machine Learning', 'Classification'],
        icon: <Database className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-emerald-900/50 to-slate-800/50'
    },
    {
        id: 'acad-5',
        title: 'House Price Prediction Model (Regression)',
        description: 'Developed a supervised regression model handling missing value imputation, data cleaning, and feature correlation analysis.',
        tags: ['Python', 'Regression', 'Machine Learning', 'Data Cleaning'],
        icon: <Database className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-cyan-900/50 to-slate-800/50'
    },
    {
        id: 'acad-6',
        title: 'Interactive Typing Tutor Game & Desktop Music Player',
        description: 'Developed standalone GUI applications using Python, Tkinter, and Pygame, mastering UI event-driven architecture and object-oriented programming concepts.',
        tags: ['Python', 'Tkinter', 'Pygame', 'GUI', 'OOP'],
        icon: <BookOpen className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-slate-900/50 to-slate-800/50'
    }
];

const professionalProjects = [
    {
        id: 'prof-1',
        title: 'AI Metric Engine',
        description: 'Automated metric creation, tracking, and SLA monitoring. Used ADF + Databricks + DevOps + AI automation. Dashboard for real-time visibility. Achieved zero SLA breaches and increased accuracy.',
        tags: ['ADF', 'Databricks', 'Azure DevOps', 'Automation'],
        icon: <Database className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-blue-900/50 to-slate-850/50'
    },
    {
        id: 'prof-2',
        title: 'Generative AI Translation Engine (Live Project)',
        description: 'Automated multilingual translation using LLMs. Integrated with ADF pipelines and Azure DevOps. Handles real-time client requests and frequent updates. Complete ownership from design to deployment.',
        tags: ['Azure OpenAI', 'LLMs', 'ADF', 'DevOps'],
        icon: <Brain className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-indigo-900/50 to-slate-850/50'
    },
    {
        id: 'prof-3',
        title: 'Data Migration from Collibra to Databricks',
        description: 'Built tables, mapped datasets, and created transformation logic. Automated validation logic. Ensured scalable storage in Databricks Lakehouse.',
        tags: ['Databricks', 'SQL', 'PySpark', 'ETL'],
        icon: <Database className="text-accent" size={32} />,
        image: 'bg-gradient-to-br from-emerald-900/50 to-slate-850/50'
    }
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState('academic'); // 'academic' (default) or 'professional'

    const projectsToDisplay = activeTab === 'academic' ? academicProjects : professionalProjects;

    return (
        <section id="projects" className="py-24 bg-primary px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-6">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
                    
                    {/* Tabs */}
                    <div className="inline-flex p-1 bg-secondary rounded-xl border border-white/5">
                        <button
                            onClick={() => setActiveTab('academic')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                                activeTab === 'academic'
                                    ? 'bg-accent text-primary font-bold shadow-md'
                                    : 'text-slate-400 hover:text-white-off'
                            }`}
                        >
                            <BookOpen size={16} />
                            Academic Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('professional')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                                activeTab === 'professional'
                                    ? 'bg-accent text-primary font-bold shadow-md'
                                    : 'text-slate-400 hover:text-white-off'
                            }`}
                        >
                            <Briefcase size={16} />
                            Professional Projects
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {projectsToDisplay.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/40 transition-colors shadow-lg flex flex-col h-full"
                            >
                                {/* Card Graphic Container */}
                                <div className={`h-40 ${project.image} flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity border-b border-white/5`}>
                                    <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
                                    <div className="p-4 bg-secondary/80 rounded-full border border-white/10 z-10">
                                        {project.icon}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white-off group-hover:text-accent transition-colors mb-2 leading-tight">
                                        {project.title}
                                    </h3>
                                    {project.subtitle && (
                                        <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                                            {project.subtitle}
                                        </p>
                                    )}
                                    
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
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
