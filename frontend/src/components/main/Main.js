import "./main.css";

import triangleBg from "./atlassian.svg";
import dev from "./dev-to.svg";
import pw from "./pw.png";

// import { ImageBackground } from "react-native";

export const Main = () => {
  return (
    <div className="container">
      <nav className="header">
        <div className="left-header">
          <div className="logo">
            <img src={dev} alt="DEV Logo" height={60}></img>
            <a href="./">DEVelopME</a>
          </div>
          <a href="./">Create</a>
        </div>
        <div className="right-header">
          <a href="./">Sign Up</a>
          <a href="./">Log In</a>
        </div>
      </nav>
      <div className="body-container">
        <div>
          <img
            className="triangle"
            src={triangleBg}
            alt="Triangular Background"
            height={600}
          ></img>
        </div>
        <div className="hook-container">
          <h2>Hey! This is</h2>
          <h1>
            <strong>DEVelopME</strong>
          </h1>
          <h2>a personal,</h2>
          <h2>
            website builder for <span className="fancy-change">DEVELOPERS</span>
          </h2>
        </div>
        <div>
          <img
            className="trio"
            src={pw}
            alt="Three Personal Websites"
            height={500}
          ></img>
        </div>
        <div className="info-container">
          <h3>
            Eliminate your self-doubts by kickstarting your career with
            DEVelopME.
          </h3>
          <button className="create-web-btn">Create My Personal Website</button>
        </div>
      </div>
      <div className="footer">
        <p>
          Copyright ©{" "}
          <a href="https://github.com/Ezzhingy/developme">Hack-O-Holics</a> 2022
        </p>
      </div>
    </div>
  );
};
