import { useEffect, useState } from "react";

const messages = [
  "Let's break it down together.",
  "You're not late.",
  "You're learning."
];

const Hero = () => {
  // Logic from card.jsx
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index >= messages.length) return;

    const timeout = setTimeout(() => {
      setText((prev) => prev + messages[index][charIndex]);
      setCharIndex(charIndex + 1);

      if (charIndex === messages[index].length - 1) {
        setIndex(index + 1);
        setCharIndex(0);
        setText((prev) => prev + "\n");
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent"
              ><span className="
  inline-block
  sm:text-5xl lg:text-6xl
  font-bold
  uppercase
  tracking-widest
  bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400
  bg-clip-text text-transparent
  animate-pulse
  drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]
">
  RYUNEX AI is coming soon
</span>

                <br />
                Your Smart AI Companion for Growth, Focus & Peace
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              RyuneX is an Indian AI built for students, coders, and focused minds.
              Not just answers — guidance, clarity, and support when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Start Chat →
              </button> */}
            </div>
          </div>

          <div className="relative lg:h-[500px] flex items-center justify-center">
            {/* Abstract Shapes */}
            <div className="absolute w-72 h-72 bg-purple-600/30 rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-1000"></div>

            {/* Merged Card Code from card.jsx */}
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 w-full max-w-md">
              {/* Top Bar */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-3 text-xs text-white/60">Ryunex AI</span>
              </div>

              {/* Chat Content */}
              <p className="text-sm text-white/80 mb-2">
                <span className="text-purple-400">User:</span> I'm feeling confused about my future.
              </p>

              <pre className="text-sm text-cyan-300 whitespace-pre-wrap font-mono">
                <span className="text-purple-400">Ryunex:</span> {text}
                <span className="animate-pulse">|</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;