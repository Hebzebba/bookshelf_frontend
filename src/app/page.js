"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { authorize } from "./auth/auth";
import { usePathname } from "next/navigation";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [slides, setSlides] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    authorize(pathname);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/slides/all`)
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((error) => console.log("Failed to fetch"));
  }, []);

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
        {slides &&
          slides.map((item, key) => (
            <section className="note" key={key}>
              <div className="flex justify-between items-center">
                <h2>Department: {item.department}</h2>
                <div className="flex gap-4 items-center font-semibold">
                  <h4>Level: {item.level}</h4>
                  <h4>Semister: {item.semister}</h4>
                </div>
              </div>
              <p>{item.course}</p>
              <a href={item.file_upload} download={item.file_upload}>
                Download
              </a>
            </section>
          ))}
      </main>
    </>
  );
}
