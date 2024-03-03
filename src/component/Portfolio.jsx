import "./Portfolio.css";

function Card({ link, altLink, linkImage, altImage, text, text1 }) {
  return (
    <div>
      <a href={link} alt={altLink}>
        <img src={linkImage} alt={altImage} />
        <p>{text}</p>
        <p>{text1}</p>
      </a>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="Portfolio" className="snap-child">
      <h1>My Works</h1>

      <div className="displayfolio">
        <Card
          link="https://tourmaline-hotteok-75602b.netlify.app/"
          altLink="Age_Calculator"
          linkImage="./src/assets/image/Age_calculator.png"
          altImage="Age_Calculator_image"
          text={"Project Age Calculator"}
          text1={
            "เป็นเว็บไซต์ที่ใช้สำหรับคำนวณอายุปัจจุบันตามวันเกิดของผู้กรอก"
          }
        />
        <Card
          link="https://idyllic-churros-2886cb.netlify.app/"
          altLink="credit_card_form"
          linkImage="./src/assets/image/credit_card_form.png"
          altImage="credit_card_form_image"
          text={"Project Credit Card Form"}
          text1={
            "ส่วนย่อยของหน้าเว็บสำหรับธนาคารเมื่อกรอกบัตรเครดิตในการทำธุรกรรมต่างๆ "
          }
        />
        <Card
          link="https://phenomenal-tapioca-54ab5d.netlify.app/"
          altLink="Landing_onepage"
          linkImage="./src/assets/image/Landing_onepage.png"
          altImage="Landing_onepage_image"
          text={"Project Landing Onepage"}
          text1={"ส่วนย่อยของหน้าเว็บไซต์ที่ใช้สำหรับดูข้อมูลเพิ่มเติม"}
        />
        <Card
          link="https://lively-croquembouche-491652.netlify.app/"
          altLink="LoopStduio_landigpage"
          linkImage="./src/assets/image/LoopStduio_landigpage.png"
          altImage="LoopStduio_landigpage_image"
          text={"Project Loopstudio Landingpage"}
          text1={"หน้าเว็บที่แสดงผลหน้าบ้านให้กับผู้ใช้ที่เข้ามาเยี่ยมชม"}
        />
        <Card
          link="https://friendly-bonbon-9455b8.netlify.app/"
          altLink="Validation_form"
          linkImage="./src/assets/image/Validation_form.png"
          altImage="Validation_form_image"
          text={"Project Validation Form"}
          text1={"หน้ากรอกข้อมูลสมัครสมาชิก"}
        />
      </div>
    </section>
  );
}
