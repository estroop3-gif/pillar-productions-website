"use client";

const projects = [
  {
    id: 1,
    title: "Brand Documentary",
    category: "Documentary",
    description: "A deep dive into the story behind an iconic brand.",
    image: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Product Launch",
    category: "Commercial",
    description: "High-energy campaign for a tech product launch.",
    image: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Music Video",
    category: "Music Video",
    description: "Cinematic visuals for an indie artist's debut single.",
    image: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Corporate Film",
    category: "Corporate",
    description: "Annual report video for a Fortune 500 company.",
    image: "/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Short Film",
    category: "Narrative",
    description: "Award-winning short exploring human connection.",
    image: "/placeholder-5.jpg",
  },
  {
    id: 6,
    title: "Event Highlight",
    category: "Event",
    description: "Dynamic coverage of a major industry conference.",
    image: "/placeholder-6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of projects we&apos;re proud to have been part of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Placeholder for project image */}
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Always visible info */}
              <div className="p-4 group-hover:opacity-0 transition-opacity">
                <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
