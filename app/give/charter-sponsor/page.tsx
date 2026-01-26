import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
    title: 'Sponsor a Charter - Fund Peer-Led Learning | CMTech',
    description:
        'Sponsor a CMTech Charter and fund a year of peer-led learning circles at a correctional facility. Direct impact, measurable outcomes.',
};

export default function CharterSponsorPage() {
    const sponsorshipBenefits = [
        'Full year of peer-led learning circles at one facility',
        'Training for 2-3 incarcerated peer facilitators',
        'Course materials for 20-30 learners',
        'Quarterly impact reports with learner progress',
        'Facility naming recognition (if desired)',
        'Direct communication with peer facilitators',
        'Certificate of partnership',
        'Tax-deductible contribution',
    ];

    const impactMetrics = [
        {
            metric: '20-30',
            label: 'Learners Reached',
            description: 'Per charter, per year',
        },
        {
            metric: '85%',
            label: 'Pass Rate',
            description: 'Across all CMTech charters',
        },
        {
            metric: '2-3',
            label: 'Peer Leaders Trained',
            description: 'Creating pathways to leadership',
        },
        {
            metric: '50+',
            label: 'Study Sessions',
            description: 'Throughout the year',
        },
    ];

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='inline-block bg-blue-400/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                            High-Impact Partnership
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            Sponsor a CMTech Charter
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Fund a full year of peer-led learning circles at a
                            correctional facility. Transform lives through
                            education and leadership development.
                        </p>
                    </div>
                </div>
            </section>

            {/* What is a Charter */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            What is a CMTech Charter?
                        </h2>

                        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-12'>
                            <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                                A <strong>CMTech Charter</strong> is a peer-led
                                learning circle inside a correctional facility.
                                Incarcerated leaders who complete our intensive
                                training become Charter Facilitators—guiding
                                study groups through our curriculum, creating
                                accountability, building community, and
                                developing the next generation of leaders.
                            </p>
                            <p className='text-lg text-gray-700 leading-relaxed'>
                                Charters complement our digital courses
                                (available on Edovo tablets) by adding
                                in-person discussion, peer support, and
                                leadership development. Some facilities have
                                digital access only; others have both. Charters
                                create deep impact through relationship,
                                accountability, and shared purpose.
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 gap-6'>
                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                                    <svg
                                        className='w-6 h-6 text-blue-600'
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
                                    Peer-Led
                                </h3>
                                <p className='text-gray-700'>
                                    Incarcerated leaders facilitate study groups,
                                    creating authentic community and
                                    accountability
                                </p>
                            </div>

                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                                    <svg
                                        className='w-6 h-6 text-blue-600'
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
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Structured
                                </h3>
                                <p className='text-gray-700'>
                                    Curriculum-based sessions with clear goals,
                                    assessments, and completion certificates
                                </p>
                            </div>

                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                                    <svg
                                        className='w-6 h-6 text-blue-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M13 10V3L4 14h7v7l9-11h-7z'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Transformative
                                </h3>
                                <p className='text-gray-700'>
                                    Builds skills, confidence, and pathways to
                                    leadership for both learners and
                                    facilitators
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Impact */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Your Impact as a Charter Sponsor
                        </h2>

                        <div className='grid md:grid-cols-4 gap-6 mb-12'>
                            {impactMetrics.map((item, idx) => (
                                <div
                                    key={idx}
                                    className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 text-center'
                                >
                                    <div className='text-4xl font-bold text-blue-600 mb-2'>
                                        {item.metric}
                                    </div>
                                    <div className='text-lg font-semibold text-gray-900 mb-1'>
                                        {item.label}
                                    </div>
                                    <p className='text-sm text-gray-600'>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                                What Your Sponsorship Includes
                            </h3>
                            <div className='grid md:grid-cols-2 gap-4'>
                                {sponsorshipBenefits.map((benefit, idx) => (
                                    <div
                                        key={idx}
                                        className='flex items-start gap-3'
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
                                                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <span className='text-gray-700'>
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Levels */}
            <section className='bg-gradient-to-br from-slate-50 to-blue-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Sponsorship Investment
                        </h2>

                        <div className='bg-white rounded-2xl p-8 shadow-2xl border-2 border-blue-500 mb-8'>
                            <div className='text-center mb-6'>
                                <div className='text-5xl font-bold text-blue-600 mb-2'>
                                    $10,000
                                </div>
                                <p className='text-xl text-gray-700'>
                                    One-Year Charter Sponsorship
                                </p>
                            </div>
                            <p className='text-gray-700 text-center mb-6'>
                                Covers all costs to launch and sustain a charter
                                for one full year: facilitator training, course
                                materials, ongoing support, and impact reporting.
                            </p>
                            <div className='text-center'>
                                <Link
                                    href='/contact'
                                    className='inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                                >
                                    Become a Sponsor
                                </Link>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Multi-Year Commitment
                                </h3>
                                <p className='text-gray-700 mb-4'>
                                    Sponsor multiple years and see deeper,
                                    sustained impact as charters mature and
                                    expand.
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Contact us for multi-year pricing and
                                    benefits.
                                </p>
                            </div>

                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Co-Sponsor Option
                                </h3>
                                <p className='text-gray-700 mb-4'>
                                    Partner with another donor or organization to
                                    co-sponsor a charter at $5,000 each.
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Great for smaller organizations or
                                    collaborative giving.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                            Ready to Sponsor a Charter?
                        </h2>
                        <p className='text-xl text-gray-700 mb-8 max-w-2xl mx-auto'>
                            Let's talk about bringing a CMTech Charter to a
                            facility near you—or supporting one in a region of
                            high need.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link
                                href='/contact'
                                className='bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                            >
                                Contact Us to Sponsor
                            </Link>
                            <Link
                                href='/give/donate'
                                className='bg-white text-blue-700 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300'
                            >
                                Make a General Donation
                            </Link>
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
