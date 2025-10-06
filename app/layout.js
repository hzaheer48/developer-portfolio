import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import ScrollToTop from './components/helper/scroll-to-top';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hammad Zaheer - Software Engineer',
  description:
    'My name is Hammad Zaheer. I am a Software Engineer with more than two years of experience in full-stack development and AI/ML. I have a strong interest in building scalable applications, integrating AI-driven solutions, and exploring new technologies. My core skills include React, Next.js, NestJS, Node.js, GraphQL, PostgreSQL, and Docker, along with expertise in supervised and unsupervised learning, NLP, and deep learning. I enjoy problem-solving, continuous learning, and developing solutions that combine modern software engineering with artificial intelligence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastContainer />
        <main className='min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white'>
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
