import React from "react";
import style from "./Nav.module.css";
import { Link, NavLink, Outlet } from "react-router";

function Nav() {
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to="/">
              <img
                className={style.logo}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQx67r6g5bhYxznUcR-2cKqYGJxojnJCWt0dY3fH41g&s=10"
                alt="logo"
              />
            </Link>
            <h4>Apni Coding</h4>
          </div>
          <div className={style.nav_details}>
            <button>
              <NavLink to="/courses">
                {({ isActive }) => (isActive ? "On Courses" : "Go To Courses")}
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
