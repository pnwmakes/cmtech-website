'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic will go here
        console.log('Form submitted:', formData);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
            <Navigation />

            {/* Hero Section */}
            <section className='container mx-auto px-4 py-16'>
                <div className='max-w-4xl mx-auto text-center mb-12'>
                    <div className='inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                        Get in Touch
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight'>
                        We're Here to Help
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed'>
                        Questions about CMTech? Want to bring our programs to
                        your facility? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact Options */}
                <div className='grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16'>
                    <Link
                        href='/contact/facility-partners'
                        className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 text-center group'
                    >
                        <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                            <svg
                                className='w-8 h-8 text-blue-600'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                                />
                            </svg>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 mb-2'>
                            Facility Partners & Educators
                        </h2>
                        <p className='text-gray-600 mb-3'>
                            Bring CMTech to your facility
                        </p>
                        <div className='text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300'>
                            Contact Us →
                        </div>
                    </Link>

                    <Link
                        href='/contact/family-friends'
                        className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 text-center group'
                    >
                        <div className='w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                            <svg
                                className='w-8 h-8 text-green-600'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                                />
                            </svg>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 mb-2'>
                            Family & Friends
                        </h2>
                        <p className='text-gray-600 mb-3'>
                            Help your loved one access CMTech
                        </p>
                        <div className='text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300'>
                            Contact Us →
                        </div>
                    </Link>

                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center'>
                        <div className='w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                            <svg
                                className='w-8 h-8 text-amber-600'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                />
                            </svg>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 mb-2'>
                            General Inquiries
                        </h2>
                        <p className='text-gray-600 mb-3'>
                            Use the form below for all other questions
                        </p>
                    </div>
                </div>

                {/* Main Contact Form */}
                <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                    {/* Contact Form */}
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                            Send Us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Your Name *
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Email Address *
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='category'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Topic *
                                </label>
                                <select
                                    id='category'
                                    name='category'
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                >
                                    <option value=''>Select a topic...</option>
                                    <option value='general'>
                                        General Inquiry
                                    </option>
                                    <option value='partnership'>
                                        Partnership Opportunity
                                    </option>
                                    <option value='media'>Media/Press</option>
                                    <option value='volunteer'>
                                        Volunteer Interest
                                    </option>
                                    <option value='donation'>Donations</option>
                                    <option value='curriculum'>
                                        Curriculum Questions
                                    </option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor='subject'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Subject *
                                </label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Message *
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                                    placeholder='Tell us how we can help...'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-6'>
                        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                Contact Information
                            </h3>
                            <div className='space-y-4'>
                                <div className='flex items-start gap-3'>
                                    <svg
                                        className='w-6 h-6 text-blue-600 mt-1'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                        />
                                    </svg>
                                    <div>
                                        <p className='font-semibold text-gray-900'>
                                            Email
                                        </p>
                                        <a
                                            href='mailto:info@CadeMoorePolytechnic.Institute'
                                            className='text-blue-600 hover:text-blue-700'
                                        >
                                            info@CadeMoorePolytechnic.Institute
                                        </a>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <svg
                                        className='w-6 h-6 text-blue-600 mt-1'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                        />
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                        />
                                    </svg>
                                    <div>
                                        <p className='font-semibold text-gray-900'>
                                            Mailing Address
                                        </p>
                                        <p className='text-gray-600'>
                                            PO Box #810570
                                            <br />
                                            Dallas, TX 75381
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                Response Time
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                We typically respond to inquiries within 1-2
                                business days. For urgent matters, please
                                indicate that in your subject line.
                            </p>
                            <p className='text-sm text-gray-600'>
                                Note: We receive a high volume of inquiries. If
                                you don't hear back within 3 business days,
                                please feel free to follow up.
                            </p>
                        </div>

                        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                Support Our Mission
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Your donation helps us expand career education
                                to more learners nationwide.
                            </p>
                            <Link
                                href='/give/donate'
                                className='inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors'
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

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
