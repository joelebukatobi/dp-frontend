import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div>
      <Layout>
        {/* <!-- Header --> */}
        <Header title={'About Us'} image={'None'} caption={"Discover what we've about at Dear Potential"} />

        {/* <!--  About --> */}
        <div className="container">
          <div className="about">
            <div className="about__header">
              <p>Who we are</p>
              <hr className="separator" />
              <h3>Dear Potential helps equip you with the knowledge, wisdom and tools</h3>
              <p>
                you need to maximise your relationships and singleness preparing you to live whole, sane and have a
                purposeful marriage centred on Christ. It was founded by Deborah Briggs in August 2018 during her early
                twenties.
                <br />
                <br />
                Dear Potential is a community that encourages purposeful living. We hold online and offline events
                ranging from the Singles' Hangout, to the Guys' Conference and our podcast, launched in March 2021.
                <br />
                <br />
                Be a part of the movement/community, join <Link href="">here</Link>
              </p>
            </div>
            <div className="about__container">
              <img className="about__container__image" src="images/about-image-1.jpg" alt="" />
              <img className="about__container__image" src="images/about-image-2.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* <!-- Vision --> */}
        <div className="container">
          <div className="vision">
            <div className="vision__image">
              <img className="vision__image__pic" src="images/vision-image.jpg" alt="" />
            </div>
            <img className="decoration" src="images/dots-image.svg" alt="" />
            <div className="vision__text">
              <div className="vision__text__group">
                <h3>VISION:</h3>
                <p>We see singles living purposeful, maximizing their singleness and having a God centred marriage.</p>
              </div>
              <div className="vision__text__group">
                <h3>MISSION:</h3>
                <p>
                  Through our teachings, events and hangouts, we equip, educate and inspire you to live purposeful,
                  having a God-centered marriage as a result.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Banner  --> */}
        <div className="banner">
          <img src="images/banner-image.jpg" alt="" className="banner__image" />
          <div className="banner__text">
            <div className="banner__text__header">
              <h2>Newsletter</h2>
              <hr className="separator" />
              <p>
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

        {/* <!-- Our Mission --> */}
        <div className="container">
          <div className="mission">
            <div className="mission__header">
              <h3>Making sure that the present</h3>
              <p>
                day young adult is maximizing their singleness in every area is one of our core focus. One thing we're
                quite particular about at Dear Potential is replacing the lies the current generation have been sold
                with Gospel truths.
              </p>
            </div>
            <div className="mission__image">
              <img src="images/mission-image-1.jpg" alt="" className="mission__image__pic" />
              <img src="images/mission-image-2.jpg" alt="" className="mission__image__pic" />
              <img src="images/mission-image-3.jpg" alt="" className="mission__image__pic" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
