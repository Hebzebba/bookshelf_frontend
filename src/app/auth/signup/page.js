"use client";
import styles from "../auth.module.css";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    if (localStorage.getItem("user_info")) redirect("/");
  }, []);

  const validate_password = (pass, c_pass) => {
    return pass === c_pass;
  };

  const onSubmit = (data) => {
    if (validate_password(data.password, data.c_password)) {
      fetch(`http://localhost:8000/api/v1/student/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => window.alert("Registeration successfull"));
    } else {
      alert("Password mis-match");
    }
  };

  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            {...register("username")}
            required
          />
          <label htmlFor="index_number">Index Number:</label>
          <input
            type="text"
            id="index_number"
            name="index_number"
            {...register("index_number")}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password")}
            required
          />
          <label htmlFor="c_password">Confirm Password:</label>
          <input
            type="password"
            id="c_password"
            name="c_password"
            {...register("c_password")}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default page;
