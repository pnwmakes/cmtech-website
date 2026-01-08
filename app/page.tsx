'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
    const [learnerCount, setLearnerCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Animated counter for impact stats
    useEffect(() => {
        setMounted(true);
        const target = 210000;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setLearnerCount(target);
                clearInterval(timer);
            } else {
                setLearnerCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
            {/* Header */}
            <header className='border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50'>
                <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
                    <Link href='/' className='flex items-center gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-3xl font-bold text-gray-900'>
                                CMTech
                            </span>
                            <span className='text-sm text-gray-600 leading-tight'>
                                The Cade Moore Polytechnic Institute
                            </span>
                        </div>
                    </Link>
                    <div className='flex items-center gap-6'>
                        <Link
                            href='/'
                            className='text-blue-700 font-semibold hover:text-blue-800 transition-colors'
                        >
                            Home
                        </Link>
                        <Link
                            href='/about'
                            className='text-gray-700 hover:text-blue-700 transition-colors font-medium'
                        >
                            About
                        </Link>
                        <Link
                            href='/courses'
                            className='text-gray-700 hover:text-blue-700 transition-colors font-medium'
                        >
                            Courses
                        </Link>
                        <Link
                            href='/give'
                            className='text-gray-700 hover:text-blue-700 transition-colors font-medium'
                        >
                            Get Involved
                        </Link>
                        <Link
                            href='/give/donate'
                            className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-glow'
                        >
                            Donate Now
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <main className='container mx-auto px-4 py-16'>
                <div
                    className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
                        mounted
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    }`}
                >
                    {/* Main Headline */}
                    <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight'>
                        Real Skills. Real Careers.
                        <br />
                        <span className='text-amber-500'>
                            From Inside and Out.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className='text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed'>
                        Free skilled trades education and reentry training for
                        incarcerated learners —
                        <strong className='text-blue-700'>
                            {' '}
                            built by people who have been there.
                        </strong>
                    </p>

                    {/* Cheeky Demo Element - Live Counter */}
                    <div className='mb-12 p-8 bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300'>
                        <div className='grid md:grid-cols-3 gap-6'>
                            {/* Learner Counter - The Cheeky Part */}
                            <div className='text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200'>
                                <div className='text-5xl font-bold text-blue-600 mb-2'>
                                    {learnerCount.toLocaleString()}+
                                </div>
                                <div className='text-sm font-semibold text-blue-800 uppercase tracking-wide'>
                                    📚 Learners Served
                                </div>
                                <div className='text-xs text-blue-600 mt-2 italic'>
                                    (Watch it count! 👀)
                                </div>
                            </div>

                            <div className='text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200'>
                                <div className='text-5xl font-bold text-green-600 mb-2'>
                                    1,300+
                                </div>
                                <div className='text-sm font-semibold text-green-800 uppercase tracking-wide'>
                                    🏛️ Partner Facilities
                                </div>
                            </div>

                            <div className='text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border-2 border-amber-200'>
                                <div className='text-5xl font-bold text-amber-600 mb-2'>
                                    100%
                                </div>
                                <div className='text-sm font-semibold text-amber-800 uppercase tracking-wide'>
                                    �� Justice-Impacted Leadership
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charter Program Highlight */}
                    <div className='mb-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 max-w-4xl mx-auto text-left'>
                        <div className='flex items-start gap-4 mb-4'>
                            <div className='text-5xl'>🤝</div>
                            <div>
                                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                                    CMTech Charter Network
                                </h2>
                                <p className='text-gray-700 text-lg leading-relaxed'>
                                    Our peer-led charter program empowers
                                    incarcerated leaders to facilitate learning
                                    circles inside facilities. Charter
                                    facilitators guide study groups through our
                                    curriculum, creating accountability,
                                    community, and pathways to leadership
                                    development.
                                </p>
                            </div>
                        </div>
                        <div className='grid md:grid-cols-3 gap-4 mt-6'>
                            <div className='bg-white/70 rounded-lg p-4'>
                                <div className='text-2xl font-bold text-green-600 mb-1'>
                                    Active Charters
                                </div>
                                <p className='text-sm text-gray-600'>
                                    Peer-led learning circles nationwide
                                </p>
                            </div>
                            <div className='bg-white/70 rounded-lg p-4'>
                                <div className='text-2xl font-bold text-green-600 mb-1'>
                                    100% Peer-Led
                                </div>
                                <p className='text-sm text-gray-600'>
                                    Facilitated by incarcerated leaders
                                </p>
                            </div>
                            <div className='bg-white/70 rounded-lg p-4'>
                                <div className='text-2xl font-bold text-green-600 mb-1'>
                                    Community Impact
                                </div>
                                <p className='text-sm text-gray-600'>
                                    Building skills and solidarity
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-xl mb-12'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
                            🚀 Coming Soon: A Completely Rebuilt CMTech
                            Experience
                        </h2>
                        <p className='text-lg md:text-xl opacity-90 max-w-3xl mx-auto'>
                            We are building something special. A modern,
                            accessible, mobile-first platform that honors the
                            dignity of every learner while showcasing the
                            incredible impact of peer-led education in
                            correctional facilities across America.
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <Link
                            href='/courses'
                            className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2'
                        >
                            <span>🎓</span>
                            Explore Courses
                        </Link>
                        <Link
                            href='/about'
                            className='bg-white text-blue-700 border-2 border-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 hover:shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-2'
                        >
                            <span>🤝</span>
                            Become a Partner
                        </Link>
                        <Link
                            href='/give/donate'
                            className='bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2'
                        >
                            <span>💝</span>
                            Support Our Mission
                        </Link>
                    </div>

                    {/* Cheeky Easter Egg Message */}
                    <div className='mt-16 p-6 bg-amber-50 border-2 border-amber-300 rounded-xl max-w-2xl mx-auto'>
                        <p className='text-sm text-amber-800'>
                            <strong>👋 Hey team!</strong> This is just the
                            beginning. Wait until you see the full course
                            catalog, interactive charter network map, and the
                            learner testimonial section. We are going to blow
                            minds. 🤯
                        </p>
                        <p className='text-xs text-amber-600 mt-2'>
                            Built with Next.js 14 + TypeScript + Tailwind CSS |
                            Deployed on Vercel ⚡
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className='border-t border-gray-200 bg-white py-8 mt-16'>
                <div className='container mx-auto px-4 text-center'>
                    <p className='text-gray-600'>
                        <strong>
                            The Cade Moore Polytechnic Institute (CMTech)
                        </strong>
                    </p>
                    <p className='text-sm text-gray-500 mt-2'>
                        info@CadeMoorePolytechnic.Institute | PO Box #810570,
                        Dallas, TX 75381
                    </p>
                    <p className='text-xs text-gray-400 mt-4'>
                        © 2026 CMTech. Real Skills for the Real World. 🎯
                    </p>
                </div>
            </footer>
        </div>
    );
}
