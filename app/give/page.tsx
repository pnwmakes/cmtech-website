import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
    title: 'Get Involved - Partner, Volunteer, or Donate | CMTech',
    description:
        'Support prison learning through donations, corporate partnerships, volunteering, or sponsoring a Charter. Multiple ways to make an impact with CMTech.',
    openGraph: {
        title: 'Partner with CMTech - Support Prison Education',
        description:
            'Corporate partnerships, volunteer opportunities, and giving options to expand career education for incarcerated learners.',
        url: 'https://cmtech-website.netlify.app/give',
        images: ['/logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Get Involved with CMTech',
        description:
            'Partner, volunteer, or donate to expand career education for 210,000+ incarcerated learners.',
        images: ['/logo.png'],
    },
};

export default function GetInvolvedPage() {
    const waysToHelp = [
        {
            title: 'Donate',
            icon: '',
            description:
                'Give once or monthly to fund learner enrollment and course development',
            cta: 'Give Now',
            href: '/give/donate',
            color: 'green',
        },
        {
            title: 'Wishlist',
            icon: '',
            description:
                'Send tools, books, and supplies directly to support learners',
            cta: 'Shop Wishlist',
            href: '/give/wishlist',
            color: 'purple',
        },
        {
            title: 'Sponsor a Charter',
            icon: '',
            description:
                'Fund peer-led learning circles at a facility for a full year',
            cta: 'Become a Sponsor',
            href: '/give/charter-sponsor',
            color: 'blue',
        },
        {
            title: 'Volunteer',
            icon: '',
            description:
                'Contribute your time and skills to curriculum review, research, and more',
            cta: 'Apply to Volunteer',
            href: '/give/volunteer',
            color: 'amber',
        },
        {
            title: 'Start a Fundraiser',
            icon: '',
            description:
                'Rally your network and host a fundraising campaign for CMTech',
            cta: 'Get Started',
            href: '/give/fundraiser',
            color: 'pink',
        },
        {
            title: 'Corporate Giving',
            icon: '',
            description:
                'Partner with CMTech to meet CSR goals and connect with future skilled workers',
            cta: 'Partner With Us',
            href: '/give/corporate',
            color: 'indigo',
        },
    ];

    const corporateTiers = [
        {
            level: 'Apprentice Partner',
            amount: '$5,000',
            benefits: [
                'Logo on website partner page',
                'Quarterly impact reports',
                'Social media recognition',
            ],
        },
        {
            level: 'Journeyman Partner',
            amount: '$15,000',
            benefits: [
                'All Apprentice benefits',
                'Facility naming opportunity',
                'Annual learner showcase invitation',
                'Co-branded course materials',
            ],
        },
        {
            level: 'Master Partner',
            amount: '$50,000+',
            benefits: [
                'All Journeyman benefits',
                'Custom course development',
                'Executive site visits',
                'First access to hiring pipeline',
                'Board engagement opportunities',
            ],
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            green: 'from-green-50 to-green-100 border-green-200 hover:border-green-400',
            purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400',
            blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
            amber: 'from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400',
            pink: 'from-pink-50 to-pink-100 border-pink-200 hover:border-pink-400',
            indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 hover:border-indigo-400',
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='inline-block bg-blue-400/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                            Join the Movement
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            Your Support Builds Futures
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Fund real skills. Create real opportunities.
                        </p>

                        <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto'>
                            <p className='text-gray-700 text-lg leading-relaxed'>
                                Every contribution to CMTech goes directly
                                toward expanding career education for
                                incarcerated learners.{' '}
                                <strong className='text-blue-700'>
                                    We're a lean operation that prioritizes
                                    scalability
                                </strong>{' '}
                                — we stretch every dollar further than anyone
                                else in the field.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Give */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            Ways to Make an Impact
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto'>
                            Choose the approach that fits your skills, time, and
                            resources
                        </p>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {waysToHelp.map((way) => (
                                <Link
                                    key={way.title}
                                    href={way.href}
                                    className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group'
                                >
                                    <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                        {way.title}
                                    </h3>
                                    <p className='text-gray-700 mb-4 leading-relaxed'>
                                        {way.description}
                                    </p>
                                    <div className='text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2'>
                                        {way.cta} →
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Partnerships */}
            <section className='py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='text-center mb-12'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                                Corporate Partnership Opportunities
                            </h2>
                            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                                Partner with CMTech to meet annual CSR goals
                                while connecting with an audience of{' '}
                                <strong className='text-blue-700'>
                                    210,000+ future apprentices, skilled
                                    workers, and entrepreneurs
                                </strong>
                                .
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 gap-6'>
                            {corporateTiers.map((tier) => (
                                <div
                                    key={tier.level}
                                    className='bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300'
                                >
                                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                                        {tier.level}
                                    </h3>
                                    <div className='text-3xl font-bold text-blue-700 mb-6'>
                                        {tier.amount}
                                    </div>
                                    <ul className='space-y-3'>
                                        {tier.benefits.map((benefit, index) => (
                                            <li
                                                key={index}
                                                className='flex items-start gap-2 text-gray-700'
                                            >
                                                <span className='text-green-600 font-bold text-lg'>
                                                    ✓
                                                </span>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className='mt-12 text-center'>
                            <Link
                                href='/contact'
                                className='inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                            >
                                Explore Corporate Partnerships
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Opportunities */}
            <section className='bg-gray-100 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            Volunteer Your Skills
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto'>
                            Remote and in-person opportunities to support prison
                            learning
                        </p>

                        <div className='grid md:grid-cols-2 gap-6 mb-12'>
                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Curriculum Review
                                </h3>
                                <p className='text-gray-700 mb-2'>
                                    Trade professionals review course content
                                    for accuracy
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Time commitment: 5-10 hours
                                </p>
                            </div>

                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Grant Research
                                </h3>
                                <p className='text-gray-700 mb-2'>
                                    Research funding opportunities and summarize
                                    requirements
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Time commitment: 10-15 hours
                                </p>
                            </div>

                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Communications Support
                                </h3>
                                <p className='text-gray-700 mb-2'>
                                    Writing, design, or social media assistance
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Time commitment: Ongoing
                                </p>
                            </div>

                            <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Student Interns
                                </h3>
                                <p className='text-gray-700 mb-2'>
                                    Semester-long projects in marketing, program
                                    development, or research
                                </p>
                                <p className='text-sm text-gray-600'>
                                    Time commitment: One semester
                                </p>
                            </div>
                        </div>

                        <div className='bg-blue-50 rounded-xl p-8 border border-blue-200 text-center'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                How to Get Started
                            </h3>
                            <div className='grid md:grid-cols-4 gap-6 mb-6'>
                                <div>
                                    <h4 className='font-bold text-gray-900 mb-1 text-lg'>
                                        Apply
                                    </h4>
                                    <p className='text-sm text-gray-600'>
                                        Complete our volunteer interest form (5
                                        minutes)
                                    </p>
                                </div>
                                <div>
                                    <h4 className='font-bold text-gray-900 mb-1 text-lg'>
                                        Match
                                    </h4>
                                    <p className='text-sm text-gray-600'>
                                        We will connect you with opportunities
                                    </p>
                                </div>
                                <div>
                                    <h4 className='font-bold text-gray-900 mb-1 text-lg'>
                                        Onboard
                                    </h4>
                                    <p className='text-sm text-gray-600'>
                                        Quick orientation to CMTech mission
                                    </p>
                                </div>
                                <div>
                                    <div className='text-4xl mb-2'>✨</div>
                                    <h4 className='font-bold text-gray-900 mb-1'>
                                        Contribute
                                    </h4>
                                    <p className='text-sm text-gray-600'>
                                        Start making an impact
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm text-gray-600 mb-6'>
                                Note: Some roles may require background checks.
                                We consider all applicants fairly, including
                                those with prior convictions.
                            </p>
                            <Link
                                href='/give/volunteer'
                                className='inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300'
                            >
                                Apply to Volunteer
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Ready to Make a Difference?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        Connect with us to learn more about partnership,
                        volunteer, and giving opportunities.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/give/donate'
                            className='bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                        >
                            Donate Now
                        </Link>
                        <Link
                            href='/contact'
                            className='bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                        >
                            Contact Us
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
