import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  // const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Dear Potential',
  description: 'Bring young adults to a place where their inherent potentials can be maximized',
  keywords: 'young, young adult, addiction, potentials',
};
