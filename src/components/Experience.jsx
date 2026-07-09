import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
    {
        year: 'May 2024 – Present',
        role: 'Data Engineering Analyst',
        company: 'Optum',
        description: [
            'Supported end-to-end data engineering lifecycle including POCs, design, development, testing, deployment, and maintenance of healthcare data pipelines.',
            'Worked on IBM DataStage for building and managing ETL workflows to ingest and transform large-scale structured and semi-structured datasets.',
            'Utilized Apache Airflow for orchestration of complex data pipelines and job scheduling, ensuring timely and reliable data delivery.',
            'Handled production jobs and data movement on Unix servers, using shell scripting for file management, automation, and process control.',
            'Diagnosed data quality issues, conducted root cause analysis, implemented fixes, and maintained data audit trails for compliance.',
            'Applied CI/CD best practices using Azure DevOps for version control, testing, and deployment of data pipeline code.',
            'Monitored pipeline health using diagnostics tools to proactively detect and resolve data integrity issues.'
        ]
    },
    {
        year: 'April 2024 – Present',
        role: 'Lead Data Scientist',
        company: 'Cognizant',
        description: [
            'Developed an enterprise-level solution, integrating an AI-powered chatbot, improving metric accessibility for 300+ users and operational efficiency by 35%.',
            'Proficient in Python, Databricks, Azure DevOps, and Azure Data Factory for data operations and Model/application deployment.',
            'Built GPT-powered translation application, handling 1,000+ feedback entries per month, with 99% accuracy in language detection and storage.',
            'Designed and deployed an OpenAI-based summarization model to analyze sentiment and generate success stories.',
            'Built and optimized ETL pipelines to support data warehousing using SQL, Python, facilitating reliable data management.',
            'Automated processes and created CI/CD & ADF pipelines for data integration.',
            'Collaborated with 10+ cross-functional teams to develop scalable data products and integrate AI models, increasing analytics efficiency by 40%.'
        ]
    },
    {
        year: 'June 2023 – March 2024',
        role: 'AI/ML Engineer',
        company: 'Cognizant',
        description: [
            'Developed and deployed RAG-based LLM applications using GPT, implementing LoRA/QLoRA fine-tuning and advanced prompt engineering on GCP.',
            'Automated web deployment using GitHub and Flask with cloud services like Cloud Build.',
            'Utilized Generative AI, LLM models for 20+ AI use cases.',
            'Built and maintained data pipelines, CI/CD configurations, and RESTful APIs with Flask to serve ML models.',
            'Worked with a team of six engineers on innovative GenAI solutions and mentored new members.',
            'Implemented unit and manual testing to ensure application reliability.',
            'Developed a synthetic data generator and worked on RAG-based chat applications including Fashion Assistants.',
            'Developed an OCR application for document processing and parsing, improving data extraction accuracy.'
        ]
    },
    {
        year: 'February 2022 – August 2022',
        role: 'Data Engineer Intern',
        company: 'Cognizant',
        description: [
            'Worked on various projects involving data processing & analysis, & visualization using tools such as S3, EC2, Lambda, Redshift, etc.'
        ]
    },
    {
        year: 'November 2020 – January 2021',
        role: 'Data Science Intern',
        company: 'The Sparks Foundation',
        description: [
            'Developed machine learning models using Python and Jupyter Notebook, focusing on supervised learning through hands-on experience.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white-off mb-4">WORK EXPERIENCE</h2>
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
