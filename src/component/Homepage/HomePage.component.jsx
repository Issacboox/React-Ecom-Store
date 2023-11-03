/* eslint-disable react/prop-types */
import "./homepage.style.scss";

const Homepage = ({ menu }) => {
  const { imgURL, title, desc, link } = menu;
  return (
    <div className="card" style={{ width: '18rem',borderRadius: '20px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',fontFamily:'Mitr' }}>
      <img className="card-img-top imgCover" src={imgURL} alt={title} style={{borderRadius:'20px 0px'}} />
      <div className="card-body">
        <h5 className="card-title title">{title}</h5>
        <p className="card-text" style={{height:'120px',overflow:'auto'}}>{desc}</p>
        <a href={link} className="button-read mt-1">
          ...อ่านเพิ่มเติม 
        </a>
      </div>
    </div>
  );
};

export default Homepage;
