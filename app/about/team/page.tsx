import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';

export const metadata: Metadata = {
    title: 'Our Team & Board | CMTech Leadership',
    description:
        'Meet the justice-impacted leaders, staff, and board members driving CMTech\'s mission to provide free career education to 210,000+ incarcerated learners.',
    openGraph: {
        title: 'CMTech Leadership - Team & Board of Directors',
        description:
            'Justice-impacted leaders building the future of prison education.',
        url: 'https://cmtech-website.netlify.app/about/team',
        images: ['/logo.png'],
    },
};

export default function TeamPage() {
    const teamMembers = [
        {
            name: 'Team Member Name',
            role: 'Founder & Executive Director',
            bio: 'Brief bio highlighting their background, expertise, and connection to the mission. Include their journey and why they\'re passionate about this work.',
            image: '/team/placeholder.jpg', // Replace with actual image
        },
        {
            name: 'Team Member Name',
            role: 'Program Director',
            bio: 'Brief bio highlighting their background, expertise, and connection to the mission.',
            image: '/team/placeholder.jpg',
        },
        {
            name: 'Team Member Name',
            role: 'Curriculum Developer',
            bio: 'Brief bio highlighting their background, expertise, and connection to the mission.',
            image: '/team/placeholder.jpg',
        },
        // Add more team members as needed
    ];

    const boardMembers = [
        {
            name: 'Board Member Name',
            role: 'Board Chair',
            bio: 'Professional background and expertise they bring to CMTech.',
            affiliation: 'Professional Title/Organization',
        },
        {
            name: 'Board Member Name',
            role: 'Board Member',
            bio: 'Professional background and expertise they bring to CMTech.',
            affiliation: 'Professional Title/Organization',
        },
        {
            name: 'Board Member Name',
            role: 'Board Member',
            bio: 'Professional background and expertise they bring to CMTech.',
            affiliation: 'Professional Title/Organization',
        },
        {
            name: 'Board Member Name',
            role: 'Board Member',
            bio: 'Professional background and expertise they bring to CMTech.',
            affiliation: 'Professional Title/Organization',
        },
        // Add more board members as needed
    ];

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='about' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto text-center'>
                        <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                            Meet Our Team & Board
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                            Justice-impacted leaders building the future of
                            prison education
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='py-20 bg-gray-100'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='text-center mb-16'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                                Our Team
                            </h2>
                            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                                100% justice-impacted leadership. We build what
                                we know, because we've been there.
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className='bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200'
                                >
                                    {/* Placeholder for photo - replace with actual image */}
                                    <div className='w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center'>
                                        <span className='text-4xl text-blue-600 font-bold'>
                                            {member.name.charAt(0)}
                                        </span>
                                    </div>
                                    
                                    <div className='text-center'>
                                        <h3 className='text-xl font-bold text-gray-900 mb-2'>
                                            {member.name}
                                        </h3>
                                        <p className='text-blue-600 font-semibold mb-4'>
                                            {member.role}
                                        </p>
                                        <p className='text-gray-700 text-sm leading-relaxed'>
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Board Section */}
            <section className='py-20 bg-gray-50'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='text-center mb-16'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                                Board of Directors
                            </h2>
                            <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
                                Diverse expertise guiding CMTech's strategic
                                vision and growth
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 gap-6'>
                            {boardMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200'
                                >
                                    <div className='flex items-start gap-4'>
                                        <div className='w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0'>
                                            <span className='text-2xl text-blue-600 font-bold'>
                                                {member.name.charAt(0)}
                                            </span>
                                        </div>
                                        
                                        <div className='flex-1'>
                                            <h3 className='text-lg font-bold text-gray-900 mb-1'>
                                                {member.name}
                                            </h3>
                                            <p className='text-blue-600 font-semibold text-sm mb-2'>
                                                {member.role}
                                            </p>
                                            <p className='text-gray-600 text-sm italic mb-2'>
                                                {member.affiliation}
                                            </p>
                                            <p className='text-gray-700 text-sm leading-relaxed'>
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className='bg-gradient-to-br from-slate-700 to-blue-700 text-white py-16'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Want to Join Our Mission?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        We're always looking for passionate individuals to
                        support prison education
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/give/volunteer'
                            className='inline-block bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                        >
                            Volunteer With Us
                        </Link>
                        <Link
                            href='/contact'
                            className='inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300'
                        >
                            Get In Touch
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
