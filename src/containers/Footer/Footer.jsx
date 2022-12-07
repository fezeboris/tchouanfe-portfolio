import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
import "./Footer.scss";
import { useTheme } from "../../hooks/useTheme";
const Footer = () => {
  const form = useRef();
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_hqyc2tq",
        "template_ipohpa9",
        form.current,
        "c3SwW6XwBvPURNXNt"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmited(true);
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const { name, email, message } = formData;
  // const handleChangeInput = (e) => {

  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // const handleSubmit = () => {
  //   setLoading(true);
  //   const contact = {
  //     _type: "contact",
  //     name: name,
  //     email: email,
  //     message: message,
  //   };
  //   client.create(contact).then(() => {
  //     setLoading(false);
  //     setIsFormSubmited(false);
  //   });
  // };
  const { mode } = useTheme();
  return (
    <>
      <h2 className={`head-text ${mode}`}>Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:borisfeze9@gmail.com" className="p-text">
            borisfeze9@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +237 690 166 974" className="p-text">
            +237 690 166 974
          </a>
        </div>
      </div>
      {!isFormSubmited ? (
        <form
          className={`app__footer-form ${mode} app__flex`}
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="app__flex">
            <input
              type="text"
              className={`p-text ${mode}`}
              placeholder="Your Name"
              // value={name}
              name="name"
              // onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className={`p-text ${mode}`}
              placeholder="Your Email"
              // value={email}
              name="email"
              // onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              name="message"
              // value={message}
              placeholder="Your Message"
              className={`p-text ${mode}`}
              // onChange={handleChangeInput}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`p-text ${mode}`}
            // onClick={handleSubmit}
          >
            {loading ? "Sending..." : " Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className={`head-text ${mode}`}>
            Thank you for getting in touch
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
