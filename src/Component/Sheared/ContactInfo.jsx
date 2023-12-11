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
    <div id="contact" className="bg-[#CCCD34]  text-black  py-10">
      <div className="md:flex max-w-7xl m-auto gap-20 px-4">
        <div className="md:w-[50%] space-y-4">
          <h2 className="text-3xl">Lets,s Find Solution Together? </h2>
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
              className="md:w-full py-1 mb-4 text-black w-full"
              type="text"
              name="user_name"
              required
            />
            <label className="block">Email</label>
            <input
              className="md:w-full py-1 mb-4 text-black w-full"
              type="email"
              name="user_email"
              required
            />
            <label className="block ">Message</label>
            <textarea
              className="block md:w-full text-black w-full "
              name="message"
              required
            />
            <input
              className="text-black border mt-4 hover:text-white hover:border-black duration-500 border-red-600 px-4 py-2 hover:bg-black hover:border-none"
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
