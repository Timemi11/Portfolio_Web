import React from "react";
import "./Skill.css";
export default function Skill() {
  return (
    <section id="Skill" className="snap-child skills">
      <h2>My Skills</h2>
      <h3>
        สวัสดีครับ ผมนักศึกษาจากสาขาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์
        มหาวิทยาลัยศิลปากร ได้มีการฝึกฝนทั้งทางทฤษฎีและปฏิบัติที่หลากหลาย
        อย่างไรก็ตาม, ทักษะและความรู้นี้ยังคงเป็นเพียงเรื่องที่เริ่มต้นเท่านั้น
        ผมยังตั้งเป้าหมายที่จะเรียนรู้มากมายเพิ่มเติม, พัฒนาทักษะของตนเอง,
        และทำงานร่วมกับโอกาสใหม่ ๆ ที่อาจจะเกิดขึ้นในอนาคต
        ซึ่งทักษะที่ผมมีดังนี้
      </h3>
      <div className="skills-list">
        <div className="skill-item">
          <img src="src\assets\logos\html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\css-3.png" alt="React" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\js.png" alt="React" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\sass.png" alt="React" />
          <p>SASS</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\bootstrap.png" alt="React" />
          <p>BOOSTRAP</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\react.png" alt="React" />
          <p>REACT</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\mysql.png" alt="React" />
          <p>MYSQL</p>
        </div>
        <div className="skill-item">
          <img src="src\assets\logos\figma.png" alt="React" />
          <p>FIGMA</p>
        </div>
      </div>
    </section>
  );
}
