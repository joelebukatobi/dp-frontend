import { useState } from 'react';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');

  console.log(email, message, name, subject);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://dear-potential.herokuapp.com/api/email/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
        to: 'jonwuanaku@mkelnetworks.com',
        subject: subject,
        from: email,
      }),
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      // return;
    }
    // console.log(data);
    console.log(name, email, subject, message);
  };

  return (
    <Layout>
      {/* <!-- contact --> */}
      <div className="contact">
        <div className="contact__container">
          <img className="contact__container__image" src="images/contact-header.jpg" alt="" />
        </div>
        <div className="contact__bg">
          <div className="contact__bg__section"></div>
          <div className="contact__bg__section"></div>
          <div className="contact__bg__section"></div>
          <div className="contact__bg__section"></div>
        </div>

        <div className="container container-contact__text">
          <div className="contact__text">
            <div className="contact__text__content">
              <h2 className="heading-2">
                Hello
                <br />
                Get In Touch
              </h2>
              <hr className="separator" />
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet purus, maecenas sodales eu diam enim
                sit. Egestas nunc non feugiat pharetra. Habitant adipiscing viverra ultrices nisl, at dictum orci, id
                urna. Sit a amet, ac mi facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id aliquet
                purus, maecenas sodales eu diam enim sit.
              </p>
              <p className="paragraph">info@dearpotential.com</p>
              <p className="paragraph">+2348179883178</p>
              <div className="social__media">
                <img className="social__media__icon" src="images/facebook.svg" alt="" />
                <img className="social__media__icon" src="images/instagram.svg" alt="" />
                <img className="social__media__icon" src="images/twitter.svg" alt="" />
              </div>
            </div>
            <form className="contact__text__form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Kenny Oreva"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Ads Partnership"
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input
                placeholder="mail@example.com"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="7"
                placeholder="Hi there I'm Kenny Oreva"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
