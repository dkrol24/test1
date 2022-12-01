import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import questionmark from "../assets/Images/questionmark.png";
import { TitleText, TypingText } from "../components/CustomTexts";
import { staggerContainer } from "../utils/motion";
export default function Questions() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    warning: "",
  });
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service", "template", values, "id").then(
      (response) => {
        console.log("Wiadomość wysłana!", response);
        setValues({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          warning: "",
        });
        setStatus(true);
        setLoading(true);
      },
      (error) => {
        console.log("Podaj dane i zaakceptuj regulamin.", error);
      }
    );
  };

  return (
    <motion.div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",

        marginTop: "5rem",
      }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
    >
      <TypingText title="| Kontakt" textStyles="text-center" />
      <TitleText title={<>Masz jakieś pytania?</>} textStyles="text-center" />
      <motion.div
        style={{
          display: "flex",
          marginTop: "2rem",
          width: "100%",
          maxWidth: "1280px",
          justifyContent: "space-around",
        }}
      >
        <motion.div style={{ width: "100%", maxWidth: "500px" }}>
          {!status ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <input
                style={{
                  padding: "1rem",
                  border: "none",
                  background: "transparent",
                  borderBottom: "1px solid white",
                  outline: "none",
                  color: "white",
                }}
                required
                type="text"
                placeholder="Imię i nazwisko"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
              />

              <input
                style={{
                  padding: "1rem",
                  border: "none",
                  background: "transparent",
                  borderBottom: "1px solid white",
                  outline: "none",
                  color: "white",
                }}
                required
                type="email"
                placeholder="Adres e-mail"
                name="email"
                value={values.email}
                onChange={handleChange}
              />

              <input
                style={{
                  padding: "1rem",
                  border: "none",
                  background: "transparent",
                  borderBottom: "1px solid white",
                  outline: "none",
                  color: "white",
                }}
                required
                type="phone"
                placeholder="Numer telefonu"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />

              <textarea
                style={{
                  padding: "1rem",
                  border: "none",
                  background: "transparent",
                  borderBottom: "1px solid white",
                  outline: "none",
                  color: "white",
                  height: "100px",
                }}
                required
                placeholder="Napisz do Nas"
                value={values.message}
                name="message"
                onChange={handleChange}
              />

              <div>
                <input
                  name="warning"
                  type="checkbox"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "0.4rem",
                  }}
                  required
                  value={values.warning}
                  onClick={() => setCheckboxChecked(!checkboxChecked)}
                />
                <p
                  style={{ fontSize: "10px", color: "white" }}
                  handleChange={handleChange}
                >
                  Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                  ustawą o ochronie danych osobowych w związku z wysłaniem
                  zapytania przez formularz kontaktowy. Podanie danych jest
                  dobrowolne, ale niezbędne do przetworzenia zapytania. Zostałem
                  poinformowany, że przysługuje mi prawo dostępu do swoich
                  danych, możliwości ich poprawiania, żądania zaprzestania ich
                  przetwarzania. Administratorem danych osobowych jest
                  Event4Active, ul. Obwodowa 6C, 05-660 Warka.
                </p>
              </div>
              <button
                type="submit"
                style={{
                  padding: "1rem",
                  border: "none",
                  borderRadius: "32px",
                  outline: "none",
                  background: "white",
                  cursor: "pointer",
                }}
              >
                Wyślij
              </button>
            </form>
          ) : (
            <div>
              <h3>
                Dziękujemy za wysłanie wiadomości! Odpowiemy jak najszybciej się
                da!
              </h3>
            </div>
          )}
        </motion.div>
        <motion.div
          style={{
            maxWidth: "500px",
            height: "620px",
          }}
        >
          <img src={questionmark} style={{ width: "80%", height: "100%" }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
