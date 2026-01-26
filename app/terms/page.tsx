import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '../components/Navigation';

export const metadata: Metadata = {
    title: 'Terms of Service | CMTech',
    description:
        'CMTech terms of service. Review our terms and conditions for using our website and services.',
};

export default function TermsPage() {
    return (
        <div className='min-h-screen bg-white'>
            <Navigation />

            <div className='container mx-auto px-4 py-16 max-w-4xl'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    Terms of Service
                </h1>
                <p className='text-gray-600 mb-8'>
                    Last Updated: January 26, 2026
                </p>

                <div className='prose prose-lg max-w-none'>
                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            1. Acceptance of Terms
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            By accessing or using the website
                            cmtech-website.netlify.app (the "Site") operated by
                            The Cade Moore Polytechnic Institute ("CMTech,"
                            "we," "us," or "our"), you agree to be bound by
                            these Terms of Service. If you do not agree to these
                            terms, please do not use our Site.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            2. Use of the Site
                        </h2>

                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                            2.1 Permitted Use
                        </h3>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            You may use our Site for lawful purposes only. You
                            agree not to use the Site:
                        </p>
                        <ul className='list-disc pl-6 mb-4 text-gray-700 space-y-2'>
                            <li>
                                In any way that violates applicable laws or
                                regulations
                            </li>
                            <li>
                                To transmit or procure the sending of any
                                advertising or promotional material without our
                                prior written consent
                            </li>
                            <li>
                                To impersonate or attempt to impersonate CMTech,
                                our employees, or any other person or entity
                            </li>
                            <li>
                                To engage in any conduct that restricts or
                                inhibits anyone's use or enjoyment of the Site
                            </li>
                        </ul>

                        <h3 className='text-xl font-semibold text-gray-900 mb-3 mt-6'>
                            2.2 User Accounts
                        </h3>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            If you create an account on our Site, you are
                            responsible for maintaining the confidentiality of
                            your account credentials and for all activities that
                            occur under your account. You agree to notify us
                            immediately of any unauthorized use.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            3. Intellectual Property Rights
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            All content on this Site, including but not limited
                            to text, graphics, logos, images, audio clips, and
                            software, is the property of CMTech or its content
                            suppliers and is protected by United States and
                            international copyright laws.
                        </p>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            You may not reproduce, distribute, modify, create
                            derivative works of, publicly display, or exploit
                            any content from this Site without our prior written
                            permission.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            4. Donations and Payments
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            All donations made through our Site are final and
                            non-refundable unless otherwise required by law.
                            CMTech is a nonprofit organization, and donations
                            may be tax-deductible to the extent allowed by law.
                        </p>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            We use third-party payment processors to handle
                            financial transactions. By making a donation, you
                            agree to the terms and conditions of those payment
                            processors.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            5. User-Generated Content
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            If you submit content to our Site (such as comments,
                            testimonials, or feedback), you grant CMTech a
                            non-exclusive, royalty-free, perpetual, and
                            worldwide license to use, reproduce, modify, and
                            display such content for our mission-related
                            purposes.
                        </p>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            You represent and warrant that you own or have the
                            necessary rights to submit such content and that it
                            does not violate any third-party rights or
                            applicable laws.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            6. Third-Party Links
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            Our Site may contain links to third-party websites
                            or services that are not owned or controlled by
                            CMTech. We have no control over and assume no
                            responsibility for the content, privacy policies, or
                            practices of any third-party sites or services.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            7. Disclaimer of Warranties
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            Our Site is provided on an "as is" and "as
                            available" basis. CMTech makes no representations or
                            warranties of any kind, express or implied, as to
                            the operation of the Site or the information,
                            content, or materials included on the Site.
                        </p>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            To the fullest extent permissible by applicable law,
                            CMTech disclaims all warranties, express or implied,
                            including but not limited to implied warranties of
                            merchantability and fitness for a particular
                            purpose.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            8. Limitation of Liability
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            In no event shall CMTech, its directors, employees,
                            or agents be liable for any indirect, incidental,
                            special, consequential, or punitive damages arising
                            out of or related to your use of the Site, even if
                            we have been advised of the possibility of such
                            damages.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            9. Indemnification
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            You agree to indemnify, defend, and hold harmless
                            CMTech and its officers, directors, employees, and
                            agents from any claims, liabilities, damages,
                            losses, and expenses (including reasonable
                            attorneys' fees) arising out of or in any way
                            connected with your access to or use of the Site or
                            your violation of these Terms.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            10. Modifications to Terms
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            CMTech reserves the right to modify or replace these
                            Terms at any time. We will provide notice of any
                            material changes by posting the new Terms on this
                            page and updating the "Last Updated" date. Your
                            continued use of the Site after any changes
                            constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            11. Governing Law
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            These Terms shall be governed by and construed in
                            accordance with the laws of the State of Texas,
                            without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            12. Severability
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            If any provision of these Terms is found to be
                            invalid or unenforceable, the remaining provisions
                            will remain in full force and effect.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                            13. Contact Information
                        </h2>
                        <p className='text-gray-700 leading-relaxed mb-4'>
                            If you have any questions about these Terms, please
                            contact us:
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
