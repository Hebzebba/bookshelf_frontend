"use client";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="filter-section">
          <div>
            <label htmlFor="department">Department:</label>
            <select id="department" {...register("department")}>
              <option value="all">All Departments</option>
              <option value="html">Com science</option>
              <option value="css">Management</option>
            </select>
          </div>

          <div>
            <label htmlFor="course">Course:</label>
            <select id="course">
              <option value="all">All Courses</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div>
            <label htmlFor="level">Level:</label>
            <select id="level">
              <option value="all">All Levels</option>
              <option value="one">one</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </div>
          <div>
            <label htmlFor="semister">Semister:</label>
            <select id="semister">
              <option value="all">All Semisters</option>
              <option value="one">one</option>
              <option value="two">Two</option>
            </select>
          </div>
        </div>
      </form>
      <main>
        <section className="note">
          <h2>Topic 1: Introduction to HTML</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <a href="notes/topic1.pdf" download>
            Download PDF
          </a>
        </section>
        <section className="note">
          <h2>Topic 2: CSS Basics</h2>
          <p>
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien.
          </p>
          <a href="notes/topic2.pdf" download>
            Download PDF
          </a>
        </section>
      </main>
    </>
  );
}
