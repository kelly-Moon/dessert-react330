import React from "react";
import { imageTextData } from "../data/imageTextData";

const ImageText = (props) => {
  return (
    <section id="imgTextType" className={`section ${props.element}`}>
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText_inner container">
        <div className="imgText_txt">
          <div className="small">{imageTextData.subtitle}</div>
          <h3 className="title">{imageTextData.title}</h3>
          <div className="desc">{imageTextData.desc}</div>
          <ul className="list">
            {imageTextData.links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        {imageTextData.images.map((img) => (
          <div className={`imgText_img ${img.className}`} key={img.id}>
            <a href="#" className={img.btnClass}>
              {img.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageText;
