import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="flex items-center gap-2 text-white-off font-bold text-xl tracking-tighter hover:text-accent transition-colors">
                            <Terminal size={24} className="text-accent" />
                            <span>Akanksha.M</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-400 hover:text-accent hover:bg-white/5 px-3 py-2 rounded-md text-sm font-medium transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#" className="px-4 py-2 text-sm font-medium text-primary bg-accent rounded-md hover:bg-accent/90 transition-colors">
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-secondary border-b border-white/5 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-accent hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#" className="block w-full text-center px-4 py-3 mt-4 text-base font-medium text-primary bg-accent rounded-md hover:bg-accent/90 transition-colors">
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
