import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
    title: '50+ Free Courses - Career Training & Leadership | CMTech',
    description:
        'From HVAC to AI, carpentry to financial planning. CMTech offers 50+ free skilled trades courses for incarcerated learners. 100% tuition-free career education.',
    openGraph: {
        title: 'CMTech Courses - Free Career Training Behind Bars',
        description:
            'HVAC, Plumbing, Electrical, AI, and more. 50+ free courses available on Edovo tablets in 1,300+ facilities nationwide.',
        url: 'https://cmtech-website.netlify.app/courses',
        images: ['/logo.png'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CMTech: 50+ Free Career Training Courses',
        description:
            'From HVAC to AI. Free skilled trades education for incarcerated learners in 1,300+ facilities.',
        images: ['/logo.png'],
    },
};

export default function CoursesPage() {
    const courses = [
        {
            id: 1,
            title: 'Artificial Intelligence Prompt Design: Words to Move Mountains',
            category: 'Technology',
            icon: '',
            description:
                'This course introduces incarcerated learners to AI prompt generation. While current employees struggle to learn AI skills between work and family obligations, students can rely on our course to help them understand how to use AI tools to forge their path forward. Learners will enter the workforce with skills that employers desperately need but often cannot evaluate, creating competitive advantage in interviews and job performance.',
            color: 'purple',
        },
        {
            id: 2,
            title: 'Building Fiscal Independence: From Reentry to Retirement',
            category: 'Life Skills',
            icon: '',
            description:
                'This comprehensive financial education course provides formerly incarcerated individuals with practical strategies for building wealth and achieving long-term financial independence. Through thirteen structured lessons, students learn to navigate reentry financial challenges, build credit and banking relationships, develop multiple income streams, and create investment portfolios that generate generational wealth.',
            color: 'green',
        },
        {
            id: 3,
            title: 'Basics of Consumer Electronics Repair',
            category: 'Technical Trades',
            icon: '',
            description:
                "This course provides a foundation for lifelong learning and career growth in electronics repair. Electronics repair combines technical challenge, practical problem-solving, and customer service in a field that makes a real difference in people's lives. Electronic repairpersons restore communication, preserve memories, and extend device life in an environmentally responsible way.",
            color: 'blue',
        },
        {
            id: 4,
            title: 'HVAC: A Pre-Apprenticeship Lecture Series',
            category: 'Skilled Trades',
            icon: '',
            description:
                'This lecture series provides a complete foundation in heating, ventilation, air conditioning, and refrigeration principles, designed specifically for incarcerated learners. This course covers critical topics including heating systems and boilers, piping and ductwork installation, refrigeration cycles and equipment, air conditioning systems, electrical controls, and industry safety standards.',
            color: 'blue',
        },
        {
            id: 5,
            title: 'Plumbing Concepts: Learn to Become a More Competitive Apprentice',
            category: 'Skilled Trades',
            icon: '',
            description:
                "One of CMTech's most popular courses, this comprehensive plumbing program covers everything from basic concepts to advanced systems. Learners gain hands-on knowledge of piping, fixtures, drainage systems, and water supply while developing the skills to become competitive apprentices upon release. Features real-world scenarios and reentry guidance.",
            color: 'blue',
        },
        {
            id: 6,
            title: 'Electrical Fundamentals for the Trades',
            category: 'Skilled Trades',
            icon: '',
            description:
                'Master the essential concepts of electrical theory and practice. This course prepares learners for electrical apprenticeships and careers by covering circuits, wiring, safety protocols, code compliance, and troubleshooting techniques. Designed for those seeking high-demand skilled trades careers.',
            color: 'amber',
        },
        {
            id: 7,
            title: 'Carpentry & Woodworking Essentials',
            category: 'Skilled Trades',
            icon: '',
            description:
                'Build a foundation in construction and carpentry. Learn framing, finish work, tool safety, blueprint reading, and material selection. This course connects technical skills with real job scenarios in residential and commercial construction.',
            color: 'amber',
        },
        {
            id: 8,
            title: 'Overcoming Bitterness and Resentment: Comfort in Letting Go',
            category: 'Personal Development',
            icon: '',
            description:
                'A transformative course addressing the emotional challenges of incarceration and reentry. Learn practical strategies for managing difficult emotions, rebuilding relationships, and developing resilience for long-term success.',
            color: 'green',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            blue: 'from-blue-50 to-blue-100 border-blue-200 hover:border-blue-400',
            green: 'from-green-50 to-green-100 border-green-200 hover:border-green-400',
            amber: 'from-amber-50 to-amber-100 border-amber-200 hover:border-amber-400',
            purple: 'from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400',
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <div className='min-h-screen bg-white'>
            <Navigation currentPage='courses' />

            {/* Hero Section */}
            <section className='relative overflow-hidden bg-gradient-to-br from-slate-700 via-blue-700 to-slate-600 text-white py-20 md:py-32'>
                <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto text-center'>
                    <div className='inline-block bg-blue-400/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                        50+ Free Courses
                    </div>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6 leading-tight'>
                        Career-Building Education + Leadership Skills
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed'>
                        From HVAC to AI, carpentry to financial planning. CMTech
                        is learning you can take to work.{' '}
                        <strong className='text-blue-200'>
                            100% tuition-free, thanks to support from people
                            like you.
                        </strong>
                    </p>
                    <div className='mb-8'>
                        <Link
                            href='/give/donate'
                            className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl'
                        >
                            Support Free Education
                        </Link>
                    </div>

                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-3xl mx-auto'>
                        <p className='text-gray-700 text-lg leading-relaxed'>
                            CMTech courses are designed specifically for
                            incarcerated learners.{' '}
                            <strong className='text-blue-700'>
                                Narrative-driven instruction
                            </strong>{' '}
                            connects technical concepts to real job scenarios.
                            Every course leads somewhere—toward a credential, a
                            career path, and employment.
                        </p>
                    </div>
                </div>
                </div>
            </section>

            {/* Delivery Methods */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            How Learners Access CMTech
                        </h2>

                        <div className='grid md:grid-cols-2 gap-8'>
                            <div className='bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                                    <svg
                                        className='w-8 h-8 text-blue-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                    Digital Courses on Edovo Tablets
                                </h3>
                                <p className='text-gray-700 leading-relaxed mb-4'>
                                    Available in{' '}
                                    <strong>1,300+ facilities</strong>{' '}
                                    nationwide. Learners access self-paced
                                    courses directly on secure tablets, bringing
                                    education into housing units and classrooms.
                                </p>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='flex items-start gap-2'>
                                        <span className='text-blue-600 font-bold'>
                                            ✓
                                        </span>
                                        <span>
                                            Self-paced, on-demand learning
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='text-blue-600 font-bold'>
                                            ✓
                                        </span>
                                        <span>
                                            Available 24/7 in housing units
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='text-blue-600 font-bold'>
                                            ✓
                                        </span>
                                        <span>
                                            Progress tracking & certificates
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className='bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300'>
                                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                                    <svg
                                        className='w-8 h-8 text-blue-600'
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
                                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                    Peer-Led CMTech Charters
                                </h3>
                                <p className='text-gray-700 leading-relaxed mb-4'>
                                    In-person learning circles facilitated by
                                    trained incarcerated leaders. Peer
                                    facilitators guide study groups through our
                                    curriculum, creating accountability and
                                    community.
                                </p>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='flex items-start gap-2'>
                                        <span className='text-green-600 font-bold'>
                                            ✓
                                        </span>
                                        <span>
                                            Peer-led discussion & support
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='text-green-600 font-bold'>
                                            ✓
                                        </span>
                                        <span>
                                            Leadership development for
                                            facilitators
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='text-green-600 font-bold'>
                                            ✓
                                        </span>
                                        <span>
                                            Community-building inside facilities
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Catalog */}
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
                            Our Course Catalog
                        </h2>
                        <p className='text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto'>
                            Industries known to hire second-chance workers.
                            Skills that lead to real careers.
                        </p>

                        <div className='grid md:grid-cols-2 gap-6'>
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className='bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer'
                                >
                                    <div className='mb-4'>
                                        <div className='text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2'>
                                            {course.category}
                                        </div>
                                        <h3 className='text-xl font-bold text-gray-900 leading-tight'>
                                            {course.title}
                                        </h3>
                                    </div>
                                    <p className='text-gray-700 leading-relaxed'>
                                        {course.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Our Courses Work */}
            <section className='bg-gray-50 py-16'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-4xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            Why CMTech Courses Work
                        </h2>

                        <div className='grid md:grid-cols-3 gap-6'>
                            <div className='text-center'>
                                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <svg
                                        className='w-8 h-8 text-blue-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    Story-First Learning
                                </h3>
                                <p className='text-gray-700'>
                                    We start with scenarios learners recognize,
                                    then build technical knowledge that connects
                                    to real situations.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <svg
                                        className='w-8 h-8 text-blue-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    Reentry-Centered
                                </h3>
                                <p className='text-gray-700'>
                                    Every lesson is built with release day in
                                    mind, addressing licensing, employment, and
                                    professional identity.
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4'>
                                    <svg
                                        className='w-8 h-8 text-blue-600'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                        />
                                    </svg>
                                </div>
                                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                    Career-Connected
                                </h3>
                                <p className='text-gray-700'>
                                    We connect technical skills to actual career
                                    paths, industry expectations, and workplace
                                    scenarios.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className='py-16 bg-gradient-to-br from-slate-50 to-blue-50'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-5xl mx-auto'>
                        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
                            What Learners Are Saying
                        </h2>

                        <div className='grid md:grid-cols-2 gap-6'>
                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <p className='text-gray-700 italic leading-relaxed mb-4'>
                                    "Many thanks to you & your team for creating
                                    the Plumbing Concepts book. This course has
                                    given me a better understanding of plumbing
                                    and pushed me to sign up for the class here.
                                    The fact that you offer guidance on reentry
                                    is awesome & worth its weight in gold."
                                </p>
                                <div className='text-sm text-gray-600 font-medium'>
                                    — Justin, Future Plumber
                                    <br />
                                    <span className='text-xs'>
                                        ASPC Kingman, Arizona
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <p className='text-gray-700 italic leading-relaxed mb-4'>
                                    "I recently completed your course on
                                    Artificial Intelligence, and recognize that
                                    this tool will be of great value to myself
                                    and other prisoners planning on returning to
                                    society. I know your program will be greatly
                                    appreciated."
                                </p>
                                <div className='text-sm text-gray-600 font-medium'>
                                    — Terrance, AI Graduate
                                    <br />
                                    <span className='text-xs'>
                                        Alexander Correctional, North Carolina
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <p className='text-gray-700 italic leading-relaxed mb-4'>
                                    "Your course on plumbing is one of the best
                                    I have taken. I have been plumbing for 18
                                    years—10 before I came to prison and 8 while
                                    incarcerated. Few have let me know what you
                                    have taught me."
                                </p>
                                <div className='text-sm text-gray-600 font-medium'>
                                    — Ellis, Plumber
                                    <br />
                                    <span className='text-xs'>
                                        Jefferson County Correctional, Georgia
                                    </span>
                                </div>
                            </div>

                            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-200'>
                                <p className='text-gray-700 italic leading-relaxed mb-4'>
                                    "The course was not only bearing fruits of
                                    knowledge, I felt as if it was actually on
                                    the job training, a blueprint if you will."
                                </p>
                                <div className='text-sm text-gray-600 font-medium'>
                                    — Janius, Future Plumber
                                    <br />
                                    <span className='text-xs'>
                                        Lew Sterrett Justice Center, Texas
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16'>
                <div className='container mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        Ready to Bring CMTech to Your Facility?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        Partner with us to offer free, career-building education
                        to learners in your facility. Click an option below for
                        more:
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/contact/prison-staff'
                            className='bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
                        >
                            Prison Staff
                        </Link>
                        <Link
                            href='/contact/family-friends'
                            className='bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
                        >
                            Family & Friends
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
