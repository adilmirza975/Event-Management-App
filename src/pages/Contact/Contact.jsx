import React from "react";

const Contact = () => {
  return (
    <section className="relative ">
      <h2>Contact-us</h2>

      <div className=" bg-red-600 relative text-white">
        <form action="">
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter Your Name"
            name="username"
          />
          <input
            className="form-control "
            type="email"
            required
            autoComplete="false"
            placeholder="Enter Your Email"
            name="email"
          />

          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your Message
      required"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
