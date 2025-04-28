import React, { useState } from 'react';

const trainersData = [
  { name: 'Jason Jay M. Recto', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Ron Alexander Inocencio', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'John Aim Cabug', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Xerxes Jan Torralba', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Warren Pagsuyuin', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
  { name: 'Example Name', email: 'recanjc@gmail.com', img: 'https://via.placeholder.com/40' },
];

const TrainerPage = () => {
  const [selectedTrainerIndex, setSelectedTrainerIndex] = useState(1);

  return (
    <div className="w-full min-h-[60vh] flex flex-col md:flex-row gap-8 py-16 px-4 bg-neutral-900">
      <div className="md:w-1/3 w-full bg-neutral-800/80 rounded-xl shadow-lg p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-[#bfa14a] mb-2">List of Trainers</h2>
        <input type="text" placeholder="Search name of trainer" className="mb-4 px-3 py-2 rounded bg-neutral-900 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#bfa14a]" />
        <div className="flex flex-col gap-2">
          {trainersData.map((trainer, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 rounded cursor-pointer transition border border-transparent ${selectedTrainerIndex === index ? 'bg-[#bfa14a]/20 border-[#bfa14a]' : 'hover:bg-neutral-700'}`}
              onClick={() => setSelectedTrainerIndex(index)}
            >
              <img src={trainer.img} alt="Trainer" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-white">{trainer.name}</div>
                <div className="text-sm text-neutral-400">{trainer.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full aspect-video max-w-2xl rounded-xl overflow-hidden shadow-lg border-4 border-[#bfa14a]">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
