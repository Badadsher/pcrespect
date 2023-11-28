import React from "react";
import "../RecomendSection/recomendsection.css";
import Six from "../assets/Details/six.svg";
import Kubok from "../assets/Details/kubok.svg";
import Racket from "../assets/Details/racket.svg";

const RecomendSection = () => {
  return (
    <div className="recomendsection" id="Recommend">
      <div className="recomendsection_all">
        <a>В чем преимущество сборки на PCRESPECT?</a>

        <div className="recomendsection_all-logos">
          <div className="recomendsection_all-logos_logo">
            <img src={Six}></img>
            <a>
              Выгодные цены за <br />
              качественную сборку
            </a>
            <p>
              Высокое соответствие принципу <br />
              цена-качество
            </p>
          </div>

          <div className="recomendsection_all-logos_logo">
            <img src={Kubok}></img>
            <a>
              Гарантия на сборку 2 <br />
              недели
            </a>
            <p>
              Мы дорожим клиентам и предлагаем <br />
              гарантию на сборку
            </p>
          </div>

          <div className="recomendsection_all-logos_logo">
            <img src={Racket}></img>
            <a>
              Быстрая сборка и апгрейд <br />
              ПК под заказ
            </a>
            <p>
              Высокий уровень скорости работы по <br />
              сборке ПК
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendSection;
