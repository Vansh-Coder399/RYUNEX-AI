const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 z-0"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Smarter, Not Harder?</h2>
        <p className="text-xl text-gray-300 mb-10">Join Ryunex and experience an AI that actually understands you.</p>
        {/* <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all duration-300 animate-pulse hover:animate-none transform hover:scale-105 cursor-pointer">
          Start Chatting with Ryunex
        </button> */}
      </div>
    </section>
  );
};

export default CTA;