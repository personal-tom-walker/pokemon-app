import type { Metadata } from 'next';
import { Inter, Irish_Grover } from 'next/font/google';

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const irishGrover = Irish_Grover({ subsets: ['latin'], weight: '400', variable: '--font-irish-grover' });

export const metadata: Metadata = {
  title: 'Pokemon App',
  description:
    'Search and discover abilities and stats from your favourite Pokemon with this Pokemon App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${irishGrover.variable}`}>
        <Theme panelBackground='solid'>
          {children}
        </Theme>
      </body>
    </html>
  );
}
