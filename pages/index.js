import Link from 'next/link';
import Layout from '@/components/Layout';
import Latest from '@/components/Latest';
import { API_URL } from '../config/index';
const qs = require('qs');

export default function Home({ bgPost }) {
  return (
    <div>
      <Layout>
        {/* <!-- Header --> */}
        <div className="header">
          <div className="header__container">
            <img className="header__container__image" src="images/image-1.jpg" alt="" />
          </div>
          <div className="header__bg">
            <div className="header__bg__section"></div>
            <div className="header__bg__section"></div>
            <div className="header__bg__section"></div>
            <div className="header__bg__section"></div>
          </div>
          <div className="header__text">
            <h1 className="heading-1">Dear Potential</h1>
            <hr className="separator" />
            <p className="paragraph header__text__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros eu neque faucibus risus tincidunt et
              faucibus. Sed ac nec elementum vel nisl. Blandit egestas mauris consectetur quam convallis maecenas
              dictumst vel dolor. Tempor aliquam felis commodo in purus sollicitudin.
            </p>
            <div className="header__text__sm">
              <img className="header__text__sm__icon" src="images/facebook.svg" alt="" />
              <img className="header__text__sm__icon" src="images/instagram.svg" alt="" />
              <img className="header__text__sm__icon" src="images/twitter.svg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- Who We Are --> */}
        <div className="container">
          <div className="who-we-are">
            <div className="who-we-are__header">
              <h2 className="heading-2">Who We Are</h2>
              <hr className="separator" />
            </div>
            <div className="who-we-are__body">
              <div className="who-we-are__body__container">
                <img src="images/image-2.jpg" alt="" className="who-we-are__body__container__image" />
                <div className="who-we-are__body__container__border"></div>
              </div>
              <div className="who-we-are__body__text">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut duis eget diam amet volutpat sit nisl.
                  Egestas non et enim, amet iaculis. Tincidunt elementum consectetur metus, ut ac. Sagittis, eget sit
                  vitae, morbi purus egestas lorem consectetur. Sed eu in facilisis quis tincidunt hendrerit nunc. Non
                  nullam elit, amet, dignissim massa eget convallis. Duis lorem orci, adipiscing nibh sed odio laoreet
                  non suscipit. Maecenas donec semper ullamcorper velit dolor, sed eu adipiscing sit. Cras proin a proin
                  tincidunt malesuada mattis sed elementum. Cursus ipsum est morbi est, molestie. Ultricies feugiat
                  hendrerit commodo, amet facilisi a. Viverra lectus vitae morbi diam vitae risus, urna. Nisl, quis
                  viverra sagittis, consectetur proin. Est, vel tempor faucibus vestibulum nisi ullamcorper elementum.
                  Maecenas donec semper ullamcorper velit dolor, sed eu adipiscing sit. Cras proin a proin tincidunt
                  malesuada mattis sed elementum. Cursus ipsum est morbi est, molestie. Ultricies feugiat hendrerit
                  commodo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Blog Posts --> */}
        <div className="container">
          <div className="blog-post">
            <div className="news__header">
              <h2 className="heading-2">Blog</h2>
              <hr className="separator" />
            </div>
            <div className="blog-post__posts">
              {bgPost.map((latestPost) => (
                <Latest key={latestPost.id} latestPost={latestPost} />
              ))}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros eu neque faucibus risus tincidunt
                et faucibus. Sed ac nec elementum vel nisl. Blandit egestas mauris consectetur quam convallis maecenas
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
    </div>
  );
}

export async function getServerSideProps() {
  const bgPost = qs.stringify(
    {
      populate: ['blog', 'user', 'image'],
      sort: ['date:asc'],
      pagination: {
        start: 0,
        limit: 3,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API_URL}/api/blogs?${bgPost}`);
  const blog = await res.json();
  console.log(blog);

  return {
    props: {
      bgPost: blog.data,
    },
  };
}
