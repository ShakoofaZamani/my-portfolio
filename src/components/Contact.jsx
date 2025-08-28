import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6 text-gray-600">
        Fill out the form below to get in touch with me.
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl p-4 bg-white rounded-2xl shadow-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScTwKYXal-FV5dqpPKMkUMSBxgXF80YplOc8M_UlEw2fLEcPA/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
