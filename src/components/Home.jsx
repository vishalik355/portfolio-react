function Home({ data }) {
  return (
    <section id="home" className="home">
      <div className="container home-content">

        {/* LEFT */}
        <div className="home-left">
          <h4 className="tag">HELLO I'M</h4>

          <h1>
            {data?.name} 👋 <br />
            <span>{data?.title}</span>
          </h1>

          <h3 className="subheading">{data?.subtitle}</h3>

          <p>{data?.desc}</p>

          <div className="hero-btn-wrapper">
            <a href="#projects">
              <button className="btn">View Projects</button>
            </a>

            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn">Download Resume</button>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right">
          <div className="image-wrapper">
            <img src="/profile.jpeg" alt="Vishali profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;