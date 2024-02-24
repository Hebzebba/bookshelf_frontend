"use client";
import styles from "../auth.module.css";
import { useForm } from "react-hook-form";

const page = () => {
  const onSubmit = (data) => console.log(data);

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
            {...register("name")}
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
