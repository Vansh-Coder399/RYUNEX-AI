const WhyChooseUs = () => {
  const points = [
    "Built by a student, for students",
    "No fake motivation — only practical guidance",
    "Focused on learning, not distraction",
    "Designed for real-life problems",
    "Growing step-by-step with community feedback"
  ];

  return (
    <section className="py-20 bg-[#0B0F1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Trust Ryunex?</h2>
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10">
          <ul className="space-y-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-lg text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 italic">"Growth is easier when you are not alone."
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;