/* eslint-disable react/prop-types */
import  Homepage from '../Homepage/HomePage.component'
import './directory.style.scss'

// const welcomeTxt = 'ยินดีต้อนรับสู่ร้านถั่วงอก 👏'
const Directory = ({ menu }) => {
  return (
    <div className="component">
      <div className="welcome-page mt-3">
        <h1></h1>
        <div className="imgHead">
          <div className="info-card-container">
            <div className="info-card">
              <div className="info-card__image-exposure info-card__content">
                <div className="info-card__image-exposure--blend"></div>
                <div className="info-card__image-exposure__item"></div>
              </div>
              <div className="info-card__bio info-card__content">
                <h2 className="info-card__bio--title text-center">🫛 Welcome 🫛</h2>
                <p className="info-card__bio--copy">BeanSprouts Store</p>

                <button className="info-card__bio--button">
                  เลือกซื้อสินค้า 🛒
                </button>
              </div>
            </div>
          </div>
        </div>

        <h3>🧺 เมนูถั่วงอกแนะนำ 🧺</h3>
      </div>

      <div className="MenuPage">
        {menu.map((menus) => (
          <Homepage key={menus.id} menu={menus} />
        ))}
      </div>
    </div>
  );
};
export default Directory