export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Animated background element */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-700 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Stories That
          <span className="block text-amber-500">Move You</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
          We craft compelling visual narratives that captivate audiences and elevate brands.
          From concept to final cut, we bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#work"
            className="bg-amber-500 text-black px-8 py-4 rounded text-lg font-medium hover:bg-amber-400 transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="border border-white/30 text-white px-8 py-4 rounded text-lg font-medium hover:bg-white/10 transition-colors"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
