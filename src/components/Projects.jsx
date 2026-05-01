import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");

  // API CALL
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(() => setError("Failed to load projects"));
  }, []);

  // FILTER LOGIC
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) =>
          p.tech.toLowerCase().includes(filter.toLowerCase()),
        );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>

        {/* FILTER BUTTONS */}
        <div className="filters">
          {["All", "React", "WordPress", "HTML"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ERROR */}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

        {/* LOADING */}
        {projects.length === 0 && !error ? (
          <p style={{ textAlign: "center" }}>Loading projects...</p>
        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card">
                  <img src={`/${project.img}`} alt={project.title} />

                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <h4>{project.subtitle}</h4>

                    <p className="project-desc">{project.desc}</p>

                    <p>{project.tech}</p>

                    <a href={project.link} target="_blank">
                      Live Site
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Projects;
