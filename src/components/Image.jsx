import React from "react";
import { imageData } from "../data/imageData";

const Image = (props) => {
  return (
    <section id="imageType" className="section">
      <h1 className="blind">이미지 유형 만들기</h1>
      <h2>{props.title}</h2>
      <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
      <div className="image_inner container">
        {imageData.map((item) => (
          <article className={`image ${item.className}`} key={item.id}>
            <h3 className="image_title">{item.title}</h3>
            <p className="image_desc">{item.desc}</p>
            <p className={`image_btn ${item.btnClass}`}>자세히 보기</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Image;
