import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
// import emailjs from "emailjs-com";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_EMAIL_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");

    if (data.success) {
      form.reset();
    }
  };

  return (
    <div id="Contact" className="py-20 px-4 lg:px-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-zinc-800  font-orbitron">
        Get in <span className="text-cyan-600">Touch</span>
      </h2>

      <div className="relative bg-white/40 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl shadow-2xl p-8 lg:p-16 max-w-4xl mx-auto">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Side */}
          <div className="mb-8 lg:mb-0 space-y-6">
            <p className="text-zinc-700  dark:text-zinc-300 font-space-grotesk text-lg">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you want me to work on. You can
              contact me anytime.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <span className="text-cyan-600">📧</span>
                <a
                  href="dipurd19@email.com"
                  className="hover:underline font-space-grotesk"
                >
                  dipurd19@email.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <span className="text-cyan-600">📍</span>
                <span className="font-space-grotesk">Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/dipu-reactdev"
                target="_blank"
                className="text-zinc-900 hover:text-blue-500 transition text-2xl"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/Navied-dipu"
                target="_blank"
                className="text-zinc-900 hover:text-gray-700 transition text-2xl"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.facebook.com/naviedsiddque.dipu"
                target="_blank"
                className="text-zinc-900 hover:text-pink-500 transition text-2xl"
              >
                <FiFacebook />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                className="text-zinc-900 hover:text-blue-400 transition text-2xl"
              >
                <FiTwitter />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                className="text-zinc-900 hover:text-pink-500 transition text-2xl"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <form onSubmit={onSubmit} className="space-y-6 w-full">
            <input
              className="peer w-full p-4 rounded-xl border border-cyan-400 bg-white text-zinc-900  focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="peer w-full p-4 rounded-xl border border-cyan-400 bg-white text-zinc-900  focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              name="email"
              placeholder="email"
              required
            />

            <textarea
              className="textarea textarea-ghost  border-cyan-400  focus:ring-cyan-500 w-full bg-white text-zinc-900 "
              placeholder="text"
              name="message"
              required
            ></textarea>
            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 shadow-lg transition-all"
            >
              Send Message
            </motion.button>

            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
