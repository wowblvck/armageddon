import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google';

const passionOne = Passion_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-passion-one',
});

const helvetica = localFont({
  src: [
    {
      path: '../../public/fonts/helvetica_regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/helvetica_bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Armageddon',
  description: 'Узнай когда Земля столкнется с астероидом',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${passionOne.variable} ${helvetica.variable}`}>
      <body>{children}</body>
    </html>
  );
}
