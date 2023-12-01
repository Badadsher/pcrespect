import { useState } from "react";
import Close from "../assets/close.svg";
import React from "react";
import "../AllDone/alldone.css";

const AllDone = ({ active, setActive }) => {
  return (
    <div className={active ? "done active" : "done"}>
      <div className="popup_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popup_window-done">
          <a>Ваша заявка успешно отправлена!</a>
        </div>
      </div>
    </div>
  );
};
export default AllDone;
