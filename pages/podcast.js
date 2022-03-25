import Layout from '@/components/Layout';

export default function PodcastPage() {
  return (
    <Layout>
      {/* <!-- Header --> */}
      <div className="header header-two">
        <div className="header__container">
          <img className="header__container__image header-two__image" src="images/event-header.jpg" alt="" />
        </div>
        <div className="header__bg">
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
        </div>
        <div className="header__text">
          <h1 className="heading-2 header-two__heading">Podcast</h1>
          <hr className="separator" />
          <p className="paragraph">Find a catalogue of our podcast</p>
        </div>
      </div>
    </Layout>
  );
}
