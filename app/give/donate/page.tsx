import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
    title: "Donate Now - Fund a Learner's Future | CMTech",
    description:
        "$50 covers one learner's full course enrollment. Your gift directly funds skilled trades education for incarcerated learners. No overhead bloat—just real courses leading to real careers.",
    openGraph: {
        title: 'Support CMTech - $50 Funds One Learner',
        description:
            'Make an impact today. Your donation provides free career education to incarcerated learners nationwide.',
        url: 'https://cmtech-website.netlify.app/give/donate',
        images: ['/logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Support CMTech - $50 Funds One Learner',
        description:
            'Make an impact today. Your donation provides free career education to incarcerated learners.',
        images: ['/logo.png'],
    },
};

export default function DonatePage() {
    const giftLadder = [
        {
            amount: 25,
            impact: 'Supplies one learner with course workbook and materials',
            icon: '📚',
        },
        {
            amount: 50,
            impact: "Covers one learner's full course enrollment",
            icon: '🎓',
        },
        {
            amount: 150,
            impact: 'Trains one peer leader to facilitate a Charter',
            icon: '👥',
        },
        {
            amount: 500,
            impact: 'Launches a new Charter at a facility',
            icon: '🚀',
        },
        {
            amount: 1000,
            impact: 'Funds curriculum development for one new course',
            icon: '📖',
        },
        {
            amount: 5000,
            impact: 'Sponsors a facility partnership for one year',
            icon: '🏛️',
        },
    ];

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='container mx-auto px-4 py-16 md:py-24'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                        Make an Impact Today
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent leading-tight'>
                        Fund a Future, Uplift Communities
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed'>
                        <strong className='text-green-700'>
                            $50 covers one learner's complete course enrollment.
                        </strong>
                    </p>

                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto'>
                        <p className='text-gray-700 text-lg leading-relaxed'>
                            Your gift directly funds skilled trades education
                            for incarcerated learners.{' '}
                            <strong className='text-gray-900'>
                                No overhead bloat or executive salaries.
                            </strong>{' '}
                            Just real courses leading to real careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gift Ladder */}
            <section className='bg-white py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            Your Impact at Every Level
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto'>
                            Choose an amount that works for you. Every dollar
                            creates opportunity.
                        </p>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {giftLadder.map((gift) => (
                                <div
                                    key={gift.amount}
                                    className='bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 cursor-pointer group'
                                >
                                    <div className='flex items-start justify-between mb-4'>
                                        <div className='text-4xl'>
                                            {gift.icon}
                                        </div>
                                        <div className='text-right'>
                                            <div className='text-3xl font-bold text-green-700'>
                                                ${gift.amount.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-gray-700 font-medium leading-relaxed'>
                                        {gift.impact}
                                    </p>
                                    <button className='mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors group-hover:scale-105 duration-300'>
                                        Give ${gift.amount}
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className='mt-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200 text-center'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                Give a Custom Amount
                            </h3>
                            <p className='text-gray-700 mb-6'>
                                Every contribution makes a difference—big or
                                small.
                            </p>
                            <button className='bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300'>
                                Choose Your Amount
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className='py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-200'>
                            <div className='flex items-start gap-4 mb-6'>
                                <div className='text-5xl'>💬</div>
                                <div>
                                    <p className='text-xl text-gray-700 italic leading-relaxed mb-4'>
                                        "I came in without a GED and I'm leaving
                                        with an electrical certification.
                                        Somebody believed in me enough to fund
                                        this. I won't waste it."
                                    </p>
                                    <div className='text-sm text-gray-600 font-medium'>
                                        — Devon R., Electrical Graduate
                                        <br />
                                        <span className='text-xs'>
                                            Ohio, 2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Monthly Giving */}
            <section className='bg-white py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                            Join the Builders Circle
                        </h2>
                        <p className='text-xl text-gray-700 mb-8 max-w-2xl mx-auto'>
                            Give monthly and fund consistent learner access all
                            year long. Recurring donors sustain our work and
                            maximize impact.
                        </p>

                        <div className='grid md:grid-cols-3 gap-6 mb-8'>
                            <div className='bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200'>
                                <div className='text-3xl font-bold text-amber-700 mb-2'>
                                    $10/mo
                                </div>
                                <p className='text-gray-700'>
                                    Supports learning materials for 2 learners
                                    each month
                                </p>
                            </div>
                            <div className='bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200'>
                                <div className='text-3xl font-bold text-amber-700 mb-2'>
                                    $25/mo
                                </div>
                                <p className='text-gray-700'>
                                    Enrolls 1 new learner every 2 months
                                </p>
                            </div>
                            <div className='bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-200'>
                                <div className='text-3xl font-bold text-amber-700 mb-2'>
                                    $50/mo
                                </div>
                                <p className='text-gray-700'>
                                    Fully funds one new learner every month
                                </p>
                            </div>
                        </div>

                        <button className='bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'>
                            Become a Monthly Donor
                        </button>
                    </div>
                </div>
            </section>

            {/* Employer Match */}
            <section className='py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                💼 Does Your Employer Match Donations?
                            </h3>
                            <p className='text-lg text-gray-700 mb-6'>
                                Many employers match charitable donations,
                                doubling your impact. Check with your HR team to
                                see if your company participates in matching
                                gift programs.
                            </p>
                            <a
                                href='#'
                                className='text-blue-700 font-semibold hover:text-blue-800 transition-colors'
                            >
                                Learn more about matching gifts →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Ways to Give */}
            <section className='bg-white py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Other Ways to Support
                        </h2>

                        <div className='grid md:grid-cols-3 gap-6'>
                            <Link
                                href='/give/wishlist'
                                className='bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 text-center'
                            >
                                <div className='text-5xl mb-4'>📦</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Shop Our Wishlist
                                </h3>
                                <p className='text-gray-700'>
                                    Send supplies directly to learners—paper,
                                    envelopes, and course materials
                                </p>
                            </Link>

                            <Link
                                href='/give/charter-sponsor'
                                className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center'
                            >
                                <div className='text-5xl mb-4'>🤝</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Sponsor a Charter
                                </h3>
                                <p className='text-gray-700'>
                                    Fund a peer-led learning circle for an
                                    entire year
                                </p>
                            </Link>

                            <Link
                                href='/give/volunteer'
                                className='bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 text-center'
                            >
                                <div className='text-5xl mb-4'>⏰</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Volunteer Your Skills
                                </h3>
                                <p className='text-gray-700'>
                                    Contribute your time and expertise to expand
                                    prison learning
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-gradient-to-r from-green-600 to-green-700 text-white py-16'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Questions About Giving?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        We're here to help. Reach out to learn more about how
                        your support changes lives.
                    </p>
                    <Link
                        href='/contact'
                        className='inline-block bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                    >
                        Contact Us
                    </Link>
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
