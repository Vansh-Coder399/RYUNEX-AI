const Footer = () => {
  return (
    <footer className="bg-[#05080F] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-white">Ryunex AI

</span>
            <p className="text-gray-500 mt-2 text-sm">Built with ❤️ in India</p>
          </div>
          {/* <div className="flex space-x-6">
            {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                {social}
              </a>
            ))}
          </div> */}
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Ryunex AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;