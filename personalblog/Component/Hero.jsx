export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#21251F] text-white px-6">
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8F560]/10 via-transparent to-[#7862F8]/10 pointer-events-none"></div>

      {/* Content */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
        Welcome to <span className="text-[#C8F560]">LØTEX</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl text-gray-300 mb-8">
        A private social space to connect, share, and keep your memories safe.  
        Secure. Fun. Just for your close circle.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="#get-started"
          className="px-6 py-3 rounded-2xl bg-[#C8F560] text-black font-semibold shadow-lg hover:scale-105 transition"
        >
          Get Started
        </a>
        <a
          href="#learn-more"
          className="px-6 py-3 rounded-2xl bg-[#7862F8] text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Learn More
        </a>
      </div>

      {/* Floating Accent Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#7862F8]/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C8F560]/30 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}