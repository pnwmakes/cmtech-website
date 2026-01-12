'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function PrisonStaffContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        facility: '',
        state: '',
        email: '',
        phone: '',
        message: '',
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
                        For Correctional Staff & Administrators
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight'>
                        Bring CMTech to Your Facility
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed'>
                        Partner with us to offer free, career-building education
                        to learners in your facility.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16'>
                    {/* Benefits */}
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                            Why Partner with CMTech?
                        </h2>
                        <ul className='space-y-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-600 font-bold text-xl'>
                                    ✓
                                </span>
                                <div>
                                    <strong className='text-gray-900'>
                                        100% Free for Your Facility
                                    </strong>
                                    <p className='text-gray-600 text-sm'>
                                        No cost to implement. No hidden fees.
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-600 font-bold text-xl'>
                                    ✓
                                </span>
                                <div>
                                    <strong className='text-gray-900'>
                                        Easy Implementation
                                    </strong>
                                    <p className='text-gray-600 text-sm'>
                                        Available on Edovo tablets or through
                                        peer-led charters
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-600 font-bold text-xl'>
                                    ✓
                                </span>
                                <div>
                                    <strong className='text-gray-900'>
                                        Proven Outcomes
                                    </strong>
                                    <p className='text-gray-600 text-sm'>
                                        85% pass rate, increased facility
                                        engagement
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-600 font-bold text-xl'>
                                    ✓
                                </span>
                                <div>
                                    <strong className='text-gray-900'>
                                        Career-Connected Content
                                    </strong>
                                    <p className='text-gray-600 text-sm'>
                                        Skilled trades that lead to real jobs
                                        upon release
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-600 font-bold text-xl'>
                                    ✓
                                </span>
                                <div>
                                    <strong className='text-gray-900'>
                                        Minimal Staff Time
                                    </strong>
                                    <p className='text-gray-600 text-sm'>
                                        Self-paced digital learning or peer-led
                                        facilitation
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-600 font-bold text-xl'>
                                    ✓
                                </span>
                                <div>
                                    <strong className='text-gray-900'>
                                        Support Recidivism Goals
                                    </strong>
                                    <p className='text-gray-600 text-sm'>
                                        Evidence-based career education reduces
                                        recidivism
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                            Request Information
                        </h2>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Full Name *
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
                                    htmlFor='title'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Title/Position *
                                </label>
                                <input
                                    type='text'
                                    id='title'
                                    name='title'
                                    required
                                    value={formData.title}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='facility'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Facility Name *
                                </label>
                                <input
                                    type='text'
                                    id='facility'
                                    name='facility'
                                    required
                                    value={formData.facility}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='state'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    State *
                                </label>
                                <input
                                    type='text'
                                    id='state'
                                    name='state'
                                    required
                                    value={formData.state}
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
                                    htmlFor='phone'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Phone Number
                                </label>
                                <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Message / Questions
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                    placeholder='Tell us about your facility and what programs you are looking for...'
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'
                            >
                                Submit Request
                            </button>
                        </form>

                        <p className='text-sm text-gray-500 mt-4 text-center'>
                            We typically respond within 1-2 business days
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='border-t border-gray-200 bg-white py-8'>
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
