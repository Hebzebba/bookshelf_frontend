"use client";
import styles from "../auth.module.css";
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (localStorage.getItem("user_info")) redirect("/");
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    fetch("http://localhost:8000/login/lecturer", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail === "lecturer not found") {
          alert("Invalid user");
        } else {
          localStorage.setItem("user_info", JSON.stringify(data));
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            {...register("username")}
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
