import React from "react";
import "../SectionMain/sectionmain.css";
import Dot from "../assets/logos/dot.svg";
import PC from "../assets/Details/pngwing.com.png";
import { useRef } from "react";

const SectionsMain = () => {
  return (
    <div className="sectionmain" id="sectionMain">
      <div className="sectionmain_main">
        <div className="sectionmain_main-leftblock">
          <a>
            Сборка и апгрейд <br /> компьютеров на заказ
          </a>

          <div className="sectionmain_main-leftblock_allpunkts">
            <div className="sectionmain_main-leftblock_punkt start">
              <img src={Dot}></img>
              <p>Многолетний опыт сборки ПК</p>
            </div>

            <div className="sectionmain_main-leftblock_punkt mid">
              <img src={Dot}></img>
              <p>Рекомендации по качественным комплектующим</p>
            </div>

            <div className="sectionmain_main-leftblock_punkt last">
              <img src={Dot}></img>
              <p>
                Большое количество отзывов и высокий рейтинг <br /> на profi.ru
              </p>
            </div>

            <button>
              <a href="/#calculate">Заказать рассчёт цены</a>
            </button>
          </div>
        </div>
        <div className="sectionmain_main-rightblock">
          <img src={PC}></img>
        </div>
      </div>
    </div>
  );
};

export default SectionsMain;
