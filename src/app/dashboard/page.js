"use client";

import styles from "./dashboard.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.dashboard}>
        <div className={`${styles.widget} overflow-hidden overflow-y-auto`}>
          <h2>Uploaded Slides</h2>
          <ul>
            <li>Slide 1</li>
            <li>Slide 2</li>
            <li>Slide 3</li>
          </ul>
        </div>
        <div className={styles.widget}>
          <div>
            <label htmlFor="course">Course:</label> <br />
            <input type="text" id="course" name="course" required />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <br />
            <input type="text" id="department" name="department" required />
          </div>
          <div>
            <label htmlFor="level">Level:</label> <br />
            <select id="level">
              <option value="one">one</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </div>
          <div>
            <label htmlFor="semister">Semister:</label>
            <br />
            <select id="semister">
              <option value="one">one</option>
              <option value="two">Two</option>
            </select>
          </div>
        </div>
        <div className={styles.upload}>
          <h2>Upload Slide</h2>
          <input type="file" id="file" name="file" accept=".pdf" />
          <button type="submit">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default page;
