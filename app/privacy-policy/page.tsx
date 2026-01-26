import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
    title: 'Privacy Policy | CMTech',
    description:
        'CMTech privacy policy. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className='min-h-screen bg-white'>
            <Navigation />

            <div className='container mx-auto px-4 py-16 max-w-4xl'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    Privacy Policy
                </h1>
                <p className='text-gray-600 mb-8'>
                    Last Updated: January 26, 2026
                </p>

                <div className='prose prose-lg max-w-none'>
                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            1. Introduction
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            The Cade Moore Polytechnic Institute ("CMTech,"
                            "we," "us," or "our") respects your privacy and is
                            committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use,
                            disclose, and safeguard your information when you
                            visit our website cmtech-website.netlify.app and
                            interact with our services.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            2. Information We Collect
                        </h2>

                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                            2.1 Personal Information
                        </h3>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We may collect personal information that you
                            voluntarily provide to us when you:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>
                                Fill out contact forms or volunteer applications
                            </li>
                            <li>Make donations or sponsor programs</li>
                            <li>Subscribe to our newsletter or updates</li>
                            <li>Correspond with us via email or phone</li>
                            <li>Participate in surveys or feedback requests</li>
                        </ul>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            This information may include:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Mailing address</li>
                            <li>Payment information (processed securely)</li>
                            <li>
                                Any other information you choose to provide
                            </li>
                        </ul>

                        <h3 className='text-xl font-semibold text-gray-900 mb-3 mt-6'>
                            2.2 Automatically Collected Information
                        </h3>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            When you visit our website, we may automatically
                            collect certain information, including:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on pages</li>
                            <li>Referring website</li>
                            <li>Device information</li>
                        </ul>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            3. How We Use Your Information
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We use the information we collect to:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>
                                Process and respond to your inquiries and
                                requests
                            </li>
                            <li>
                                Process donations and issue tax receipts
                            </li>
                            <li>
                                Send you updates about our programs and impact
                            </li>
                            <li>
                                Manage volunteer applications and opportunities
                            </li>
                            <li>Improve our website and user experience</li>
                            <li>
                                Comply with legal obligations and protect our
                                rights
                            </li>
                            <li>
                                Analyze website traffic and user behavior
                                (anonymized)
                            </li>
                        </ul>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            4. Information Sharing and Disclosure
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We do not sell, trade, or rent your personal
                            information to third parties. We may share your
                            information only in the following circumstances:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>
                                <strong>Service Providers:</strong> With trusted
                                third-party service providers who assist us in
                                operating our website, processing payments, or
                                delivering services (e.g., email platforms,
                                payment processors)
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> When
                                required by law or to protect our rights,
                                property, or safety
                            </li>
                            <li>
                                <strong>With Your Consent:</strong> When you
                                explicitly authorize us to share your
                                information
                            </li>
                        </ul>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            5. Data Security
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We implement reasonable security measures to protect
                            your personal information from unauthorized access,
                            alteration, disclosure, or destruction. However, no
                            method of transmission over the internet or
                            electronic storage is 100% secure, and we cannot
                            guarantee absolute security.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            6. Cookies and Tracking Technologies
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We may use cookies and similar tracking technologies
                            to enhance your experience on our website. You can
                            control cookie settings through your browser
                            preferences. Disabling cookies may affect website
                            functionality.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            7. Your Rights and Choices
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            You have the right to:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>
                                Access, correct, or delete your personal
                                information
                            </li>
                            <li>
                                Opt out of marketing communications at any time
                            </li>
                            <li>Object to certain data processing activities</li>
                            <li>
                                Request data portability (where applicable)
                            </li>
                        </ul>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            To exercise these rights, please contact us at
                            info@CadeMoorePolytechnic.Institute.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            8. Third-Party Links
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            Our website may contain links to third-party
                            websites. We are not responsible for the privacy
                            practices of these external sites. We encourage you
                            to review their privacy policies.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            9. Children's Privacy
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            Our website is not directed to children under the
                            age of 13. We do not knowingly collect personal
                            information from children under 13. If we become
                            aware that we have collected such information, we
                            will take steps to delete it.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            10. Changes to This Privacy Policy
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We may update this Privacy Policy from time to time.
                            We will notify you of any changes by posting the new
                            policy on this page and updating the "Last Updated"
                            date. Your continued use of our website after
                            changes constitutes acceptance of the updated
                            policy.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            11. Contact Us
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            If you have questions or concerns about this Privacy
                            Policy or our data practices, please contact us:
                        </p>
                        <div className='bg-gray-50 rounded-lg p-6 border border-gray-200'>
                            <p className='text-gray-700 font-semibold mb-2'>
                                The Cade Moore Polytechnic Institute (CMTech)
                            </p>
                            <p className='text-gray-700'>
                                Email:{' '}
                                <a
                                    href='mailto:info@CadeMoorePolytechnic.Institute'
                                    className='text-blue-600 hover:text-blue-700'
                                >
                                    info@CadeMoorePolytechnic.Institute
                                </a>
                            </p>
                            <p className='text-gray-700'>
                                Mailing Address: PO Box #810570, Dallas, TX
                                75381
                            </p>
                        </div>
                    </section>
                </div>

                <div className='mt-12 pt-8 border-t border-gray-200'>
                    <Link
                        href='/'
                        className='text-blue-600 hover:text-blue-700 font-semibold'
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>

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
