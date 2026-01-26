import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-4'>
            <div className='max-w-2xl mx-auto text-center'>
                {/* 404 Illustration */}
                <div className='mb-8'>
                    <div className='text-9xl font-bold text-blue-600 opacity-20'>
                        404
                    </div>
                </div>

                {/* Error Message */}
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    Page Not Found
                </h1>
                <p className='text-xl text-gray-700 mb-8'>
                    Looks like this page does not exist yet. Maybe it is still
                    being built - just like the skills our learners are
                    developing.
                </p>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
                    <Link
                        href='/'
                        className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl'
                    >
                        Go to Homepage
                    </Link>
                    <Link
                        href='/contact'
                        className='bg-white hover:bg-gray-100 text-blue-700 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl'
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Quick Links */}
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200'>
                    <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                        Explore CMTech
                    </h2>
                    <div className='grid md:grid-cols-2 gap-4 text-left'>
                        <Link
                            href='/about'
                            className='p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group'
                        >
                            <h3 className='font-semibold text-gray-900 mb-1 group-hover:text-blue-700'>
                                About Us →
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Learn about our mission and approach
                            </p>
                        </Link>

                        <Link
                            href='/courses'
                            className='p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group'
                        >
                            <h3 className='font-semibold text-gray-900 mb-1 group-hover:text-blue-700'>
                                Courses →
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Explore our 50+ free courses
                            </p>
                        </Link>

                        <Link
                            href='/give'
                            className='p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group'
                        >
                            <h3 className='font-semibold text-gray-900 mb-1 group-hover:text-blue-700'>
                                Get Involved →
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Support our mission
                            </p>
                        </Link>

                        <Link
                            href='/give/donate'
                            className='p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group'
                        >
                            <h3 className='font-semibold text-gray-900 mb-1 group-hover:text-blue-700'>
                                Donate →
                            </h3>
                            <p className='text-sm text-gray-600'>
                                Fund career education
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className='mt-12 text-gray-600'>
                    <p className='text-sm'>
                        If you think this page should exist, please{' '}
                        <Link
                            href='/contact'
                            className='text-blue-600 hover:text-blue-700 font-semibold'
                        >
                            let us know
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
