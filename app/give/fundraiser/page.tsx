import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
    title: 'Start a Fundraiser - Rally Your Network | CMTech',
    description:
        'Host a fundraising campaign for CMTech. Turn your birthday, event, or milestone into an opportunity to support prison education.',
};

export default function FundraiserPage() {
    const fundraiserIdeas = [
        {
            type: 'Birthday Fundraiser',
            description:
                'Ask friends and family to donate to CMTech instead of gifts',
            goal: '$500-$2,000',
        },
        {
            type: 'Team Challenge',
            description:
                'Rally your workplace, running club, or community group',
            goal: '$1,000-$5,000',
        },
        {
            type: 'Memorial Fund',
            description:
                'Honor a loved one memory with education for the incarcerated',
            goal: 'Any amount',
        },
        {
            type: 'Student Project',
            description:
                'Service learning project or capstone for high school/college',
            goal: '$250-$1,000',
        },
        {
            type: 'Virtual Event',
            description:
                'Host a webinar, concert, or online auction for CMTech',
            goal: '$500-$10,000',
        },
        {
            type: 'Corporate Match',
            description:
                'Start a campaign and get your employer to match donations',
            goal: 'Doubles impact',
        },
    ];

    const steps = [
        {
            step: '1',
            title: 'Set Your Goal',
            description:
                'Decide how much you want to raise and set a timeline (30-90 days works well)',
        },
        {
            step: '2',
            title: 'Create Your Campaign',
            description:
                'We will set up a personal fundraising page or connect you with Facebook Fundraisers',
        },
        {
            step: '3',
            title: 'Share Your Story',
            description:
                'Tell your network why CMTech matters to you and invite them to join your impact',
        },
        {
            step: '4',
            title: 'Track Progress',
            description:
                'Watch donations roll in and celebrate milestones along the way',
        },
        {
            step: '5',
            title: 'Thank Your Donors',
            description:
                'We will help you acknowledge supporters and share the impact they made',
        },
    ];

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-pink-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='inline-block bg-pink-400/20 text-pink-200 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                            Peer-to-Peer Fundraising
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            Turn Your Passion Into Impact
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Rally your network to support skilled trades
                            education for incarcerated learners. Every
                            fundraiser creates opportunity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Host a Fundraiser */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Why Host a Fundraiser for CMTech?
                        </h2>

                        <div className='grid md:grid-cols-3 gap-8 mb-12'>
                            <div className='text-center'>
                                <div className='w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <svg
                                        className='w-8 h-8 text-pink-600'
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
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Amplify Your Impact
                                </h3>
                                <p className='text-gray-700'>
                                    One person can give $50. A network of 20
                                    friends can fund an entire course for
                                    learners.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <svg
                                        className='w-8 h-8 text-pink-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Raise Awareness
                                </h3>
                                <p className='text-gray-700'>
                                    Help your community understand the power of
                                    prison education and second chances.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <svg
                                        className='w-8 h-8 text-pink-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Celebrate Milestones
                                </h3>
                                <p className='text-gray-700'>
                                    Turn birthdays, weddings, or achievements
                                    into opportunities to give back.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fundraiser Ideas */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            Fundraiser Ideas
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto'>
                            Get inspired! Here are ways people like you have
                            raised funds for CMTech.
                        </p>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {fundraiserIdeas.map((idea, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-pink-500 hover:shadow-xl transition-all duration-300'
                                >
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                        {idea.type}
                                    </h3>
                                    <p className='text-gray-700 mb-4'>
                                        {idea.description}
                                    </p>
                                    <div className='bg-pink-50 rounded-lg px-3 py-2 inline-block'>
                                        <span className='text-sm font-semibold text-pink-700'>
                                            Typical Goal: {idea.goal}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className='bg-gradient-to-br from-slate-50 to-pink-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            How to Start Your Fundraiser
                        </h2>

                        <div className='space-y-6'>
                            {steps.map((item, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex items-start gap-4'
                                >
                                    <div className='w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                        <span className='text-2xl font-bold text-pink-600'>
                                            {item.step}
                                        </span>
                                    </div>
                                    <div className='flex-1'>
                                        <h3 className='text-xl font-bold text-gray-900 mb-2'>
                                            {item.title}
                                        </h3>
                                        <p className='text-gray-700'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Support & Resources */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            We Will Support You Every Step
                        </h2>

                        <div className='grid md:grid-cols-2 gap-6 mb-12'>
                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                    What We Provide
                                </h3>
                                <ul className='space-y-3'>
                                    <li className='flex items-start gap-2'>
                                        <svg
                                            className='w-6 h-6 text-green-600 flex-shrink-0 mt-0.5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        <span className='text-gray-700'>
                                            Personal fundraising page setup
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <svg
                                            className='w-6 h-6 text-green-600 flex-shrink-0 mt-0.5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        <span className='text-gray-700'>
                                            Social media graphics and templates
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <svg
                                            className='w-6 h-6 text-green-600 flex-shrink-0 mt-0.5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        <span className='text-gray-700'>
                                            Email templates and messaging
                                            guidance
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <svg
                                            className='w-6 h-6 text-green-600 flex-shrink-0 mt-0.5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        <span className='text-gray-700'>
                                            Impact stories and learner
                                            testimonials
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <svg
                                            className='w-6 h-6 text-green-600 flex-shrink-0 mt-0.5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        <span className='text-gray-700'>
                                            Dedicated support from our team
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <h3 className='text-xl font-bold text-gray-900 mb-4'>
                                    Popular Platforms
                                </h3>
                                <ul className='space-y-3'>
                                    <li className='flex items-start gap-3'>
                                        <div className='w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                            <span className='text-blue-600 font-bold'>
                                                FB
                                            </span>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-gray-900'>
                                                Facebook Fundraisers
                                            </p>
                                            <p className='text-sm text-gray-600'>
                                                Easy setup, built-in social
                                                sharing
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <div className='w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                            <span className='text-green-600 font-bold'>
                                                GF
                                            </span>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-gray-900'>
                                                GoFundMe Charity
                                            </p>
                                            <p className='text-sm text-gray-600'>
                                                Powerful platform, 0% fees
                                            </p>
                                        </div>
                                    </li>
                                    <li className='flex items-start gap-3'>
                                        <div className='w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                                            <span className='text-purple-600 font-bold'>
                                                CM
                                            </span>
                                        </div>
                                        <div>
                                            <p className='font-semibold text-gray-900'>
                                                Custom Page
                                            </p>
                                            <p className='text-sm text-gray-600'>
                                                We can create a dedicated page
                                                for you
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='bg-gradient-to-r from-pink-600 to-pink-700 text-white py-16'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Ready to Start Your Fundraiser?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        Let's set up your campaign and get you the resources you
                        need to succeed.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/contact'
                            className='bg-white text-pink-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                        >
                            Get Started
                        </Link>
                        <Link
                            href='/give/donate'
                            className='bg-pink-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-900 transition-all duration-300'
                        >
                            Make a Direct Donation
                        </Link>
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
