import React, { useState } from "react";
import "../CalculateSection/calculatesection.css";
import Info from "../assets/FX/info.svg";
import Popup from "../Popup/Popup";
import AllDone from "../AllDone/AllDone";
const CalculateSection = () => {
  const [value, setNumber] = useState(150000);
  const [isActiveBtn, setActive] = useState(false);
  const [isActiveBtnShop, setActiveShop] = useState(false);
  const [startPrice, setPrice] = useState(0);
  const [number, setNumberPhone] = useState("");
  const [email, setEmailValue] = useState("");
  const [choiseUser, setChoise] = useState("");

  const checkerPrice = () => {
    if (value <= 100000) {
      setPrice(4000);
    } else if (value >= 100000 && value <= 150000) {
      setPrice(4500);
    } else if (value >= 150000 && value <= 200000) {
      setPrice(6000);
    } else if (value >= 200000 && value <= 250000) {
      setPrice(6500);
    } else if (value >= 250000 && value <= 300000) {
      setPrice(10000);
    }
  };

  const handleButtonClick = () => {
    setActiveShop(true);
    fetch("https://pcrespect.ru/php/checker.php", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input1: number,
        input2: email,
        input3: value,
        option: choiseUser,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        try {
          const jsonData = JSON.parse(data);
          console.log("Ответ от сервера:", jsonData);
        } catch (error) {
          console.error("Ошибка при разборе JSON:", error);
          console.log("Текст ответа:", data);
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке данных:", error);
      });
  };

  const setActivePopup = () => {
    setActive = true;
  };

  const showPrice = (e) => {
    setNumber(e.target.value);
    checkerPrice();
  };

  return (
    <div className="calculatesection" id="calculate">
      <div className="calculatesection_frame" id="calculateSection">
        <div className="calculatesection_frame-window">
          <div className="top">
            <a>Рассчитать стоимость сборки/апгрейда</a>
          </div>

          <a className="question">Апгрейд или сборка пк?</a>

          <div className="choise">
            <div>
              <input
                type="radio"
                name="choise"
                value="upgrade"
                onClick={() => {
                  setChoise("Апгрейд");
                }}
              ></input>
              <a>Апгрейд</a>
            </div>

            <div>
              <input
                type="radio"
                name="choise"
                value="sborka"
                onClick={() => {
                  setChoise("Сборка");
                }}
              ></input>
              <a>Сборка</a>
            </div>

            <div className="notebook">
              <input
                type="radio"
                name="choise"
                value="sborka"
                onClick={() => {
                  setChoise("Ремонт ноутбуков");
                }}
              ></input>
              <a>Ремонт ноутбуков</a>
            </div>
          </div>
          <div className="calculator">
            <a>Укажите бюджет:</a>
            <a className="pricevalue">{value}</a>
            <input
              type="range"
              value={value}
              min={10000}
              max={300000}
              step={1}
              id="range"
              label="defaultrange"
              onChange={(e) => showPrice(e)}
            ></input>
            <a>Плата за услугу: {startPrice} </a>
          </div>

          <div className="blockcalc" onClick={() => setActive(true)}>
            <img src={Info}></img>
            <p>Узнать все цены на услуги</p>
          </div>

          <div className="lastwind">
            <input type="checkbox"></input>
            <p>
              Нажамая на кнопку, вы соглашаетесь с{" "}
              <span>условиями обработки персональных данных</span>
            </p>
          </div>

          <div className="argument">
            <input
              placeholder="Номер телефона"
              onChange={(e) => setNumberPhone(e.target.value)}
            ></input>
            <input
              placeholder="E-mail"
              onChange={(e) => setEmailValue(e.target.value)}
            ></input>
            <button onClick={handleButtonClick}>Заказать</button>
          </div>
        </div>
      </div>
      <Popup active={isActiveBtn} setActive={setActive} />
      <AllDone active={isActiveBtnShop} setActive={setActiveShop} />
    </div>
  );
};

export default CalculateSection;
