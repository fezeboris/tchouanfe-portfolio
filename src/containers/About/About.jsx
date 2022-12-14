import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useTheme } from "../../hooks/useTheme";
const About = () => {
  const { mode } = useTheme();
  // const abouts = [
  //   {
  //     title: "Web Development",
  //     description: "I am a web developer",
  //     imgUrl: images.about01,
  //   },
  //   {
  //     title: "Frontend Development",
  //     description: "I am a Frontend developer",
  //     imgUrl: images.about02,
  //   },
  //   {
  //     title: "Backend  Development",
  //     description: "I am abackend developer",
  //     imgUrl: images.about03,
  //   },
  //   {
  //     title: "MERN Stack",
  //     description: "I am a MERN Stack",
  //     imgUrl: images.about04,
  //   },
  // ];
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className={`head-text ${mode}`}>
        I Know that <span>Good Development</span> <br /> means{" "}
        <span>Good Business</span>{" "}
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={`app__profile-item `}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className={`bold-text ${mode}`} style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className={`p-text ${mode}`} style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
