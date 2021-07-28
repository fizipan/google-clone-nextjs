import Head from 'next/head';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <main className="flex flex-col h-screen justify-between">
      <Head>
        <title>Google Clone Next</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Form */}
      <Form />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
