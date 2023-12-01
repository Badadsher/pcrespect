import React from "react";
import "../Header/header.css";
import Phone from "../assets/logos/phone.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header_info">
        <a>PCRESPECT</a>

        <div className="header_info-main">
          <a href="/#sectionMain">Информация</a>
          <a href="/#Recommend">Обо мне</a>
          <a href="/#calculateSection">Рассчёт цен</a>
          <a href="/#Examples">Фото-примеры</a>
        </div>

        <div className="header_info-phone">
          <img src={Phone}></img>
          <div className="header_info-phone_infos">
            <a>+7 926 091-71-71</a>
            <a>Ежедневно с 9:00 до 20:00</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
