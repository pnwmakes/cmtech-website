import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
    title: 'Corporate Partnerships - Invest in Second-Chance Talent | CMTech',
    description:
        'Partner with CMTech to meet CSR goals, build your talent pipeline, and connect with 210,000+ future skilled workers. Custom partnerships available.',
};

export default function CorporatePartnershipsPage() {
    const partnershipTiers = [
        {
            level: 'Apprentice Partner',
            amount: '$5,000/year',
            benefits: [
                'Logo on website partner page',
                'Quarterly impact reports',
                'Social media recognition (4x/year)',
                'Certificate of partnership',
                'Tax-deductible contribution',
            ],
            color: 'blue',
        },
        {
            level: 'Journeyman Partner',
            amount: '$15,000/year',
            benefits: [
                'All Apprentice Partner benefits',
                'Facility naming opportunity',
                'Annual learner showcase invitation',
                'Co-branded course materials',
                'Press release announcing partnership',
                'Speaking opportunity at CMTech event',
            ],
            color: 'indigo',
            featured: true,
        },
        {
            level: 'Master Partner',
            amount: '$50,000+/year',
            benefits: [
                'All Journeyman Partner benefits',
                'Custom course development in your industry',
                'Executive site visits to partner facilities',
                'First access to hiring pipeline',
                'Board engagement opportunities',
                'Dedicated account manager',
                'Quarterly strategy meetings',
            ],
            color: 'purple',
        },
    ];

    const whyPartner = [
        {
            title: 'Build Your Talent Pipeline',
            description:
                'Connect with 210,000+ motivated learners developing skills in skilled trades, technology, and leadership. Many will be job-ready upon release.',
            icon: 'users',
        },
        {
            title: 'Meet CSR Goals',
            description:
                'Demonstrate corporate social responsibility with measurable impact. Support workforce development, second chances, and community safety.',
            icon: 'target',
        },
        {
            title: 'Access Untapped Talent',
            description:
                'Justice-impacted workers have lower turnover, higher loyalty, and bring unique perspectives. They are a proven asset to forward-thinking companies.',
            icon: 'trophy',
        },
        {
            title: 'Strengthen Your Brand',
            description:
                'Align your company with innovation, fairness, and opportunity. Show stakeholders you invest in people and communities.',
            icon: 'star',
        },
    ];

    const customOptions = [
        {
            title: 'Industry-Specific Course Development',
            description:
                'We will create a custom curriculum aligned with your hiring needs - HVAC, logistics, manufacturing, IT, or other skilled trades.',
        },
        {
            title: 'Hiring Partnerships',
            description:
                'Get first access to our graduates. We will facilitate connections, background-friendly hiring, and reentry support.',
        },
        {
            title: 'Employee Engagement',
            description:
                'Involve your team through volunteer curriculum reviews, mentorship, or facility visits (where allowed).',
        },
        {
            title: 'Matching Gift Programs',
            description:
                'Amplify employee giving by matching donations to CMTech, doubling your impact.',
        },
        {
            title: 'Cause Marketing Campaigns',
            description:
                'Co-create campaigns that drive awareness and fundraising while highlighting your commitment to second chances.',
        },
        {
            title: 'Long-Term Strategic Partnerships',
            description:
                'Multi-year commitments with custom deliverables, dedicated account management, and board-level engagement.',
        },
    ];

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-indigo-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='inline-block bg-indigo-400/20 text-indigo-200 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                            Corporate Partnerships
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            Invest in People. Build Your Future Workforce.
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Partner with CMTech to meet CSR goals while
                            connecting with 210,000+ future apprentices, skilled
                            workers, and entrepreneurs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Partner */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Why Partner with CMTech?
                        </h2>

                        <div className='grid md:grid-cols-2 gap-8'>
                            {whyPartner.map((item, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300'
                                >
                                    <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4'>
                                        <svg
                                            className='w-6 h-6 text-indigo-600'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                    </div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                        {item.title}
                                    </h3>
                                    <p className='text-gray-700 leading-relaxed'>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Tiers */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            Partnership Levels
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto'>
                            Choose the level that aligns with your goals and
                            budget. All partnerships are tax-deductible.
                        </p>

                        <div className='grid md:grid-cols-3 gap-8'>
                            {partnershipTiers.map((tier, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                                        tier.featured
                                            ? 'border-indigo-500 ring-4 ring-indigo-100'
                                            : 'border-gray-200'
                                    } hover:shadow-2xl transition-all duration-300 relative`}
                                >
                                    {tier.featured && (
                                        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                                            <span className='bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                                                Most Popular
                                            </span>
                                        </div>
                                    )}
                                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                                        {tier.level}
                                    </h3>
                                    <div className='text-3xl font-bold text-indigo-600 mb-6'>
                                        {tier.amount}
                                    </div>
                                    <ul className='space-y-3 mb-6'>
                                        {tier.benefits.map((benefit, bIdx) => (
                                            <li
                                                key={bIdx}
                                                className='flex items-start gap-2'
                                            >
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
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Partnership Options */}
            <section className='bg-gradient-to-br from-slate-50 to-indigo-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Custom Partnership Options
                        </h2>

                        <div className='grid md:grid-cols-2 gap-6'>
                            {customOptions.map((option, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300'
                                >
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                        {option.title}
                                    </h3>
                                    <p className='text-gray-700'>
                                        {option.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Partner with Impact
                        </h2>

                        <div className='grid md:grid-cols-4 gap-6 mb-12'>
                            <div className='text-center'>
                                <div className='text-4xl font-bold text-indigo-600 mb-2'>
                                    210,000+
                                </div>
                                <div className='text-gray-700 font-semibold'>
                                    Learners Served
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='text-4xl font-bold text-indigo-600 mb-2'>
                                    1,300+
                                </div>
                                <div className='text-gray-700 font-semibold'>
                                    Facilities
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='text-4xl font-bold text-indigo-600 mb-2'>
                                    50+
                                </div>
                                <div className='text-gray-700 font-semibold'>
                                    States
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='text-4xl font-bold text-indigo-600 mb-2'>
                                    85%
                                </div>
                                <div className='text-gray-700 font-semibold'>
                                    Pass Rate
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-2xl p-8 text-center'>
                            <p className='text-xl mb-6'>
                                <strong>
                                    Companies that hire formerly incarcerated
                                    workers report:
                                </strong>
                            </p>
                            <div className='grid md:grid-cols-3 gap-6'>
                                <div>
                                    <div className='text-3xl font-bold mb-2'>
                                        13%
                                    </div>
                                    <p className='text-indigo-100'>
                                        Lower turnover rate
                                    </p>
                                </div>
                                <div>
                                    <div className='text-3xl font-bold mb-2'>
                                        Higher
                                    </div>
                                    <p className='text-indigo-100'>
                                        Employee loyalty
                                    </p>
                                </div>
                                <div>
                                    <div className='text-3xl font-bold mb-2'>
                                        Positive
                                    </div>
                                    <p className='text-indigo-100'>
                                        Performance reviews
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm text-indigo-200 mt-6'>
                                Source: Society for Human Resource Management
                                (SHRM)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Ready to Partner with CMTech?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        Let's design a partnership that aligns with your
                        company's values, goals, and hiring needs.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/contact'
                            className='bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                        >
                            Start a Conversation
                        </Link>
                        <a
                            href='mailto:info@CadeMoorePolytechnic.Institute'
                            className='bg-indigo-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-900 transition-all duration-300'
                        >
                            Email Us Directly
                        </a>
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
