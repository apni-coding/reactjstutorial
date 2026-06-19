import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://files.codingninjas.in/pl-ninja-16706.svg"
            alt="logo"
          />
          <h4>Coding Ninjas</h4>
        </div>
        <div className={style.nav_details}>
          <button>Courses</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;