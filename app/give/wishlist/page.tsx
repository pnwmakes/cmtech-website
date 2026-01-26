import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
    title: 'Wishlist - Send Tools & Supplies | CMTech',
    description:
        'Support CMTech learners by purchasing supplies, books, and tools from our wishlist. Direct contributions that make learning possible.',
};

export default function WishlistPage() {
    const wishlistCategories = [
        {
            category: 'Educational Materials',
            items: [
                {
                    name: 'Trade Reference Books',
                    description:
                        'HVAC, plumbing, electrical, and carpentry manuals',
                    priority: 'High',
                },
                {
                    name: 'Graph Paper Notebooks',
                    description: 'For technical drawings and diagrams',
                    priority: 'Medium',
                },
                {
                    name: 'Scientific Calculators',
                    description: 'For trade math and calculations',
                    priority: 'High',
                },
                {
                    name: 'Workbook Printing',
                    description: 'Printing costs for course materials',
                    priority: 'High',
                },
            ],
        },
        {
            category: 'Tools & Equipment',
            items: [
                {
                    name: 'Basic Hand Tools',
                    description:
                        'Screwdrivers, pliers, wrenches for demonstrations',
                    priority: 'Medium',
                },
                {
                    name: 'Safety Equipment',
                    description: 'Safety glasses, gloves, hard hats',
                    priority: 'High',
                },
                {
                    name: 'Measuring Tools',
                    description: 'Tape measures, levels, calipers',
                    priority: 'Medium',
                },
            ],
        },
        {
            category: 'Technology',
            items: [
                {
                    name: 'Tablet Device Sponsorships',
                    description: 'Fund Edovo tablet access for learners',
                    priority: 'High',
                },
                {
                    name: 'Tablet Accessories',
                    description: 'Cases, screen protectors, chargers',
                    priority: 'Low',
                },
            ],
        },
        {
            category: 'Administrative & Office',
            items: [
                {
                    name: 'Postage & Shipping',
                    description: 'Mailing course materials to facilities',
                    priority: 'High',
                },
                {
                    name: 'Office Supplies',
                    description: 'Pens, pencils, paper, folders',
                    priority: 'Medium',
                },
                {
                    name: 'Printer Ink & Paper',
                    description: 'For course material production',
                    priority: 'Medium',
                },
            ],
        },
    ];

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High':
                return 'bg-red-100 text-red-700 border-red-200';
            case 'Medium':
                return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'Low':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            default:
                return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='give' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-purple-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <div className='inline-block bg-purple-400/20 text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                            Direct Impact Giving
                        </div>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            CMTech Wishlist
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Support learners with the tools, books, and supplies
                            they need to succeed in skilled trades education.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            How Wishlist Giving Works
                        </h2>

                        <div className='grid md:grid-cols-3 gap-8 mb-12'>
                            <div className='text-center'>
                                <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <span className='text-3xl font-bold text-purple-600'>
                                        1
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Choose Items
                                </h3>
                                <p className='text-gray-700'>
                                    Browse our wishlist and select items you'd
                                    like to contribute
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <span className='text-3xl font-bold text-purple-600'>
                                        2
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    Purchase & Send
                                </h3>
                                <p className='text-gray-700'>
                                    Buy items and ship directly to our mailing
                                    address
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <span className='text-3xl font-bold text-purple-600'>
                                        3
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    We Distribute
                                </h3>
                                <p className='text-gray-700'>
                                    We get supplies to learners and facilities
                                    that need them most
                                </p>
                            </div>
                        </div>

                        <div className='bg-blue-50 rounded-xl p-6 border border-blue-200'>
                            <h3 className='text-lg font-bold text-gray-900 mb-3'>
                                Shipping Address
                            </h3>
                            <p className='text-gray-700 mb-2'>
                                <strong>The Cade Moore Polytechnic Institute</strong>
                            </p>
                            <p className='text-gray-700 mb-2'>
                                PO Box #810570
                                <br />
                                Dallas, TX 75381
                            </p>
                            <p className='text-sm text-gray-600 mt-4'>
                                Please include a note with your name and email
                                so we can send you a thank you!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wishlist Categories */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            What We Need
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto'>
                            Items listed by priority. Every contribution makes a
                            difference!
                        </p>

                        <div className='space-y-8'>
                            {wishlistCategories.map((category, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'
                                >
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                        {category.category}
                                    </h3>
                                    <div className='space-y-3'>
                                        {category.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className='flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
                                            >
                                                <div className='flex-1'>
                                                    <h4 className='font-bold text-gray-900 mb-1'>
                                                        {item.name}
                                                    </h4>
                                                    <p className='text-sm text-gray-600'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(
                                                        item.priority
                                                    )} whitespace-nowrap`}
                                                >
                                                    {item.priority} Priority
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Giving */}
            <section className='bg-gradient-to-br from-slate-50 to-blue-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                            Prefer to Make a Financial Contribution?
                        </h2>
                        <p className='text-xl text-gray-700 mb-8'>
                            Cash donations allow us to purchase exactly what we
                            need, when we need it. Plus, we can often buy in
                            bulk for better value.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Link
                                href='/give/donate'
                                className='bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                            >
                                Make a Donation
                            </Link>
                            <Link
                                href='/contact'
                                className='bg-white text-blue-700 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300'
                            >
                                Ask Questions
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
