"use client";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const ContactForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const { username, email, phone, message } = form;
    const response = await fetch('/api/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, phone, message })
    });
    const result = await response.json();
    if (result.success) {
      alert("Form Sumbitted Succesfully")
      setForm({
          username: "",
          email: "",
          phone: "",
          message: ""
      })
      setStatus('success');
  } else {
      setStatus('error');
  }
    console.log(result);
  };
  return (
    <form className={styles.contact_form} onSubmit={formHandler}>
      <div className={styles.input_fields}>
        <label htmlFor="username" className={styles.label}>
          Name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Name"
            className={mulish.className}
            value={form.username}
            onChange={inputHandler}
            required
          />
        </label>
      </div>

      <div className={styles.input_fields}>
        <label htmlFor="Email" className={styles.label}>
          Email
          <input
            type="text"
            name="email"
            id="Email"
            placeholder="Enter your Email"
            className={mulish.className}
            value={form.email}
            onChange={inputHandler}
            required
          />
        </label>
      </div>

      <div className={styles.input_fields}>
        <label htmlFor="Phone" className={styles.label}>
          PhoneNo
          <input
            type="number"
            name="phone"
            id="Phone"
            placeholder="Enter your PhoneNo"
            className={mulish.className}
            value={form.phone}
            onChange={inputHandler}
            required
          />
        </label>
      </div>

      <div className={styles.input_fields}>
        <label htmlFor="Message" className={styles.label}>
          Message
          <textarea
            rows={5}
            type="message"
            name="message"
            id="Message"
            placeholder="Enter your Message"
            className={mulish.className}
            value={form.message}
            onChange={inputHandler}
            required
          />
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.success_msg}>Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There was an error submitting your message. Please try again.
          </p>
        )}

        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
