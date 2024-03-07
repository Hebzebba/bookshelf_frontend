"use client";

import { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import { useForm } from "react-hook-form";
import { authorize } from "../auth/auth";
import { usePathname } from "next/navigation";

const page = () => {
  const { register, handleSubmit } = useForm();
  const [slides, setSlides] = useState([]);
  const [info, setInfo] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    authorize(pathname);
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    setInfo(user_info);

    if (typeof window !== "undefined") {
      fetch(
        `http://localhost:8000/api/v1/slides/lecturer?lecturer_id=${user_info.email}`
      )
        .then((res) => res.json())
        .then((data) => setSlides(data))
        .catch((error) => console.error(error));
    }
  }, []);

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("course", data.course);
    formData.append("department", data.department);
    formData.append("level", data.level);
    formData.append("semester", data.semester);
    formData.append("lecturer_email", info.email);
    formData.append("slides", data.file[0]);

    fetch(`http://localhost:8000/api/v1/slides/add`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          window.alert("Upload success");
        } else {
          window.alert("Upload failed");
        }
      })
      .catch((error) => console.error("error in request"));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/v1/slides/delete?_id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Slides deleted") {
          alert("Item deleted");
        }
      })
      .catch((error) => console.error("error occured"));
  };

  return (
    <div>
      <div className={styles.dashboard}>
        <div className={`${styles.widget} overflow-hidden overflow-y-auto`}>
          <h2>Uploaded Slides</h2>

          {slides &&
            slides.map((slide) => (
              <div key={slide.id} className={styles.slidesList}>
                <h3>{slide.course}</h3>{" "}
                <button onClick={() => handleDelete(slide.id)}>Delete</button>
              </div>
            ))}
        </div>
        <div className={styles.widget}>
          <div>
            <label htmlFor="course">Course:</label> <br />
            <input
              type="text"
              id="course"
              name="course"
              required
              {...register("course")}
            />
          </div>
          <div>
            <label htmlFor="department">Department:</label>
            <br />
            <input
              type="text"
              id="department"
              name="department"
              required
              {...register("department")}
            />
          </div>
          <div>
            <label htmlFor="level">Level:</label> <br />
            <select id="level" {...register("level")}>
              <option value="one">one</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </div>
          <div>
            <label htmlFor="semester">Semester:</label>
            <br />
            <select id="semester" {...register("semester")}>
              <option value="one">one</option>
              <option value="two">Two</option>
            </select>
          </div>
        </div>
        <div className={styles.upload}>
          <h2>Upload Slide</h2>
          <input
            type="file"
            id="file"
            name="file"
            accept=".pdf"
            {...register("file")}
          />
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
