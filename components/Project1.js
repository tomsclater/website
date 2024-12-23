import React, { useState } from "react";

export default function Project1() {
  const [password, setPassword] = useState("");

  // Function to generate hacker speak password
  const generateHackerPassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const leetMapping = {
      A: "4",
      B: "8",
      E: "3",
      G: "6",
      H: "#",
      I: "1",
      O: "0",
      S: "5",
      T: "7",
      Z: "2",
      a: "4",
      e: "3",
      l: "1",
      o: "0",
      s: "5",
      t: "7",
    };

    let passwordLength = 12; // You can customize the length
    let passwordGenerated = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
      const leetChar = leetMapping[randomChar] || randomChar;
      passwordGenerated += leetChar;
    }

    setPassword(passwordGenerated);
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
                Take a look at the Hacker Speak Password Generator below.
              </p>
            </header>
            <div className="icons-container inline-flex flex-col my-20">
              {/* Icons section removed for simplicity */}
            </div>
            <div className="social-icons flex flex-row space-x-8">
              {/* Social links section removed for simplicity */}
            </div>
          </div>

          {/* Hacker Speak Password Generator Form */}
          <div className="password-generator-section">
            <form
              className="form rounded-lg bg-white p-4 flex flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                generateHackerPassword();
              }}
            >
              <label htmlFor="password" className="text-sm text-gray-600 mx-4">
                Click the button to generate a hacker-style password
              </label>
              <button
                type="submit"
                className="bg-green-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
              >
                Generate Password
              </button>
            </form>

            {password && (
              <div className="password-output mt-10 p-4 bg-gray-800 text-gray-50 font-mono">
                <p className="text-center text-xl">Generated Password:</p>
                <pre className="text-center mt-2">{password}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
