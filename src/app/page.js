"use client";

import { useEffect, useState } from "react";
import { authorize } from "./auth/auth";
import { usePathname } from "next/navigation";

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    authorize(pathname);

    fetch(`http://localhost:8000/api/v1/slides/all`)
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Failed to fetch"));
  }, []);

  useEffect(() => {
    setSearchResults(search(slides, searchInput));
  }, [searchInput, slides]);

  return (
    <>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search..."
          style={{
            border: "1px solid black",
            width: "50%",
            height: "50px",
            padding: "0px 10px",
            borderRadius: "10px",
          }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <main>
        {searchResults &&
          searchResults.map((item, key) => (
            <section className="note" key={key}>
              <div className="flex justify-between items-center">
                <h2>Department: {item.department}</h2>
                <div className="flex gap-4 items-center font-semibold">
                  <h4>Level: {item.level}</h4>
                  <h4>semester: {item.semester}</h4>
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

const search = (arr, searchTerm) => {
  return arr.filter((obj) => {
    for (let key in obj) {
      if (
        obj[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });
};