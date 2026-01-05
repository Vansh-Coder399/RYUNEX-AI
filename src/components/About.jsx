const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0B0F1A] to-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-cyan-400">Why Ryunex Exists
                ?</span></h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ryunex was created to solve a simple problem:
              Most students feel lost, unheard, or overwhelmed.

              We wanted an AI that doesn't just reply —
              but understands.

              From late-night study stress to coding confusion,
              Ryunex stays with you as a smart, calm companion.

            </p>
            {/* <p className="text-gray-400 leading-relaxed">
              Our mission is to bridge the gap between complex AI capabilities and intuitive user experiences. Whether you are a startup or an enterprise, we bring a futuristic mindset to every project.
            </p> */}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl transform rotate-6 opacity-20 blur-lg"></div>
            <div className="relative bg-[#1F2937] p-8 rounded-2xl border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3 font-mono text-sm text-gray-300">
                <p><span className="text-purple-400">const</span> <span className="text-yellow-300">ryunex</span> = {`{`}</p>
                <p className="pl-4">purpose: <span className="text-green-400">"help humans grow"</span>,</p>
                <p className="pl-4">focus: [<span className="text-green-400">"learning"</span>, <span className="text-green-400">"clarity"</span>, <span className="text-green-400">"mental peace"</span>],</p>
                <p className="pl-4">builtFor: <span className="text-green-400">"students & creators"</span></p>
                <p>{`}`};</p>
                <p><span className="text-yellow-300">ryunex</span>.<span className="text-blue-400">stayWithYou</span>();</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;