import styles from "../auth.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="index_number">Index Number:</label>
          <input type="text" id="index_number" name="index_number" required />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <label for="c_password">Confirm Password:</label>
          <input type="password" id="c_password" name="c_password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default page;
