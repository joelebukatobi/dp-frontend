export default function Header({ title, caption, image }) {
  return (
    <div className="header-two">
      <div className="header-two__container">
        <img className="header-two__container__image" src={image} alt="" />
      </div>
      <div className="header-two__bg">
        <div className="header-two__bg__section"></div>
        <div className="header-two__bg__section"></div>
        <div className="header-two__bg__section"></div>
        <div className="header-two__bg__section"></div>
      </div>
      <div className="header-two__text">
        <h1 className="">{title}</h1>
        <hr className="separator" />
        <h4>{caption}</h4>
      </div>
    </div>
  );
}
