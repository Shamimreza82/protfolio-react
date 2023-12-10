import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactInfo = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0jkqllj",
        "template_ennp3vc",
        form.current,
        "sOXcsrKEc5QmGLyGB"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank You for Contact me i am replaying in as soon as possible ",
            showConfirmButton: false,
            timer: 1500
          });
          

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-black text-white my-10 py-10">
      <div className="md:flex max-w-7xl m-auto gap-20 px-4">
        <div className="md:w-[50%]">
          <h2>Lets,s Find Solution Together? </h2>
          <p>Contact</p>
          <p>
            Fill in the form or just use my contacts below. ‍If you need to put
            a project on the move, let’s work on it!
          </p>
          <br />
          <p>shamimrezaone@gmail.com</p>
        </div>
        <div className="md:w-[50%] px-7">
          <form ref={form} onSubmit={sendEmail}>
            <label className="block">Name</label>
            <input
              className="md:w-[70%] py-1 mb-4 text-black w-full"
              type="text"
              name="user_name"
              required
            />
            <label className="block">Email</label>
            <input
              className="md:w-[70%] py-1 mb-4 text-black w-full"
              type="email"
              name="user_email"
              required
            />
            <label className="block ">Message</label>
            <textarea
              className="block md:w-[70%] text-black w-full "
              name="message"
              required
            />
            <input
              className="text-white border mt-4 hover:text-black duration-500 border-red-600 px-4 py-2 hover:bg-[#CCCD34] hover:border-none"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
