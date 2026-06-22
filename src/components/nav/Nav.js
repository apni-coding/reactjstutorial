import React from "react";
import style from "./Nav.module.css";

function Nav() {
  return (
    <nav>
      <div className={style.nav_container}>
        <div className={style.nav_title_wrapper}>
          <img
            className={style.logo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQx67r6g5bhYxznUcR-2cKqYGJxojnJCWt0dY3fH41g&s=10"
            alt="logo"
          />
          <h4>Apni Coding</h4>
        </div>
        <div className={style.nav_details}>
          <button>Courses</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;