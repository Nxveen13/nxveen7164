import React from "react";
import "./contact.css";
import { MdLocationPin,MdOutlineMarkEmailRead,MdOutlinePhoneIphone } from "react-icons/md";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_left">
        <form action="">
          <h1 class="contact_h1">Contact Us</h1>
          <input type="text" className="contact_input" placeholder="Enter your name" required/>
          <input type="email" className="contact_input" placeholder="Enter your email" required/>
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter your message"
            className="contact_input"
            required
          ></textarea>
          <input type="submit" value="Submit" className="contact_submitinput"/>
        </form>
      </div>
      <div className="contact_right">
        <h3 class="contact_h3">Location</h3>
        <p class="contact_p">
          <MdLocationPin/> 61 Nehru nagar new vellanor chennai 600062
        </p>

        <h3 class="contact_h3">phone no</h3>
        <p class="contact_p">
          <MdOutlinePhoneIphone/>9176988690
        </p>

        <h3 class="contact_h3">Email</h3>
        <p class="contact_p">
         <MdOutlineMarkEmailRead/> nxveen70@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
