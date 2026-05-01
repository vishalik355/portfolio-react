function About({ data }) {
  return (
    <section id="about" className="about">
      <div className="container about-content">

        <div className="about-left">
          <div className="about-image-wrapper">
            <img src="/profile.jpeg" alt="Vishali Frontend Developer" />
          </div>
        </div>

        <div className="about-right">
          <h4 className="tag">ABOUT ME</h4>

          <h2>
            {data?.heading} <span>{data?.highlight}</span>
          </h2>

          <p>
            {data?.desc || "Frontend Developer with experience in React and modern web technologies."}
          </p>

          <div className="about-stats">
            {data?.stats?.map((item) => (
              <div className="stat-box" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="btn-wrapper">
            <a className="cmn-btn" href="#contact" aria-label="Contact Vishali">
              Get in Touch
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;