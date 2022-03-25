import Layout from '@/components/Layout';

export default function donate() {
  return (
    <Layout>
      {/* <!-- Header --> */}
      <div className="header header-two">
        <div className="header__container">
          <img className="header__container__image header-two__image" src="/images/donation-header.png" alt="" />
        </div>
        <div className="header__bg">
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
        </div>
        <div className="header__text">
          <h1 className="heading-2 header-two__heading">Donate</h1>
          <hr className="separator" />
          <p className="paragraph">Be a part of what God is helping us to do at Dear Potential</p>
        </div>
      </div>

      {/* <!--  About --> */}
      <div className="container">
        <div className="about">
          <div className="about__header">
            <p className="paragraph">DONATE</p>
            <hr className="separator" />
            <h3 className="heading-3">Help bring out potential by maximizing singleness</h3>
            <p className="paragraph">
              That's what we are all about, we aim to replace the lies the current generation have been sold with Gospel
              truths through our teachings, events and hangouts, we equip, educate and inspire you to live purposeful,
              having a God-centered marriage as a result.
              <br />
              <br />
              We really do believe that wholesome relationships and marriages are possible but only when young adults
              have maximized their singleness and by so doing make use of the inherent potential within them across
              different areas in life as a whole.
              <br />
              <br />
              We can not do this alone and so we invite you to join us maximize inherent potentials in this generation.
            </p>
            <button className="btn">Donate</button>
          </div>
          <div className="about__container">
            <img className="about__container__image" src="images/donate-image-1.jpg" alt="" />
            <img className="about__container__image" src="images/donate-image-2.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* <!--Banner  --> */}
      <div className="banner">
        <img src="images/banner-image.jpg" alt="" className="banner__image" />
        <div className="banner__text">
          <div className="banner__text__header">
            <h2 className="heading-2">Newsletter</h2>
            <hr className="separator" />
            <p className="paragraph">
              Want to get the latest update from us?
              <br />
              Then fill the form below to subscribe to our monthly newsletter
            </p>
          </div>
          <form action="" className="banner__text__form">
            <input type="email" placeholder="example@mail.com" />
            <button className="btn banner__text__form__btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* <!-- Featured --> */}
      <div className="container">
        <div className="featured">
          <div className="featured__txt">
            <h2 className="heading-3">At Dear Potential</h2>
            <p className="paragraph">
              We are replacing lies with Gospel truths through our teachings, events and hangouts, we equip, educate and
              inspire you to live purposeful, having a God-centered marriage as a result.
            </p>
            <img src="images/dots-image.svg" alt="" />
          </div>
          <div className="featured__container">
            <img src="images/section-image-1.jpg" alt="" className="featured__container__img" />
            <img src="images/section-image-2.jpg" alt="" className="featured__container__img" />
            <img src="images/section-image-3.jpg" alt="" className="featured__container__img" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
