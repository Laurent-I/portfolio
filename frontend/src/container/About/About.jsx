import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useState } from "react";
import { images } from "../../constants";
import { urlFor, client } from "../../client";

import "./About.scss";

// const abouts = [
//   {
//     title: "Frontend development",
//     description: "I am a competent frontend developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Python Developer",
//     description: "Scripting with python is kinda my thing",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description: "Using Laravel in its full glory",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Analytical Thinking",
//     description: "I love the problems and all that come with them",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query, {}).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
