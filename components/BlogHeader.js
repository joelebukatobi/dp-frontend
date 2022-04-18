import Link from 'next/link';
export default function BlogHeader({ date, title, bgImage, profile, username }) {
  return (
    <>
      <div className="header-two">
        <div className="header-two__container">
          <img className="header-two__container__image" src={bgImage} alt="" />
        </div>
        <div className="header-two__bg">
          <div className="header-two__bg__section"></div>
          <div className="header-two__bg__section"></div>
          <div className="header-two__bg__section"></div>
          <div className="header-two__bg__section"></div>
        </div>
        <div className="header-two__text">
          <div className="header-two__text__top">
            <p className="paragraph header-two-two__text__top__category">{date}</p>
          </div>
          <h1 className="">{title}</h1>
          {/* <!-- <hr className="separator" /> --> */}
          <div className="header-two__text__bottom">
            <div className="header-two__text__bottom__container">
              <img className="header-two__text__bottom__container__image" src={profile} alt="" />
            </div>
            <div className="header-two__text__bottom__text">
              <Link href={`/blog/author/${username}?`}>
                <p>{username}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
