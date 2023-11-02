import "./directory.style.scss";

const Header = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://assets.epicurious.com/photos/63f507456a0c0a742cc800a8/16:9/w_5039,h_2834,c_limit/Bean%20sprout%20stir%20fry-RECIPE.jpg"
            className="d-block w-100"
            style={{ height: "500px", objectFit: "cover", borderRadius:'0px 0px 100px 100px' }}
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="image-topic">Bean Sprout Store</h5>
            <p className="image-desc">
              ☎️ : 064-7166930 | 📌 : Saraburi, Thailand | 🕛 : 07:00-18:00{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://img.freepik.com/free-photo/variety-organic-vegetables-supermarket_53876-138173.jpg?w=1380&t=st=1698929679~exp=1698930279~hmac=80cc1c96805db592e6d0428dbaa66c1fa76a686c8d16f1911f4464839e255a16"
            style={{ height: "500px", objectFit: "cover", borderRadius:'0px 0px 100px 100px' }}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="image-topic">Bean Sprout Store</h5>
            <p className="image-desc">
              ☎️ : 064-7166930 | 📌 : Saraburi, Thailand | 🕛 : 07:00-18:00{" "}
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/client-shopping-local-retailer_23-2149349423.jpg?w=1380&t=st=1698929764~exp=1698930364~hmac=898ea7fc1aab80c22bacf6145b4819e9b157542fb8cc11a24a10a2935e0d6385"
            style={{ height: "500px", objectFit: "cover",borderRadius:'0px 0px 100px 100px' }}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="image-topic">Bean Sprout Store</h5>
            <p className="image-desc">
              ☎️ : 064-7166930 | 📌 : Saraburi, Thailand | 🕛 : 07:00-18:00{" "}
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Header;
