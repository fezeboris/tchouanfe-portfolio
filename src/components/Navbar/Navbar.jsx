import React, { useState } from "react";
import "./Navbar.scss";
import modeIcon from "../../assets/sun.svg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={logo} alt="logo" /> */}
        <h3 className="app__logo">TCHOUANFE</h3>
      </div>
      <ul className={`app__navbar-links ${mode}`}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className={`app__flex  p-text ${mode}`} key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li>
          <div className={`mode-toggle `}>
            <img
              onClick={(e) => toggleMode()}
              style={{
                filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
              }}
              src={modeIcon}
              alt="..."
            />
          </div>
        </li>
      </ul>
      <div className={`app__navbar-menu ${mode} `}>
        <HiMenuAlt4 onClick={(e) => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className={`app__navbar-links ${mode}`}>
              {[
                "home",
                "about",
                "work",
                "skills",
                "Testimonials",
                "contact",
              ].map((item) => (
                <li key={`${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <span className="mode-toggle">
                  <img
                    onClick={(e) => toggleMode()}
                    style={{
                      filter: mode === "dark" ? "invert(50%)" : "invert(20%)",
                    }}
                    src={modeIcon}
                    alt="..."
                  />
                </span>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
