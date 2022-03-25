import Layout from '@/components/Layout';

export default function EventsPage() {
  return (
    <Layout>
      {/* <!-- Header --> */}
      <div className="header header-two">
        <div className="header__container">
          <img className="header__container__image header-two__image" src="/images/events-header.png" alt="" />
        </div>
        <div className="header__bg">
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
        </div>
        <div className="header__text">
          <h1 className="heading-2 header-two__heading">Our Events</h1>
          <hr className="separator" />
          <p className="paragraph">Our monthly themes and couple of our scheduled events</p>
        </div>
      </div>
    </Layout>
  );
}
