import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-screen p-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        {/* Image */}
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Hero Image"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-700 font-orbitron leading-tight">
            MERN Stack Developer
            <br />
            <span className="text-cyan-700 block">JavaScript</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-space-grotesk text-zinc-900 pt-3 pb-4 max-w-xl mx-auto lg:mx-0">
            I craft immersive web experiences at the intersection of design and
            technology.
          </p>

          <button className="btn bg-black rounded-full font-space-grotesk  btn-primary w-full sm:w-auto">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
