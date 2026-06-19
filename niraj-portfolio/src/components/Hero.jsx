function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">

        <h1 className="text-6xl font-bold mb-4">
          Niraj Patel
        </h1>

        <h2 className="text-2xl text-gray-400 mb-6">
          Java Full Stack Developer
        </h2>

        <p className="max-w-xl text-gray-500 mx-auto">
          Building scalable web applications using Java,
          Spring Boot, React and PostgreSQL.
        </p>

      </div>
    </section>
  );
}

export default Hero;