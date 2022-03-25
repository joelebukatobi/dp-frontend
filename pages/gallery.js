import Layout from '@/components/Layout';

export default function gallery() {
  return (
    <Layout>
      {/* <!-- Header --> */}
      <div className="header header-two">
        <div className="header__container">
          <img className="header__container__image header-two__image" src="images/gallery-header.png" alt="" />
        </div>
        <div className="header__bg">
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
          <div className="header__bg__section"></div>
        </div>
        <div className="header__text">
          <h1 className="heading-2 header-two__heading">Our Gallery</h1>
          <hr className="separator" />
          <p className="paragraph"></p>
        </div>
      </div>

      {/* <!-- gallery --> */}
      <div className="container">
        <div className="gallery">
          <div className="gallery__row">
            <div className="gallery__row__card">
              <img className="gallery__row__card__image" src="images/image-3.jpg" alt="" />
              <h4 className="heading-4"> Guys Conference, 2019</h4>
            </div>
            <div className="gallery__row__card">
              <img className="gallery__row__card__image" src="images/image-1.jpg" alt="" />
              <h4 className="heading-4"> Singles Hangout, 2019</h4>
            </div>
            <div className="gallery__row__card">
              <img className="gallery__row__card__image" src="" alt="" />
            </div>
          </div>
          <div className="gallery__row">
            <div className="gallery__row__card">
              <img className="gallery__row__card__image" src="" alt="" />
            </div>
            <div className="gallery__row__card">
              <img className="gallery__row__card__image" src="" alt="" />
            </div>
            <div className="gallery__row__card">
              <img className="gallery__row__card__image" src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Theme --> */}
      <div className="container">
        <div className="theme">
          <div className="theme__image">
            <img className="theme__image__pic" src="images/flyer.jpg" alt="" />
          </div>
          <div className="theme__text">
            <h3 className="heading-3">
              May Theme: <span>Single and Focused</span>
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros eu neque faucibus risus tincidunt et
              faucibus. Sed ac nec elementum vel nisl. Blandit egestas mauris consectetur quam convallis maecenas
              dictumst vel dolor. Tempor aliquam felis commodo in purus sollicitudin. Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
