import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";
import { useTheme } from "../../hooks/useTheme";
const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type== "testimonials"]';
    const brandsQuery = '*[_type== "brands"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const { mode } = useTheme();
  return (
    <>
      {testimonials.length && (
        <>
          <div className={`app__testimonial-item ${mode} app__flex`}>
            <img src={urlFor(test.imageurl)} alt="testimonial" />
            <div className={`app__testimonial-content ${mode}`}>
              <p className={`p-text ${mode}`}>{test.feedback}</p>
              <div>
                <h4 className={`bold-text ${mode}`}>{test.name}</h4>
                <h5 className={`bold-text ${mode}`}>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className={`app__testimonial-btns ${mode} app__flex`}>
            <div
              className={`app__flex test-arrow ${mode}`}
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className={`app__flex test-arrow ${mode}`}
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
