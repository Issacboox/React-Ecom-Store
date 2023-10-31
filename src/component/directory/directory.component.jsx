/* eslint-disable react/prop-types */
import  Homepage from '../Homepage/HomePage.component'
import './directory.style.scss'

const welcomeTxt = 'ยินดีต้อนรับสู่ร้านถั่วงอกแบบยาวๆ 👏 เรายินดีต้อนรับคุณทุกท่านที่มาเยี่ยมชมร้านถั่วงอกของเรา ที่นี่คุณจะได้พบกับรสชาติที่อร่อยและถูกสรรในแบบที่คุณคงไม่เคยพบที่อื่น ร้านของเราเน้นในการสร้างประสบการณ์ที่ดีให้กับลูกค้าทุกคนที่มาที่นี่เรามีที่นั่งที่สะดวกสบายเพื่อให้คุณนั่งพักอย่างสบายๆ และเพลิดเพลินกับถั่วงอกที่หอมอร่อย นอกจากนี้เรายังมีหลายรสชาติให้คุณเลือก ไม่ว่าจะเป็นถั่วงอกเผ็ด หรือถั่วงอกไม่เผ็ด หรือแม้กระทั่งถั่วงอกแบบหวาน ที่ทุกคนต่างชอบ ไม่ว่าคุณจะมาแค่เดี่ยวหรือมากับเพื่อน ครอบครัว หรือทีมงานของคุณ ร้านถั่วงอกแบบยาวๆ พร้อมให้บริการทุกคนที่มาเยี่ยมชม โดยมุ่งเน้นการบริการที่ดีและถั่วงอกที่อร่อย ร่วมสนุกและเพลิดเพลินกับเราที่นี่! ขอบคุณที่มาเยี่ยมชมร้านถั่วงอกแบบยาวๆ ขอให้ทุกท่านมีความสุขและพอใจกับอาหารของเราทุกครั้งที่มาที่นี่ครับ/ค่ะ!'
const Directory = ({ menu }) => {
  return (
    <div className="content">
      <div className="welcome-page">
        <h1>🫛 Welcome 🫛</h1>
        <div className="imgHead">
          <div className="info-card-container">
            <div className="info-card">
              <div className="info-card__image-exposure info-card__content">
                <div className="info-card__image-exposure--blend"></div>
                <div className="info-card__image-exposure__item"></div>
              </div>
              <div className="info-card__bio info-card__content">
                <h2 className="info-card__bio--title">Bean Sprouts Store </h2>
                <p className="info-card__bio--copy">{welcomeTxt}</p>
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