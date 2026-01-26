'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function FamilyFriendsContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        relationship: '',
        lovedOneName: '',
        facility: '',
        state: '',
        email: '',
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
                    <div className='inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                        For Family & Friends
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent leading-tight'>
                        Help Your Loved One Access CMTech
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed'>
                        Connect us with your loved one's facility or learn how
                        they can access our courses.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16'>
                    {/* How to Help */}
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                            How You Can Help
                        </h2>
                        <div className='space-y-6'>
                            <div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    Check if CMTech is Available
                                </h3>
                                <p className='text-gray-700'>
                                    CMTech courses are available on Edovo
                                    tablets in 1,300+ facilities nationwide. Ask
                                    your loved one to check their tablet for
                                    CMTech courses.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    Contact the Facility
                                </h3>
                                <p className='text-gray-700'>
                                    Reach out to the education coordinator or
                                    programming staff at your loved one's
                                    facility and ask them to bring CMTech
                                    courses to their facility.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    We Can Help You Connect
                                </h3>
                                <p className='text-gray-700'>
                                    Fill out the form and we will help you connect
                                    with the right people at the facility, or
                                    provide information your loved one can use
                                    to advocate for CMTech programs.
                                </p>
                            </div>

                            <div className='bg-blue-50 rounded-lg p-4 border border-blue-200'>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    Support CMTech
                                </h3>
                                <p className='text-gray-700 mb-3'>
                                    Every donation helps us reach more learners
                                    and expand our course offerings.
                                </p>
                                <Link
                                    href='/give/donate'
                                    className='inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors'
                                >
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                            Get in Touch
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
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='relationship'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Relationship to Learner *
                                </label>
                                <select
                                    id='relationship'
                                    name='relationship'
                                    required
                                    value={formData.relationship}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                >
                                    <option value=''>Select...</option>
                                    <option value='parent'>Parent</option>
                                    <option value='spouse'>
                                        Spouse/Partner
                                    </option>
                                    <option value='sibling'>Sibling</option>
                                    <option value='child'>Child</option>
                                    <option value='friend'>Friend</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor='lovedOneName'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Learner's Name (Optional)
                                </label>
                                <input
                                    type='text'
                                    id='lovedOneName'
                                    name='lovedOneName'
                                    value={formData.lovedOneName}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
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
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
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
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    Your Email Address *
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700 mb-1'
                                >
                                    How Can We Help?
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent'
                                    placeholder='Tell us what you need help with...'
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300'
                            >
                                Send Message
                            </button>
                        </form>

                        <p className='text-sm text-gray-500 mt-4 text-center'>
                            We typically respond within 1-2 business days
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className='max-w-4xl mx-auto'>
                    <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                            Frequently Asked Questions
                        </h2>
                        <div className='space-y-4'>
                            <div>
                                <h3 className='font-bold text-gray-900 mb-2'>
                                    How do I know if CMTech is available at my
                                    loved one's facility?
                                </h3>
                                <p className='text-gray-700'>
                                    Ask your loved one to check their Edovo
                                    tablet for CMTech courses. If they don't see
                                    our courses, fill out this form and we will
                                    help connect you with facility staff.
                                </p>
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-900 mb-2'>
                                    Are CMTech courses really free?
                                </h3>
                                <p className='text-gray-700'>
                                    Yes! All CMTech courses are 100% free for
                                    learners. We're funded by donations and
                                    grants, not by charging incarcerated people
                                    or their families.
                                </p>
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-900 mb-2'>
                                    What if the facility doesn't have Edovo
                                    tablets?
                                </h3>
                                <p className='text-gray-700'>
                                    We also offer peer-led CMTech Charters —
                                    in-person learning circles. Contact us and
                                    we will explore options for bringing CMTech to
                                    the facility.
                                </p>
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-900 mb-2'>
                                    Can I sponsor my loved one's education?
                                </h3>
                                <p className='text-gray-700'>
                                    While courses are free, you can support
                                    CMTech through a donation to help us reach
                                    more learners like your loved one.{' '}
                                    <Link
                                        href='/give/donate'
                                        className='text-blue-700 font-semibold hover:text-blue-800'
                                    >
                                        Donate here →
                                    </Link>
                                </p>
                            </div>
                        </div>
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
                        © 2026 CMTech. Real Skills for the Real World.
                    </p>
                </div>
            </footer>
        </div>
    );
}
