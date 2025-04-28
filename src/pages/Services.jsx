function Services() {
  return (
    <main className="w-full bg-neutral-900 py-16 px-4">
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#bfa14a] text-center mb-4 tracking-tight drop-shadow">SERVICES WE OFFER</h2>
        <p className="text-lg text-neutral-200 text-center mb-8">
          Whatever your fitness level, we've got services to help <br />
          you move better, feel stronger, and stay motivated.
        </p>
      </section>
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#bfa14a] text-center mb-4 tracking-tight">PERSONAL TRAINING PACKAGES</h2>
        <p className="text-lg text-neutral-200 text-center mb-8">
          Crush your goals with tailored workouts <br />
          and expert guidance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-[#bfa14a]/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/bodytoning.png" alt="Body Toning" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Body Toning</h3>
            <p className="text-neutral-200">Focus on sculpting and defining muscles through targeted exercises that improve strength and shape your body.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#bfa14a]/10 border border-[#bfa14a] rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/strengthandconditioning.png" alt="Strength and Conditioning" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Strength and Conditioning</h3>
            <p className="text-neutral-200">A full-body program that builds strength, power, and endurance, improving your performance in any physical activity.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-[#bfa14a]/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/circuittraining.png" alt="Circuit Training" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Circuit Training</h3>
            <p className="text-neutral-200">A fast-paced workout that alternates between different exercises, designed to boost cardiovascular fitness and muscle endurance.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#bfa14a]/10 border border-[#bfa14a] rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/athletictraining.png" alt="Athletic Training" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Athletic Training</h3>
            <p className="text-neutral-200">Sports-specific exercises aimed at improving strength, speed, agility, and performance.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-[#bfa14a]/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/weightlossgain.png" alt="Weight Loss/Gain" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Weight Loss/ Gain</h3>
            <p className="text-neutral-200">Tailored programs to help you burn fat and boost metabolism, or build muscle and strength for healthy weight management.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#bfa14a]/10 border border-[#bfa14a] rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/runningclinic.png" alt="Running Clinic" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Running Clinic</h3>
            <p className="text-neutral-200">A specialized class to help you improve running form, increase endurance, and boost your speed, whether you're a beginner or seasoned runner.</p>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#bfa14a] text-center mb-4 tracking-tight">GROUP CLASSES</h2>
        <p className="text-lg text-neutral-200 text-center mb-8">
          Stay active and inspired with our variety of <br />
          group fitness classes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-[#bfa14a]/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/tabataclass.png" alt="Tabata Class" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Tabata Class</h3>
            <p className="text-neutral-200">A high-intensity interval training (HIIT) format featuring short bursts of maximum-effort exercise followed by rest.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#bfa14a]/10 border border-[#bfa14a] rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/dynamicfuntionaltraining.png" alt="Dynamic Functional Training" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Dynamic Functional Training</h3>
            <p className="text-neutral-200">Train with movements that mimic daily activities to improve strength, mobility, and performance.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-[#bfa14a]/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/zumbaclass.png" alt="Zumba Class" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Zumba Class</h3>
            <p className="text-neutral-200">An energetic dance-based workout that blends fun music with easy-to-follow moves to get your heart pumping and burn calories.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#bfa14a]/10 border border-[#bfa14a] rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/yogaclass.png" alt="Yoga Class" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Yoga Class</h3>
            <p className="text-neutral-200">A mindful class combining stretching, breathing, and relaxation techniques to improve flexibility, mental clarity, and wellness.</p>
          </div>
          {/* Card 5 */}
          <div className="bg-neutral-800 rounded-2xl shadow-xl p-7 flex flex-col items-center text-center border border-[#bfa14a]/30 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/boxingclass.png" alt="Boxing Class" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Boxing Class</h3>
            <p className="text-neutral-200">A total-body workout using boxing techniques, helping build strength, endurance, and coordination while relieving stress.</p>
          </div>
          {/* Card 6 */}
          <div className="bg-[#bfa14a]/10 border border-[#bfa14a] rounded-2xl shadow-xl p-7 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-200">
            <img src="/assets/images/muaythaiclass.png" alt="Muay Thai Class" className="h-20 mb-4" />
            <h3 className="text-xl font-bold text-[#bfa14a] mb-2">Muay Thai Class</h3>
            <p className="text-neutral-200">A high-intensity combat training class focusing on punches, kicks, elbows, and knees, designed to improve fitness and self-defense skills.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
