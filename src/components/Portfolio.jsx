import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileCode, MonitorPlay, Image } from 'lucide-react';

const portfolioItems = [
    {
        title: 'GitHub Repositories',
        description: 'Explore my source code for RAG pipelines and ML models.',
        icon: <Github size={32} className="text-white-off" />,
        action: 'View Profile',
        link: '#'
    },
    {
        title: 'Jupyter Notebooks',
        description: 'Deep dive into my data analysis and model training notebooks.',
        icon: <FileCode size={32} className="text-yellow-400" />,
        action: 'View Notebooks',
        link: '#'
    },
    {
        title: 'Demo Videos',
        description: 'Watch demonstrations of my GenAI assistants in action.',
        icon: <MonitorPlay size={32} className="text-red-400" />,
        action: 'Watch Demos',
        link: '#'
    },
    {
        title: 'Project Screenshots',
        description: 'Visual gallery of dashboards and application interfaces.',
        icon: <Image size={32} className="text-purple-400" />,
        action: 'View Gallery',
        link: '#'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-secondary/20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-4">PORTFOLIO</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
                    <p className="text-slate-400">Code repositories, demos, and visual assets.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioItems.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-primary/60 p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all text-center group cursor-pointer"
                        >
                            <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white-off mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{item.description}</p>
                            <span className="text-accent text-sm font-medium border-b border-accent/20 pb-0.5 group-hover:border-accent transition-colors">
                                {item.action}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
