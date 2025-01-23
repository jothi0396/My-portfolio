import ResumeImg from "../assets/resume.jpg";
// import resume from "../assets/Jothimani_Marimuthu-2024"

export default function Resume() {
  const config = {
    link: "/Jothimani_Marimuthu-20240618.pdf", // Corrected path
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5"
    >
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            View my resume by clicking a download button .{" "}
            <a className="btn" href={config.link} download>
              Download
            </a>
            {/* <a className="btn" href="" download="resume">
              {" "}
              Download
            </a> */}
          </p>
        </div>
      </div>
    </section>
  );
}
