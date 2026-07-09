import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: 'May 2025 – Present',
        role: 'AI Data Engineer',
        company: 'UnitedHealth Group - Optum',
        description: [
            'Supported the end-to-end data engineering lifecycle for high-volume, large-scale healthcare systems, including development, testing, deployment, production support, maintenance, and monitoring of enterprise data pipelines.',
            'Architected an autonomous, LangChain-based Security Agent utilizing LLMs, conditional Python programmatic logic, and multi-node verification approval workflows to interpret cloud vulnerabilities and generate Terraform fixes, reducing remediation effort by ~60%.',
            'Engineered an AI-driven automated testing framework utilizing Python, Pandas, SQL, and Stored Procedures to traverse reporting payloads, ingest relational data, and automatically reconcile mismatches into validation reports.',
            'Developed and orchestrated robust ETL workflows using IBM DataStage and Apache Airflow for the ingestion, cleaning, and SQL-based structural transformation of high-volume structured and semi-structured healthcare datasets.',
            'Managed production data movement and jobs on Unix/Linux servers, utilizing Python scripts and shell scripting to automate monitoring, error diagnostics, handling, and recovery processes to improve operational reliability.',
            'Modernized application workflows and Airflow DAGs (including automated backup-cleaning and log-purging), deploying stable updates through existing GitHub Actions CI/CD pipelines across upgraded server environments.',
            'Contributed to a cloud modernization POC initiative using Azure Databricks and Azure DevOps to evaluate, strategize, and ensure 99.9% data delivery reliability when migrating legacy, server-based delivery jobs to scalable cloud infrastructure.',
            'Mentored team members on Generative AI and LLM API integration, drawing on prior hands-on expertise to guide adoption of new AI-driven tooling across the team.'
        ]
    },
    {
        year: 'Oct 2024 – Apr 2025',
        role: 'Data Scientist (Client-Facing Analytics)',
        company: 'Cognizant',
        description: [
            'Led the development and deployment of an enterprise analytics platform (Enterprise Metric Engine), writing optimized Python and SQL queries using Databricks and Azure Data Factory to improve metric accessibility for 300+ users and increase processing efficiency by ~35%.',
            'Implemented core supervised machine learning models, Python classification pipelines, clustering algorithms, and an AI-powered conversational chatbot to reduce manual metric discovery and reporting dependency across business teams.',
            'Designed and deployed OpenAI-based summarization and probabilistic modeling workflows using Python and SQL for automated sentiment analysis, log analysis, and insight extraction from unstructured enterprise feedback.',
            'Collaborated across 10+ cross-functional teams, translating complex model metrics into technical documentation, accelerating AI adoption, and improving data-driven decision-making efficiency by ~40%.',
            'Interviewed and evaluated candidates for team hiring, assessing technical proficiency, analytical reasoning, and role fit.'
        ]
    },
    {
        year: 'June 2023 – Oct 2024',
        role: 'AI/ML Engineer (Internal R&D Initiatives)',
        company: 'Cognizant',
        description: [
            'Built Generative AI agents and proof-of-concept applications on GCP using RAG architectures, utilizing LoRA/QLoRA fine-tuning and strict prompt engineering to maintain model data consistency, improve response relevance, and reduce hallucinations.',
            'Developed GPT-based text processing and translation pipelines handling 1,000+ structured feedback records monthly, executing Python-based text cleaning and automated language detection with ~99% accuracy in translation storage.',
            'Built synthetic data generators and AI-powered recommendation systems using Python to process catalog data, accelerate internal experimentation, and shorten model validation timelines.',
            'Developed an OCR-based document intelligence solution to extract data from unstructured documents and automatically transform them into highly structured SQL datasets.',
            'Contributed to system design, testing, and deployment within a 6-member engineering team supporting scalable AI solutions; mentored and guided incoming team members on project workflows and core technologies to support onboarding.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-4">PROFESSIONAL EXPERIENCE</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="border-l-2 border-slate-700 ml-3 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full border-4 border-slate-600 group-hover:border-accent group-hover:bg-accent transition-colors" />

                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                                    <h4 className="text-xl font-bold text-white-off group-hover:text-accent transition-colors">{exp.role}</h4>
                                    <span className="hidden sm:inline text-slate-500">|</span>
                                    <span className="text-accent font-medium">{exp.company}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 font-mono">
                                    <Calendar size={14} />
                                    <span>{exp.year}</span>
                                </div>
                                <ul className="space-y-2 text-slate-400 text-sm leading-relaxed list-disc pl-5 marker:text-slate-600 group-hover:marker:text-accent transition-colors">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
