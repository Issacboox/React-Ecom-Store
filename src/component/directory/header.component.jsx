import "./directory.style.scss";
import headerimage from "../../assets/img/header.png";

const Header = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={headerimage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5
                style={{
                  color: "black",
                  fontSize: "5rem",
                  fontFamily: "Mitr",
                  position: "relative",
                  bottom: "90px",
                }}
              >
                Welcome to our Store
              </h5>
              <a href="/shop" style={{}}>
                <button
                  style={{
                    position: "relative",
                    bottom: "90px",
                    color: "black",
                    fontSize: "1.7rem",
                    backgroundColor: "#a6dea6",
                    padding:'10px 40px',
                    borderRadius:'20px',
                    
                  }}
                >
                  Shop Now!
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={headerimage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5
                style={{
                  color: "black",
                  fontSize: "5rem",
                  fontFamily: "Mitr",
                  position: "relative",
                  bottom: "90px",
                }}
              >
                FEEL FREE TO CONTACT US ☎️
              </h5>
              <a href="/shop" style={{}}>
                <button
                  style={{
                    position: "relative",
                    bottom: "90px",
                    color: "black",
                    fontSize: "1.7rem",
                    backgroundColor: "#a6dea6",
                    padding:'10px 40px',
                    borderRadius:'20px',
                    
                  }}
                >
                  Shop Now!
                </button>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={headerimage} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <h5
                style={{
                  color: "black",
                  fontSize: "5rem",
                  fontFamily: "Mitr",
                  position: "relative",
                  bottom: "90px",
                }}
              >
                Welcome to our Store
              </h5>
              <a href="/shop" style={{}}>
                <button
                  style={{
                    position: "relative",
                    bottom: "90px",
                    color: "black",
                    fontSize: "1.7rem",
                    backgroundColor: "#a6dea6",
                    padding:'10px 40px',
                    borderRadius:'20px',
                    
                  }}
                >
                  Shop Now!
                </button>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Header;
