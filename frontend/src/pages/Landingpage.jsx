import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-yellow-400">Weirdest Moments in Cricket</h1>
        <p className="mt-3 text-lg text-gray-300">
          A community-driven platform to explore and vote on the funniest, weirdest, and most unexpected cricket moments!
        </p>
      </header>

      <div className="mt-8 flex space-x-4">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg">
          Sign Up
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
          Log In
        </button>
      </div>

      <section className="mt-12 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-yellow-400">Why Join?</h2>
        <ul className="mt-4 text-gray-300 space-y-2">
          <li>✅ Submit your favorite weird cricket moments</li>
          <li>✅ Vote on the funniest, strangest plays</li>
          <li>✅ Explore categorized moments</li>
          <li>✅ Engage with a cricket-loving community</li>
        </ul>
      </section>

    </div>
  );
};

export default LandingPage;
