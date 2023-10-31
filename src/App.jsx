
import Directory from "./component/directory/directory.component";

function App() {
 const Menu = [
    {
      id: 1,
      title: "ผัดไทย",
      desc: "เมนูเส้นที่เป็นอาหารประจำชาติไทย เป็นเมนูที่คนไทยทานเป็นกิจวัตร และเป็นเมนูที่ต่างชาติยกนิ้วให้ในความอร่อย รสชาติที่ทานง่ายทำให้ถูกปากผู้คนจากทั่วโลกได้ไม่ยาก",
      link: "https://www.foodpanda.co.th/contents/pad-thai-recipe",
      imgURL:
        "https://s359.kapook.com//pagebuilder/30e8d9bc-5796-4325-a9ee-1c52fff28bc6.jpg",
    },
    {
      id: 2,
      title: "ก๋วยเตี๋ยวทรงเครื่อง",
      desc: "อิ่มแน่นแน่ถ้าได้ลองทำเมนูก๋วยเตี๋ยวทรงเครื่อง ใช้เส้นใหญ่เอาไปนึ่งจนสุกแล้วโปะถั่วงอก เครื่องเคราต่าง ๆ เช่น ใส่ไก่ เห็ดหอม เต้าหู้ทอด เป็นต้น สุดท้ายราดน้ำซอสรสเข้มข้น",
      link: "https://cooking.kapook.com/view169492.html",
      imgURL:
        "https://s359.kapook.com//pagebuilder/6a407608-aed6-4a59-94ea-4a6bcca08ee4.jpg",
    },
    {
      id: 3,
      title: "ก๋วยเตี๋ยวหลอดทะเล",
      desc: " ก๋วยเตี๋ยวหลอดแบบทั่วไปใคร ๆ ก็ทำกันบ่อยแล้ว คราวนี้ลองมาทำก๋วยเตี๋ยวหลอดทะเลกันบ้าง ใส่กุ้งสดกับหมึกแห้ง และเครื่องเคราอื่น ๆ แบบจัดเต็ม ",
      link: "https://cooking.kapook.com/view206585.html",
      imgURL:
        "https://s359.kapook.com//pagebuilder/75712fe0-2297-428c-a28f-5976d86b0911.jpg",
    },
    {
      id: 4,
      title: "ก๋วยเตี๋ยวน้ำซุปเห็ดหอมเจ",
      desc: " เมนูก๋วยเตี๋ยวน้ำซุปเห็ดหอมเจเป็นอีกเมนูถั่วงอกที่น่าอร่อย สูตรนี้น้ำซุปใส่เห็ดหอมกับไช้เท้า และลูกชิ้นเจรวมทั้งเนื้อปลาเจ สำหรับใครที่อยากใส่เนื้อสัตว์ก็ได้เช่นกัน",
      link: "https://cooking.kapook.com/view215353.html",
      imgURL:
        "https://s359.kapook.com//pagebuilder/89623c4b-ef4a-402f-9916-3e650438b244.jpg",
    },
  ];

  return (
 <Directory menu={Menu} />
  );
}

export default App;
