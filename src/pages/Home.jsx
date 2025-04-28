import React from 'react';

function Home() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-10 md:py-20 overflow-hidden">
      {/* Animated, seamless, slow-panning logo background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none">
        <div className="flex w-[200vw] h-full animate-[logo-pan-slow_60s_linear_infinite]">
          <img
            src="/assets/images/Logo.png"
            alt="Amigos Gym Logo Background"
            className="w-full h-full object-cover object-center opacity-[0.07] scale-110"
            draggable="false"
          />
          <img
            src="/assets/images/Logo.png"
            alt="Amigos Gym Logo Background"
            className="w-full h-full object-cover object-center opacity-[0.07] scale-110"
            draggable="false"
          />
        </div>
      </div>
      {/* Hero glassmorphism card */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-5 py-10 md:py-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl ring-1 ring-[#bfa14a22] transition-all duration-300">
        <div className="h-1 w-16 bg-gradient-to-r from-[#bfa14a] to-[#6c5c2b] rounded-full mb-6 opacity-80 animate-pulseGold" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight drop-shadow-sm">
          <span className="text-[#bfa14a]">AMIGOS</span> <span className="text-white">GYM</span>
        </h1>
        <div className="flex flex-col gap-1 text-base md:text-lg text-center mb-8 text-white/90">
          <span><span className="text-[#bfa14a] font-semibold">Unleash</span> your strength.</span>
          <span><span className="text-[#bfa14a] font-semibold">Transform</span> your body.</span>
          <span><span className="text-[#bfa14a] font-semibold">Join the pride.</span></span>
        </div>
        <button className="mt-2 px-8 py-3 bg-[#bfa14a] text-black font-bold rounded shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-150">
          JOIN NOW
        </button>
      </div>
    </section>
  );
}

export default Home;