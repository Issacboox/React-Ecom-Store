import "./directory.style.scss";
import headerimage from '../../assets/img/header.png'
const Header = () => {
  return (
   <div className="imageHeader">
    <img src={headerimage} alt=""/>
    <div className="topic-header">
      <span>Your Comfort is Our Business</span>
      <h1>We Bring the Store to Your Door</h1>
      <button><a href="/shop">Shop Now</a></button>
    </div>
   </div>
  );
};

export default Header;
