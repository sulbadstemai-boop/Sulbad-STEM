import { FlaskConical, Atom, Microscope, Globe, Zap, Beaker } from 'lucide-react';

const scienceTopics = [
  {
    id: 'physics',
    title: 'Physics & Mechanics',
    subtitle: 'General Physics 1 & 2',
    icon: Zap,
    image: '/science-physics.jpg',
    description: 'Master the fundamentals of mechanics, thermodynamics, electricity, and magnetism with precision visualizations.',
    highlights: [
      { title: 'Free-Body Diagrams', desc: 'Vector force analysis and equilibrium' },
      { title: 'Kinematics Graphs', desc: 'Position, velocity, acceleration relationships' },
      { title: 'Circuit Analysis', desc: 'Ohm\'s Law, Kirchhoff\'s Laws, series & parallel' },
      { title: 'Wave Phenomena', desc: 'Sound, light, and electromagnetic waves' },
      { title: 'Thermodynamics', desc: 'Heat transfer, laws of thermodynamics' },
      { title: 'Modern Physics', desc: 'Quantum mechanics and relativity basics' },
    ],
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    subtitle: 'General & Organic Chemistry',
    icon: Beaker,
    image: '/science-chemistry.jpg',
    description: 'Explore atomic structure, chemical bonding, reactions, and stoichiometry through interactive molecular visualizations.',
    highlights: [
      { title: 'Atomic Structure', desc: 'Bohr model, quantum numbers, orbitals' },
      { title: 'Chemical Bonding', desc: 'Ionic, covalent, metallic bonds' },
      { title: 'Stoichiometry', desc: 'Mole concept, balancing equations' },
      { title: 'Reaction Types', desc: 'Synthesis, decomposition, redox reactions' },
      { title: 'Organic Chemistry', desc: 'Hydrocarbons, functional groups, isomers' },
      { title: 'Acids & Bases', desc: 'pH, titration, buffer solutions' },
    ],
  },
  {
    id: 'biology',
    title: 'Biology & Life Sciences',
    subtitle: 'Cell Biology to Ecology',
    icon: Microscope,
    image: '/science-biology.jpg',
    description: 'Journey from cellular processes to ecosystem dynamics with comprehensive life science content.',
    highlights: [
      { title: 'Cell Structure', desc: 'Organelles, membrane transport, cell division' },
      { title: 'Genetics', desc: 'DNA replication, transcription, translation' },
      { title: 'Evolution', desc: 'Natural selection, speciation, phylogeny' },
      { title: 'Human Physiology', desc: 'Body systems, homeostasis, health' },
      { title: 'Ecology', desc: 'Ecosystems, biodiversity, conservation' },
      { title: 'Biotechnology', desc: 'Genetic engineering, CRISPR, applications' },
    ],
  },
  {
    id: 'earth-science',
    title: 'Earth & Environmental Science',
    subtitle: 'Geology, Meteorology, Astronomy',
    icon: Globe,
    image: '/science-earth.jpg',
    description: 'Understand our planet and beyond through integrated earth science and environmental studies.',
    highlights: [
      { title: 'Plate Tectonics', desc: 'Earthquakes, volcanoes, mountain formation' },
      { title: 'Weather & Climate', desc: 'Atmospheric processes, climate change' },
      { title: 'Rocks & Minerals', desc: 'Igneous, sedimentary, metamorphic rocks' },
      { title: 'Solar System', desc: 'Planets, moons, asteroids, comets' },
      { title: 'Natural Resources', desc: 'Water, minerals, energy sources' },
      { title: 'Environmental Issues', desc: 'Pollution, sustainability, conservation' },
    ],
  },
];

export function Science() {
  return (
    <section id="science" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(220_25%_8%)] to-[hsl(220_30%_10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(140_70%_50%/0.1)] border border-[hsl(140_70%_50%/0.3)] mb-6">
            <FlaskConical className="w-4 h-4 text-[hsl(140_70%_50%)]" />
            <span className="text-sm text-[hsl(140_70%_50%)]">Science Strand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Explore the <span className="text-gradient">Natural World</span>
          </h2>
          <p className="text-lg text-[hsl(220_10%_60%)] max-w-3xl mx-auto">
            From microscopic cells to cosmic phenomena, our science curriculum brings 
            abstract concepts to life through stunning visualizations and hands-on learning.
          </p>
        </div>

        {/* Science Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {scienceTopics.map((topic) => (
            <div
              key={topic.id}
              className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(140_70%_50%/0.4)] transition-all duration-500"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/1)] via-[hsl(220_25%_8_/0.8)] to-transparent" />
                
                {/* Topic Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(220_25%_8_/0.8)] backdrop-blur-sm border border-[hsl(140_70%_50%/0.3)]">
                  <topic.icon className="w-4 h-4 text-[hsl(140_70%_50%)]" />
                  <span className="text-xs text-[hsl(140_70%_50%)]">{topic.subtitle}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 bg-[hsl(220_20%_12%)]">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[hsl(140_70%_50%)] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-[hsl(220_10%_60%)] mb-6">{topic.description}</p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {topic.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="p-3 rounded-lg bg-[hsl(220_20%_10%)] border border-[hsl(220_15%_18%)] hover:border-[hsl(140_70%_50%/0.3)] transition-all"
                    >
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-[hsl(220_10%_50%)]">{highlight.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(140_70%_50%/0.05)] to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-[hsl(220_20%_12%)] border border-[hsl(220_15%_20%)]">
            <Atom className="w-12 h-12 text-[hsl(140_70%_50%)]" />
            <div className="text-left">
              <h4 className="text-lg font-semibold text-white">Ready to transform science education?</h4>
              <p className="text-sm text-[hsl(220_10%_60%)]">
                Our visualizations make complex concepts accessible to every student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
