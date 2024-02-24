"use client";
import styles from "../auth.module.css";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
