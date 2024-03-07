"use client";
import Header from "../Header";
import styles from "../../../auth/auth.module.css";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { authorize } from "@/app/auth/auth";

const page = () => {
  const pathname = usePathname();
  useEffect(() => {
    authorize(pathname);
  }, []);

  const validate_password = (pass, c_pass) => {
    return pass === c_pass;
  };

  const onSubmit = (data) => {
    if (validate_password(data.password, data.c_password)) {
      fetch(`http://localhost:8000/api/v1/lecturer/register`, {
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
      <div className="admin-container">
        <Header />
        <div>
          <div>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  {...register("name")}
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register("email")}
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
        </div>
      </div>
    </div>
  );
};

export default page;
