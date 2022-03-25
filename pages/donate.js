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
            <p className="paragraph">Who we are</p>
            <hr className="separator" />
            <h3 className="heading-3">
              Lorem ipsum dolor sit amet, consectetur dolor sit amet, adipiscing elit elit elit elit.
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros eu neque faucibus risus tincidunt et
              faucibus. Sed ac nec elementum vel nisl. Blandit egestas mauris consectetur quam convallis maecenas
              dictumst vel dolor. Tempor aliquam felis commodo in purus sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer eros eu neque faucibus risus tincidunt et faucibus. Sed ac nec
              elementum vel nisl. Blandit egestas mauris consectetur quam convallis maecenas dictumst vel dolor. Tempor
              aliquam felis commodo in purus sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            <h2 className="heading-3">
              Lorem ipsum dolor sit amet, consectetur dolor sit amet, adipiscing elit elit elit elit.
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros eu neque faucibus risus tincidunt et
              faucibus. Sed ac nec elementum vel nisl. Blandit egestas mauris consectetur quam convallis maecenas
              dictumst vel dolor. Tempor aliquam felis commodo in purus sollicitudin. Lorem ipsum dolor sit amet,
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
