import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Us</h3>
        <div className="space-y-2 text-center text-sm">
          <p>
            <strong>Phone:</strong> +880-1766130834
          </p>
          <p>
            <strong>Email:</strong> captainfazlayuddin@gmail.com
          </p>
          <p>
            <strong>Address:</strong> 1147/A, IFCO Complex, GEC Circle, Khulshi,
            Chattogram-4225, Bangladesh
          </p>
          <a
            href="http://www.inchcapesurvey.com"
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            www.inchcapesurvey.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
