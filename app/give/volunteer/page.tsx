'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function VolunteerPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        skills: '',
        availability: '',
        experience: '',
        interests: [] as string[],
        message: '',
    });

    const volunteerOpportunities = [
        'Curriculum Review',
        'Grant Research',
        'Communications/Writing',
        'Social Media',
        'Graphic Design',
        'Video Production',
        'Web Development',
        'Data Analysis',
        'Event Planning',
        'Translation Services',
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Volunteer application submitted:', formData);
        // Form submission logic will go here
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

    const handleCheckboxChange = (opportunity: string) => {
        setFormData({
            ...formData,
            interests: formData.interests.includes(opportunity)
                ? formData.interests.filter((i) => i !== opportunity)
                : [...formData.interests, opportunity],
        });
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='container mx-auto px-4 py-16'>
                <div className='max-w-4xl mx-auto text-center mb-12'>
                    <div className='inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                        Volunteer With Us
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text text-transparent leading-tight'>
                        Share Your Skills, Change Lives
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed'>
                        Join our team of volunteers helping to expand career
                        education for incarcerated learners nationwide.
                    </p>
                </div>

                {/* Volunteer Opportunities Overview */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16'>
                    <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300'>
                        <div className='text-3xl font-bold text-amber-600 mb-2'>
                            Remote
                        </div>
                        <p className='text-gray-700'>
                            Contribute from anywhere in the world
                        </p>
                    </div>

                    <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300'>
                        <div className='text-3xl font-bold text-amber-600 mb-2'>
                            Flexible
                        </div>
                        <p className='text-gray-700'>
                            Choose projects that fit your schedule
                        </p>
                    </div>

                    <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300'>
                        <div className='text-3xl font-bold text-amber-600 mb-2'>
                            Impactful
                        </div>
                        <p className='text-gray-700'>
                            Directly support 210,000+ learners
                        </p>
                    </div>

                    <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300'>
                        <div className='text-3xl font-bold text-amber-600 mb-2'>
                            Fair-Chance
                        </div>
                        <p className='text-gray-700'>
                            We welcome justice-impacted volunteers
                        </p>
                    </div>
                </div>

                {/* Application Form */}
                <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
                    {/* Form */}
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                            Volunteer Application
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
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent'
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
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='phone'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Phone Number (Optional)
                                </label>
                                <input
                                    type='tel'
                                    id='phone'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='location'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Location (City, State) *
                                </label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder='e.g., Dallas, TX'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Areas of Interest * (Select all that apply)
                                </label>
                                <div className='grid grid-cols-2 gap-3'>
                                    {volunteerOpportunities.map(
                                        (opportunity) => (
                                            <label
                                                key={opportunity}
                                                className='flex items-center gap-2 text-sm'
                                            >
                                                <input
                                                    type='checkbox'
                                                    checked={formData.interests.includes(
                                                        opportunity
                                                    )}
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            opportunity
                                                        )
                                                    }
                                                    className='w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500'
                                                />
                                                <span className='text-gray-700'>
                                                    {opportunity}
                                                </span>
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor='availability'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Availability *
                                </label>
                                <select
                                    id='availability'
                                    name='availability'
                                    required
                                    value={formData.availability}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent'
                                >
                                    <option value=''>Select...</option>
                                    <option value='1-3 hours/week'>
                                        1-3 hours/week
                                    </option>
                                    <option value='4-6 hours/week'>
                                        4-6 hours/week
                                    </option>
                                    <option value='7-10 hours/week'>
                                        7-10 hours/week
                                    </option>
                                    <option value='10+ hours/week'>
                                        10+ hours/week
                                    </option>
                                    <option value='Project-based'>
                                        Project-based (flexible)
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor='experience'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Relevant Skills/Experience *
                                </label>
                                <textarea
                                    id='experience'
                                    name='experience'
                                    required
                                    rows={4}
                                    value={formData.experience}
                                    onChange={handleChange}
                                    placeholder='Tell us about your background, skills, and why you want to volunteer with CMTech...'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none'
                                ></textarea>
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Additional Information (Optional)
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Anything else you would like us to know?'
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors'
                            >
                                Submit Application
                            </button>

                            <p className='text-xs text-gray-500 mt-2'>
                                We will review your application and reach out
                                within 1-2 weeks. Note: Some roles may require
                                background checks.
                            </p>
                        </form>
                    </div>

                    {/* Volunteer Info */}
                    <div className='space-y-6'>
                        <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                What to Expect
                            </h3>
                            <div className='space-y-4'>
                                <div className='flex items-start gap-3'>
                                    <div className='w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                        <span className='text-amber-600 font-bold'>
                                            1
                                        </span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-900'>
                                            Application Review
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            We will review your skills and match
                                            you with opportunities
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                        <span className='text-amber-600 font-bold'>
                                            2
                                        </span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-900'>
                                            Orientation
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            Brief intro to CMTech's mission and
                                            approach
                                        </p>
                                    </div>
                                </div>

                                <div className='flex items-start gap-3'>
                                    <div className='w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                        <span className='text-amber-600 font-bold'>
                                            3
                                        </span>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-900'>
                                            Start Contributing
                                        </p>
                                        <p className='text-sm text-gray-600'>
                                            Begin making an impact on your own
                                            schedule
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                Fair-Chance Employer
                            </h3>
                            <p className='text-gray-700 mb-3'>
                                We believe in second chances. Justice-impacted
                                individuals are welcome to apply for volunteer
                                positions.
                            </p>
                            <p className='text-sm text-gray-600'>
                                Some roles may require background checks, but we
                                consider all applicants fairly and on an
                                individual basis.
                            </p>
                        </div>

                        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200'>
                            <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                Questions?
                            </h3>
                            <p className='text-gray-700 mb-4'>
                                Want to learn more about volunteer opportunities
                                before applying?
                            </p>
                            <Link
                                href='/contact'
                                className='inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors'
                            >
                                Contact Us
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
