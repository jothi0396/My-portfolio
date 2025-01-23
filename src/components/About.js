import AboutImg from "../assets/aboutt.png";

export default function About() {
  const config = {
    line1:
      "A passionate Front-End Developer who loves turning ideas into beautiful, user-friendly digital experiences. With a strong foundation in HTML, CSS, JavaScript, and modern front-end frameworks such as React, Angular and Vue. I bring creativity and technical expertise to every project I work on.",
    line2:
      "From designing sleek interfaces to crafting responsive websites that perform seamlessly across devices, I am dedicated to delivering high-quality, accessible, and engaging web solutions.",
    line3:
      "Feel free to explore my work and see how I can help bring your vision to life!",
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
