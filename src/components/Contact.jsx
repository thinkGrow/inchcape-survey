import React from "react";
import { Phone, MapPin, Globe, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-white to-blue-50 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            We're here to help with any survey or inspection inquiries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 text-gray-700">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-800" />
              <p className=" text-blue-900 font-medium">+880-1766130834</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-800" />
              <a
                href="mailto:captainfazlayuddin@gmail.com"
                className="hover:underline text-blue-900 font-medium"
              >
                captainfazlayuddin@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-800 mt-1" />
              <p className="text-blue-900 font-medium leading-snug">
                1147/A, IFCO Complex,
                <br />
                GEC Circle, Khulshi,
                <br />
                Chattogram-4225, Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-blue-800" />
              <a
                href="https://www.inchcapesurvey.com"
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-blue-900 font-medium"
              >
                www.inchcapesurvey.com
              </a>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-white rounded-xl shadow p-6 space-y-6">
            <p className="text-lg font-semibold text-blue-900">
              Ready to chat?
            </p>
            <p className="text-sm text-gray-600">
              Tap below to start a WhatsApp conversation with us.
            </p>
            <a
              // href="https://wa.me/8801766130834"
              href="https://wa.me/8801789902282"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded hover:bg-green-600 transition text-sm font-semibold"
            >
              <FaWhatsapp className="w-4 h-4"></FaWhatsapp>
              {/* <MessageCircleMore  /> */}
              Chat With Us
            </a>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-500">Prefer a call?</p>
              <p className="text-blue-800 font-semibold">
                Call +880-1766130834
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
