import { useState } from "react";
import ArloImg from "./assets/Arlo.jpeg";
import JaxonImg from "./assets/Jaxon.jpeg";
import LyraImg from "./assets/Lyra.jpeg";
import NovaImg from "./assets/Nova.jpeg";

function CardWithCSS({ img, name, company, talkTitle }) {
  return (
    <div className="w-96 space-y-4">
      <div className="relative rounded-2xl overflow-hidden group`">
        <img src={img} alt={name} className="grayscale" />
        <div className="absolute inset-0 hidden group-hover:flex flex-col bg-orange-400 p-8 justify-end gap-1 backdrop-blur-md">
          <p>Talk Title</p>
          <p className="text-2xl font-bold">{talkTitle}</p>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xl font-bold">{name}</p>
        <p>{company}</p>
      </div>
    </div>
  );
}

function CardWithJS({ img, name, company, talkTitle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-96 space-y-4">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-2xl overflow-hidden"
      >
        <img src={img} alt={name} className="grayscale" />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col bg-orange-400 p-8 justify-end gap-1 backdrop-blur-md">
            <p>Talk Title</p>
            <p className="text-2xl font-bold">{talkTitle}</p>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xl font-bold">{name}</p>
        <p>{company}</p>
      </div>
    </div>
  );
}

function App() {
  const react2030Speakers = [
    {
      name: "Jaxon Anderton",
      talkTitle: "Quantum Hooks in React",
      company: "NeuralNet Synergy",
      img: JaxonImg,
    },
    {
      name: "Lyra Zeller",
      talkTitle: "Quantum Reactivity",
      company: "QuantumSphere Innovations",
      img: LyraImg,
    },
  ];

  const react2035Speakers = [
    {
      name: "Nova Eldridge",
      talkTitle: "AI-Powered React UIs",
      company: "Synaptic Web Tech",
      img: NovaImg,
    },
    {
      name: "Arlo Vance",
      talkTitle: "Neural Interfaces with React",
      company: "MindWave Solutions",
      img: ArloImg,
    },
  ];

  return (
    <main className="p-16">
      <h1 className="text-3xl font-bold mb-8">Speakers from the Future</h1>
      <h2 className="text-xl font-bold mb-4">React 2030 Speakers</h2>
      <div className="flex gap-16 mb-16">
        {react2030Speakers.map((speakerData) => (
          <CardWithCSS key={speakerData.name} {...speakerData} />
        ))}
      </div>
      <h2 className="text-xl font-bold mb-4">React 2035 Speakers</h2>
      <div className="flex gap-16">
        {react2035Speakers.map((speakerData) => (
          <CardWithJS key={speakerData.name} {...speakerData} />
        ))}
      </div>
    </main>
  );
}

export default App;
