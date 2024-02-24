import styles from "./dashboard.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.dashboard}>
        <div className={styles.widget}>
          <h2>Recent Uploads</h2>
          <ul>
            <li>Slide 1</li>
            <li>Slide 2</li>
            <li>Slide 3</li>
          </ul>
        </div>
        <div className={styles.widget}>
          <h2>Statistics</h2>
          <div className={styles.chart}></div>
        </div>
        <div className={styles.widget}>
          <h2>Upload Slides</h2>
          <form>
            <label for="file">Select File:</label>
            <input type="file" id="file" name="file" accept=".pdf" />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
