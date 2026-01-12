'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
    currentPage?: 'home' | 'about' | 'courses' | 'give';
}

export default function Navigation({ currentPage }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50'>
            <nav className='container mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <Link href='/' className='flex items-center gap-4'>
                        <div className='flex flex-col'>
                            <span className='text-2xl md:text-3xl font-bold text-gray-900'>
                                CMTech
                            </span>
                            <span className='text-xs md:text-sm text-gray-600 leading-tight'>
                                The Cade Moore Polytechnic Institute
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-6'>
                        <Link
                            href='/'
                            className={`${
                                currentPage === 'home'
                                    ? 'text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:text-blue-700'
                            } transition-colors font-medium`}
                        >
                            Home
                        </Link>
                        <Link
                            href='/about'
                            className={`${
                                currentPage === 'about'
                                    ? 'text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:text-blue-700'
                            } transition-colors font-medium`}
                        >
                            About
                        </Link>
                        <Link
                            href='/courses'
                            className={`${
                                currentPage === 'courses'
                                    ? 'text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:text-blue-700'
                            } transition-colors font-medium`}
                        >
                            Courses
                        </Link>
                        <Link
                            href='/give'
                            className={`${
                                currentPage === 'give'
                                    ? 'text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:text-blue-700'
                            } transition-colors font-medium`}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className='md:hidden p-2 text-gray-700 hover:text-blue-700 transition-colors'
                        aria-label='Toggle menu'
                    >
                        {mobileMenuOpen ? (
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        ) : (
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className='md:hidden mt-4 pb-4 space-y-3 animate-fadeIn'>
                        <Link
                            href='/'
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${
                                currentPage === 'home'
                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                            } transition-colors`}
                        >
                            Home
                        </Link>
                        <Link
                            href='/about'
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${
                                currentPage === 'about'
                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                            } transition-colors`}
                        >
                            About
                        </Link>
                        <Link
                            href='/courses'
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${
                                currentPage === 'courses'
                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                            } transition-colors`}
                        >
                            Courses
                        </Link>
                        <Link
                            href='/give'
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-2 rounded-lg ${
                                currentPage === 'give'
                                    ? 'bg-blue-100 text-blue-700 font-semibold'
                                    : 'text-gray-700 hover:bg-gray-100'
                            } transition-colors`}
                        >
                            Get Involved
                        </Link>
                        <Link
                            href='/give/donate'
                            onClick={() => setMobileMenuOpen(false)}
                            className='block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all'
                        >
                            Donate Now
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
