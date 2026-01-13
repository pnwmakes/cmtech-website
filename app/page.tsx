'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';

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
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='home' />

            <main>
                {/* Hero Section - Professional & Dynamic */}
                <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-700 to-slate-600 text-white'>
                    {/* Animated Background Pattern */}
                    <div className='absolute inset-0 opacity-10'>
                        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent animate-pulse'></div>
                    </div>

                    <div className='relative container mx-auto px-6 py-20 md:py-32'>
                        <div className='max-w-4xl mx-auto text-center'>
                            {/* Logo with subtle animation */}
                            <div className='mb-8 animate-fadeIn'>
                                <Image
                                    src='/cmtech-logo.png'
                                    alt='CMTech - Learning that works'
                                    width={200}
                                    height={200}
                                    className='w-48 h-48 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-500'
                                    priority
                                />
                            </div>

                            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight'>
                                Transforming Lives Through
                                <span className='block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2'>
                                    Education & Leadership
                                </span>
                            </h1>

                            <p className='text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto'>
                                Providing free, peer-led skilled trades
                                education and reentry training to 210,000+
                                incarcerated learners across America
                            </p>

                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <Link
                                    href='/courses'
                                    className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105'
                                >
                                    Explore Our Programs
                                </Link>
                                <Link
                                    href='/give/donate'
                                    className='bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105'
                                >
                                    Support Our Mission
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Stats Section */}
                <section className='py-20 bg-gray-100'>
                    <div className='container mx-auto px-6'>
                        <div className='max-w-6xl mx-auto'>
                            <h2 className='text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900'>
                                Our Impact Across America
                            </h2>

                            <div className='grid md:grid-cols-3 gap-8'>
                                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group'>
                                    <div className='text-center'>
                                        <div className='text-5xl md:text-6xl font-bold text-blue-600 mb-3'>
                                            {mounted
                                                ? learnerCount.toLocaleString()
                                                : '210,000'}
                                            +
                                        </div>
                                        <div className='text-gray-700 font-semibold text-lg mb-2'>
                                            Learners Reached
                                        </div>
                                        <p className='text-sm text-gray-500'>
                                            Across 1,300+ correctional
                                            facilities
                                        </p>
                                    </div>
                                    <div className='mt-6 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full group-hover:scale-105 transition-transform duration-300'></div>
                                </div>

                                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group'>
                                    <div className='text-center'>
                                        <div className='text-5xl md:text-6xl font-bold text-blue-600 mb-3'>
                                            50+
                                        </div>
                                        <div className='text-gray-700 font-semibold text-lg mb-2'>
                                            Courses Available
                                        </div>
                                        <p className='text-sm text-gray-500'>
                                            Skilled trades & leadership programs
                                        </p>
                                    </div>
                                    <div className='mt-6 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full group-hover:scale-105 transition-transform duration-300'></div>
                                </div>

                                <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group'>
                                    <div className='text-center'>
                                        <div className='text-5xl md:text-6xl font-bold text-blue-600 mb-3'>
                                            100%
                                        </div>
                                        <div className='text-gray-700 font-semibold text-lg mb-2'>
                                            Justice-Impacted Leadership
                                        </div>
                                        <p className='text-sm text-gray-500'>
                                            Built by people who have been there
                                        </p>
                                    </div>
                                    <div className='mt-6 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full group-hover:scale-105 transition-transform duration-300'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Charter Program Section */}
                <section className='py-20 bg-gray-50'>
                    <div className='container mx-auto px-6'>
                        <div className='max-w-6xl mx-auto'>
                            <div className='grid md:grid-cols-2 gap-12 items-center'>
                                <div>
                                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                                        CMTech Charter Network
                                    </h2>
                                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                        Our peer-led charter program empowers
                                        incarcerated leaders to facilitate
                                        learning circles inside facilities.
                                        Charter facilitators guide study groups
                                        through our curriculum, creating
                                        accountability, community, and pathways
                                        to leadership development.
                                    </p>
                                    <Link
                                        href='/about'
                                        className='inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group'
                                    >
                                        Learn more about our approach
                                        <svg
                                            className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 5l7 7-7 7'
                                            />
                                        </svg>
                                    </Link>
                                </div>

                                <div className='grid grid-cols-2 gap-6'>
                                    <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200'>
                                        <div className='text-3xl font-bold text-blue-600 mb-2'>
                                            Active
                                        </div>
                                        <p className='text-sm text-gray-700'>
                                            Peer-led learning circles nationwide
                                        </p>
                                    </div>
                                    <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200'>
                                        <div className='text-3xl font-bold text-blue-600 mb-2'>
                                            100%
                                        </div>
                                        <p className='text-sm text-gray-700'>
                                            Facilitated by incarcerated leaders
                                        </p>
                                    </div>
                                    <div className='col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200'>
                                        <div className='text-3xl font-bold text-blue-600 mb-2'>
                                            Community Impact
                                        </div>
                                        <p className='text-sm text-gray-700'>
                                            Building skills, solidarity, and
                                            pathways to success
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Partners Section */}
                <section className='py-20 bg-gradient-to-br from-slate-700 to-blue-700 text-white'>
                    <div className='container mx-auto px-6'>
                        <div className='max-w-4xl mx-auto text-center'>
                            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                                Delivering Real Skills for Real Careers
                            </h2>
                            <p className='text-xl text-gray-300 leading-relaxed mb-12'>
                                We partner with Edovo to deliver our courses on
                                tablets in correctional facilities nationwide.
                                Every program is designed, built, and
                                facilitated by justice-impacted individuals who
                                understand the challenges and opportunities of
                                reentry.
                            </p>

                            <div className='grid md:grid-cols-3 gap-8 mb-12'>
                                <div className='text-center'>
                                    <div className='text-4xl font-bold text-cyan-400 mb-2'>
                                        1,300+
                                    </div>
                                    <p className='text-gray-300'>
                                        Partner Facilities
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <div className='text-4xl font-bold text-cyan-400 mb-2'>
                                        50+
                                    </div>
                                    <p className='text-gray-300'>
                                        States & Territories
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <div className='text-4xl font-bold text-cyan-400 mb-2'>
                                        24/7
                                    </div>
                                    <p className='text-gray-300'>
                                        Access to Learning
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <Link
                                    href='/courses'
                                    className='bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl'
                                >
                                    Explore Our Programs
                                </Link>
                                <Link
                                    href='/about'
                                    className='bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300'
                                >
                                    Partner With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
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
                        © 2026 CMTech. Real Skills for the Real World.
                    </p>
                </div>
            </footer>
        </div>
    );
}
