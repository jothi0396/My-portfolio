export default function Contact() {
  const config = {
    email: "jothimarimuthu0717@gmail.com",
    phone: "+1 240-549-4628",
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-primary px-5 py-32 text-white"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          Feel free to contact me if you'd like to learn more about my skills
          and experience.
        </p>
        <p className="py-2">
          <span className="font-bold">Email :</span> {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone :</span> {config.phone}
        </p>
      </div>
    </section>
  );
}
