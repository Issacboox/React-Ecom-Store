/* eslint-disable react/prop-types */
import Homepage from "../Homepage/HomePage.component";
import "./directory.style.scss";
import Header from "./header.component";
// const welcomeTxt = 'ยินดีต้อนรับสู่ร้านถั่วงอก 👏'
const Directory = ({ menu }) => {
  return (
    <div>
     <Header />
    <div className="home-page">
    
      <h1 className="topic-card ">เมนูถั่วงอกแนะนำ 🫛</h1>
      <div className="main">
        <div className="MenuPage">
          {menu.map((menus) => (
            <Homepage key={menus.id} menu={menus} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default Directory;
