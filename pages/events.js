import Layout from '@/components/Layout';
import Header from '@/components/Header';

export default function EventsPage() {
  return (
    <Layout>
      {/* <!-- Header --> */}

      <Header
        title={'About Us'}
        image={'/images/events-bg.jpg'}
        caption={'Our monthly themes and couple of our scheduled events'}
      />
    </Layout>
  );
}
