import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'CMTech - Real Skills for Real Careers',
    description:
        'Free skilled trades education and reentry training for incarcerated learners. Built by people who have been there. 210,000+ learners served nationwide.',
    openGraph: {
        title: 'CMTech - Real Skills for Real Careers',
        description:
            'Free skilled trades education for incarcerated learners. From HVAC to AI. 100% tuition-free.',
        url: 'https://cmtech-website.netlify.app',
        siteName: 'CMTech',
        images: [
            {
                url: '/cmtech-logo.png',
                width: 768,
                height: 768,
                alt: 'CMTech Logo - Learning that works',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CMTech - Real Skills for Real Careers',
        description:
            'Free skilled trades education for incarcerated learners. 210,000+ served nationwide.',
        images: ['/cmtech-logo.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
