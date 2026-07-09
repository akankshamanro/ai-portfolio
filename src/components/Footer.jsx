import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white-off mb-2">Akanksha Manro</h3>
                        <p className="text-slate-400 text-sm">
                            Lead Data Scientist & ML Engineer
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-accent transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="mailto:akankshamanro1@gmail.com" className="text-slate-400 hover:text-accent transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center md:text-left text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Akanksha Manro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
