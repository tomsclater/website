import React, { useState } from "react";
// import userData from "@constants/data";

export default function Project1() {
  const [inputText, setInputText] = useState("");
  const [asciiArt, setAsciiArt] = useState("");

  const generateAsciiArt = (text) => {
    // Simple ASCII Art generator logic
    if (!text) return;

    const asciiGenerated = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    setAsciiArt(asciiGenerated);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateAsciiArt(inputText);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Project 1
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:ml-4">
            <header>
              <h1 className="text-gray-50 font-semibold text-2xl">
                This is my first project.
              </h1>
              <p className="font-light text-base text-gray-200 mt-2">
                Take a look at my ASCII generator below.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              {/* Icons section removed for simplicity */}
            </div>

            <div className="social-icons flex flex-row space-x-8">
              {/* Social links section removed for simplicity */}
            </div>
          </div>

          {/* ASCII Art Generator Form */}
          <div className="ascii-art-section">
            <form
              className="form rounded-lg bg-white p-4 flex flex-col"
              onSubmit={handleSubmit}
            >
              <label htmlFor="text" className="text-sm text-gray-600 mx-4">
                Enter Text to Generate ASCII Art
              </label>
              <input
                type="text"
                className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                name="text"
                value={inputText}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
              >
                Generate ASCII Art
              </button>
            </form>

            {asciiArt && (
              <div className="ascii-art-output mt-10 p-4 bg-gray-800 text-gray-50 font-mono">
                <pre>{asciiArt}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
