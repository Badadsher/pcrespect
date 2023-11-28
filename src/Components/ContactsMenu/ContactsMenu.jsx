import React from "react";
import "../ContactsMenu/contactsmenu.css";
import TG from "../assets/Social/tg.png";
import VK from "../assets/Social/vk.png";
import Whatsapp from "../assets/Social/whats.png";
import BottomGradi from "../assets/FX/back.png";
const ContactsMenu = () => {
  return (
    <div className="ContactsMenu">
      <div className="ContactsMenu_window">
        <div className="ContactsMenu_window-left">
          <a>Контакты</a>

          <a>+7 926 091 71-71</a>

          <div className="ContactsMenu_window-left_images">
            <img src={TG}></img>
            <img src={Whatsapp}></img>
            <img src={VK}></img>
          </div>
        </div>

        <div className="ContactsMenu_window-right">
          <a>
            Ежедневно <br />с 9:00 до 20:00
          </a>
          <a>
            Москва, Балашиха, Богородский, Люберцы, <br /> Мытищи, Реутов,
            Электрогорск
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactsMenu;
