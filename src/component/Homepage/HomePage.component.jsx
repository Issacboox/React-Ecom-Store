/* eslint-disable react/prop-types */
import './homepage.style.scss';

const Homepage = ({ menu }) => { 
  const { imgURL, title, desc, link } = menu; 
  return (
    <div className="blog-card">
      <img src={imgURL} alt={title} /> 
      <div className="blog-content">
        <p className="blog-label">{title}</p> 
        <p>{desc}</p> 
        <a href={link}>
          <button className="read-more-btn">...อ่านเพิ่มเติม</button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
