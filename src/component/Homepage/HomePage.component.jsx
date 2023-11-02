/* eslint-disable react/prop-types */
import "./homepage.style.scss";

const Homepage = ({ menu }) => {
  const { imgURL, title, desc, link } = menu;
  return (
    <div className="card" style={{ width: '18rem',borderRadius: '20px' }}>
      <img className="card-img-top imgCover" src={imgURL} alt={title} />
      <div className="card-body">
        <h5 className="card-title title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={link} className="button-read mt-1">
          ...อ่านเพิ่มเติม 
        </a>
      </div>
    </div>
  );
};

export default Homepage;
