import React from "react";
import "../PhotoAssets/photoassets.css";
import PC1 from "../assets/PC/1.png";
import PC2 from "../assets/PC/2.png";
import PC3 from "../assets/PC/3.png";
import PC4 from "../assets/PC/4.png";
import PC5 from "../assets/PC/5.png";
import PC6 from "../assets/PC/6.png";
import PC7 from "../assets/PC/7.png";
import PC8 from "../assets/PC/8.png";
import PC9 from "../assets/PC/9.png";

const PhotoAssets = () => {
  return (
    <div className="photoassets" id="Examples">
      <div className="photoassets_text">
        <a>Смотрите примеры выполненных работ</a>
        <p>Фото выполненных работ с profi.ru</p>
      </div>

      <div className="photoassets_window">
        <div className="photoassets_window-row">
          <img className="example" src={PC1}></img>
          <img className="example" src={PC2}></img>
          <img className="example" src={PC3}></img>
        </div>

        <div className="photoassets_window-row">
          <img className="example" src={PC4}></img>
          <img className="example" src={PC5}></img>
          <img className="example" src={PC6}></img>
        </div>

        <div className="photoassets_window-row lactpcrow">
          <img className="example" src={PC7}></img>
          <img className="example" src={PC8}></img>
          <img className="example" src={PC9}></img>
        </div>
      </div>

      <div className="photoassets_window-row_mobile">
        <img className="example" src={PC1}></img>
        <img className="example" src={PC2}></img>
        <img className="example" src={PC3}></img>
        <img className="example" src={PC4}></img>
        <img className="example" src={PC5}></img>
        <img className="example" src={PC6}></img>
        <img className="example" src={PC7}></img>
        <img className="example" src={PC8}></img>
        <img className="example" src={PC9}></img>
      </div>
    </div>
  );
};

export default PhotoAssets;
