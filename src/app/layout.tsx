import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { url } from 'inspector';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Matheus',
    description: 'Matheus Dev Front-End',
    icons: {
        icon: [
            {
                url: '/logoWhite.png',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
