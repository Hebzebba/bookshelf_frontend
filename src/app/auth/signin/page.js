import styles from "../auth.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <form>
          <label for="index_number">Index Number:</label>
          <input type="text" id="index_number" name="index_number" required />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default page;
