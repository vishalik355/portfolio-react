function Services({ data }) {
  return (
    <section id="services" className="services">
      <div className="container">

        <h3>{data?.tag}</h3>
        <h2 className="section-title">{data?.title}</h2>

        <div className="service-grid">
          {data?.services?.map((item) => (
            <div className="service-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;