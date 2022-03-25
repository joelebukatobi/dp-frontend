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
            <h1 className="heading-1">Welcome to Dear Potential</h1>
            <hr className="separator" />
            <h4 className="heading-4 header__text__heading-three">We are Sane, whole and loved by God</h4>
            <div className="header__text__sm">
              <Link href={'https://web.facebook.com/dearpotential/'}>
                <img className="header__text__sm__icon" src="images/facebook.svg" alt="" />
              </Link>
              <Link href={'https://www.instagram.com/dearpotential/'}>
                <img className="header__text__sm__icon" src="images/instagram.svg" alt="" />
              </Link>
              <Link href={'https://twitter.com/dearpotential/'}>
                <img className="header__text__sm__icon" src="images/twitter.svg" alt="" />
              </Link>
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
                  Dear Potential helps equip you with the knowledge, wisdom and tools you need to maximise your
                  relationships and singleness preparing you to live whole, sane and have a purposeful marriage centred
                  on Christ. It was founded by Deborah Briggs in August 2018 during her early twenties.
                  <br />
                  <br />
                  Dear Potential is a community that encourages purposeful living. We hold online and offline events
                  ranging from the Singles' Hangout, to the Guys' Conference and our podcast, launched in March 2021.
                  <br />
                  <br />
                  Be a part of the movement/community, join <Link href="">here</Link>
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
              <h2 className="heading-3">At Dear Potential</h2>
              <p className="paragraph">
                We are replacing lies with Gospel truths through our teachings, events and hangouts, we equip, educate
                and inspire you to live purposeful, having a God-centered marriage as a result.
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