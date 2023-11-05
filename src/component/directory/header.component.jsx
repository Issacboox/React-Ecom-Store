import "./directory.style.scss";
// import headerimage from '../../assets/img/header.png'
const Header = () => {
  return (
    <div className="imageHeader">
      <img
        src="https://img.freepik.com/premium-photo/green-organic-peas-bowl-concept-homemade-preparations-fast-cooking-healthy-vegetarian-food-concept_111869-1975.jpg?w=1380"
        alt=""
      />
      <div className="d-flex row justify-content-end">
        <div className="text-end">
          <span
            style={{
              fontSize: "2rem",
              position: "relative",
              bottom: "360px",
              marginRight: "20px",
              backgroundColor: "#74b886",
              borderRadius: "20px",
              padding: "10px",
              color: "white",
            }}
          >
            Your Comfort is Our Business
          </span>
          <h1
            style={{
              fontSize: "3.3rem",
              marginRight: "20px",
              position: "relative",
              bottom: "350px",
              fontWeight: "600",
              textShadow:"2px 2px #fff",
              fontFamily:"Mitr"
            }}
          >
            We Bring the Store to Your Door
          </h1>
          <a href="/shop">
            <button className="shop-button">Shop Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
