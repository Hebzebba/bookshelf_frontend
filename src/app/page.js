export default function Home() {
  return (
    <>
      <header>
        <div className="container mx-auto flex items-center justify-between">
          <h1>Lecture Notes</h1>
          <p>Welcome, Seth</p>
        </div>
      </header>

      <div class="filter-section">
        <label for="topic">Topic:</label>
        <select id="topic">
          <option value="all">All Topics</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
        <label for="date">Date:</label>
        <select id="date">
          <option value="all">All Dates</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
        <label for="type">Type:</label>
        <select id="type">
          <option value="all">All Types</option>
          <option value="pdf">PDF</option>
          <option value="video">Video</option>
        </select>
      </div>
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
