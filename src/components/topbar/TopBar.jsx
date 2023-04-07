import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://scontent.fisb5-2.fna.fbcdn.net/v/t39.30808-6/302083888_599103098511682_2412543518969551743_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dRh0BqEiWDkAX-_Cb65&_nc_ht=scontent.fisb5-2.fna&oh=00_AfDjdzNInz57c0oNiylKpyi6HRdJe_3-sep1c7GPPvp1EA&oe=6434EA68"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
