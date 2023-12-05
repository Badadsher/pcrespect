import React from "react";
import "../Header/header.css";
import Phone from "../assets/logos/phone.png";
import Popup from "../Popup/Popup";
import { useState } from "react";

const Header = () => {
  const [isActiveBtn, setActive] = useState(false);
  return (
    <div className="header">
      <div className="header_info">
        <a>PCRESPECT</a>

        <div className="header_info-main">
          <a onClick={() => setActive(true)}>Все услуги</a>
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
      <Popup active={isActiveBtn} setActive={setActive} />
    </div>
  );
};

export default Header;
