import React from "react";
import { useState, useEffect } from "react";
import style from "./NormalForm.module.css";

const NormalForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const formSubmit = (event) => {
    event.preventDefault();

    if (fullName && email) {
      const oneUser = { fullName, email };
      setUsers((users) => {
        return [...users, oneUser];
      });
    } else {
      console.log("nieco si zabudol vyplnit");
    }

    setFullName("");
    setEmail("");
  };

  return (
    <div className={style.normalForm}>
      <h1>Normal Form</h1>
      <form className={style.formSection} onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="meno"
          value={fullName}
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(() => event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NormalForm;
