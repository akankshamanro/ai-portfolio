import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        school: 'SRM University',
        degree: 'Bachelor of Technology in Computer Science Engineering (IBM Specialization in Data Science & AI)',
        year: '2018-2022',
        grade: '9.1/10 CGPA'
    },
    {
        school: 'Maharaja Aggarsain Adarsh Public School',
        degree: 'High School (12th Standard)',
        year: '2017-2018',
        grade: '8.7/10 CGPA'
    }
];

const certifications = [
    'AWS Certified Solutions Architect - Associate Level',
    'IBM Certification in Data Science and Artificial Intelligence',
    'Prompt Engineering and LLM concepts (Generative AI, LoRA/QLoRA, RAG)'
];

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Narrative Bio Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-white-off">About Me</h2>
                        <div className="hidden md:block h-px bg-slate-700 flex-grow max-w-md" />
                    </div>

                    <div className="max-w-4xl text-slate-300 text-lg leading-relaxed space-y-6">
                        <p>
                            My name is <span className="text-accent font-semibold">Akanksha Manro</span>, a Data Scientist and Machine Learning Engineer specializing in building end-to-end AI systems, Generative AI solutions, and large-scale data engineering pipelines.
                        </p>
                        <p>
                            With <span className="text-white-off font-medium">experienced gained at Optum and Cognizant</span> (and prior internship experience), I work across the entire AI lifecycle — from data engineering to model building, LLM integration, automation pipelines, and production deployments. I am the go-to person for designing architecture for GenAI solutions and owning their delivery from concept to production.
                        </p>
                        <p>
                            My expertise lies in <span className="text-accent">Databricks, Azure Cloud, Python, PySpark, SQL, Azure Data Factory (ADF), Azure DevOps, CI/CD, and OpenAI/Azure OpenAI</span>. I have delivered multiple scalable, practical AI use cases for enterprises, led high-impact automation initiatives, and built intelligent assistants that integrate deeply with business workflows.
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-white-off mb-6 flex items-center gap-2">
                            <Award className="text-accent" /> CERTIFICATIONS
                        </h3>
                        <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 space-y-4 h-full">
                            {certifications.map((cert, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="mt-1 min-w-[4px] h-[4px] bg-accent rounded-full" />
                                    <p className="text-sm text-slate-300">{cert}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-white-off mb-6 flex items-center gap-2">
                            <GraduationCap className="text-accent" /> EDUCATION
                        </h3>
                        <div className="space-y-4">
                            {education.map((edu, i) => (
                                <div key={i} className="bg-secondary/50 p-5 rounded-xl border border-white/5">
                                    <h4 className="text-white-off font-bold">{edu.school}</h4>
                                    <p className="text-accent text-sm mb-1">{edu.degree}</p>
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>{edu.year}</span>
                                        <span>{edu.grade}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
