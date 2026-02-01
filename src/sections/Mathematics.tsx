import { Calculator, FunctionSquare, Shapes, TrendingUp, Sigma, GitBranch } from 'lucide-react';

const mathTopics = [
  {
    id: 'algebra',
    title: 'Algebra & Functions',
    subtitle: 'From Linear to Advanced',
    icon: FunctionSquare,
    image: '/math-algebra.jpg',
    description: 'Master algebraic thinking from basic equations to complex functions and transformations.',
    highlights: [
      { title: 'Linear Equations', desc: 'Solving, graphing, systems' },
      { title: 'Quadratics', desc: 'Factoring, formula, graphs' },
      { title: 'Polynomials', desc: 'Operations, factor theorem' },
      { title: 'Rational Functions', desc: 'Asymptotes, domains' },
      { title: 'Exponentials', desc: 'Growth, decay, logarithms' },
      { title: 'Function Transformations', desc: 'Shifts, stretches, reflections' },
    ],
  },
  {
    id: 'geometry',
    title: 'Geometry & Trigonometry',
    subtitle: 'Shapes, Space & Angles',
    icon: Shapes,
    image: '/math-geometry.jpg',
    description: 'Explore spatial relationships, geometric proofs, and trigonometric applications.',
    highlights: [
      { title: 'Euclidean Geometry', desc: 'Proofs, theorems, constructions' },
      { title: 'Coordinate Geometry', desc: 'Distance, midpoint, slope' },
      { title: 'Triangle Theorems', desc: 'Pythagorean, similarity, congruence' },
      { title: 'Circle Theorems', desc: 'Angles, chords, tangents' },
      { title: 'Trigonometry', desc: 'Sine, cosine, tangent, identities' },
      { title: '3D Geometry', desc: 'Volume, surface area, solids' },
    ],
  },
  {
    id: 'calculus',
    title: 'Calculus & Analysis',
    subtitle: 'Rates of Change & Accumulation',
    icon: TrendingUp,
    image: '/math-calculus.jpg',
    description: 'Understand the mathematics of change through differentiation and integration.',
    highlights: [
      { title: 'Limits', desc: 'Continuity, infinite limits, L\'Hopital' },
      { title: 'Derivatives', desc: 'Rules, applications, optimization' },
      { title: 'Integration', desc: 'Techniques, areas, volumes' },
      { title: 'Differential Equations', desc: 'First order, separable, linear' },
      { title: 'Series', desc: 'Convergence, Taylor, power series' },
      { title: 'Multivariable', desc: 'Partial derivatives, gradients' },
    ],
  },
  {
    id: 'statistics',
    title: 'Statistics & Probability',
    subtitle: 'Data Analysis & Inference',
    icon: TrendingUp,
    image: '/math-statistics.jpg',
    description: 'Learn to collect, analyze, and interpret data for informed decision-making.',
    highlights: [
      { title: 'Descriptive Stats', desc: 'Mean, median, mode, spread' },
      { title: 'Probability', desc: 'Rules, distributions, Bayes' },
      { title: 'Normal Distribution', desc: 'Z-scores, central limit theorem' },
      { title: 'Hypothesis Testing', desc: 'T-tests, chi-square, ANOVA' },
      { title: 'Regression', desc: 'Linear, correlation, prediction' },
      { title: 'Sampling', desc: 'Methods, bias, confidence intervals' },
    ],
  },
  {
    id: 'discrete',
    title: 'Discrete Mathematics',
    subtitle: 'Logic, Sets & Algorithms',
    icon: GitBranch,
    image: '/math-discrete.jpg',
    description: 'Study mathematical structures that are fundamentally discrete rather than continuous.',
    highlights: [
      { title: 'Set Theory', desc: 'Operations, Venn diagrams, cardinality' },
      { title: 'Logic', desc: 'Propositions, truth tables, proofs' },
      { title: 'Combinatorics', desc: 'Permutations, combinations, counting' },
      { title: 'Graph Theory', desc: 'Trees, paths, networks, coloring' },
      { title: 'Number Theory', desc: 'Primes, modular arithmetic, GCD' },
      { title: 'Algorithms', desc: 'Complexity, sorting, searching' },
    ],
  },
];

export function Mathematics() {
  return (
    <section id="mathematics" className="py-20 md:py-32 bg-[hsl(220_25%_8%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(45_100%_55%/0.1)] border border-[hsl(45_100%_55%/0.3)] mb-6">
            <Calculator className="w-4 h-4 text-[hsl(45_100%_55%)]" />
            <span className="text-sm text-[hsl(45_100%_55%)]">Mathematics Strand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock the Power of <span className="text-gradient-gold">Numbers</span>
          </h2>
          <p className="text-lg text-[hsl(220_10%_60%)] max-w-3xl mx-auto">
            From foundational concepts to advanced analysis, our mathematics curriculum 
            develops logical thinking and problem-solving skills essential for STEM success.
          </p>
        </div>

        {/* Math Topics Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured - Large Card */}
          <div className="lg:col-span-2 group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(45_100%_55%/0.4)] transition-all duration-500">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={mathTopics[0].image}
                  alt={mathTopics[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(220_25%_8_/0.9)] md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/0.9)] to-transparent md:hidden" />
              </div>
              <div className="p-8 bg-[hsl(220_20%_12%)] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {(() => {
                    const IconComponent = mathTopics[0].icon;
                    return <IconComponent className="w-5 h-5 text-[hsl(45_100%_55%)]" />;
                  })()}
                  <span className="text-sm text-[hsl(45_100%_55%)]">{mathTopics[0].subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[hsl(45_100%_55%)] transition-colors">
                  {mathTopics[0].title}
                </h3>
                <p className="text-[hsl(220_10%_60%)] mb-6">{mathTopics[0].description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {mathTopics[0].highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-[hsl(220_20%_10%)] border border-[hsl(220_15%_18%)] hover:border-[hsl(45_100%_55%/0.3)] transition-all"
                    >
                      <h4 className="text-sm font-semibold text-white">{highlight.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side Card - Geometry */}
          <div className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(45_100%_55%/0.4)] transition-all duration-500">
            <div className="relative h-48 overflow-hidden">
              <img
                src={mathTopics[1].image}
                alt={mathTopics[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/1)] via-[hsl(220_25%_8_/0.7)] to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(220_25%_8_/0.8)] backdrop-blur-sm border border-[hsl(45_100%_55%/0.3)]">
                {(() => {
                  const IconComponent = mathTopics[1].icon;
                  return <IconComponent className="w-4 h-4 text-[hsl(45_100%_55%)]" />;
                })()}
                <span className="text-xs text-[hsl(45_100%_55%)]">{mathTopics[1].subtitle}</span>
              </div>
            </div>
            <div className="p-6 bg-[hsl(220_20%_12%)]">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[hsl(45_100%_55%)] transition-colors">
                {mathTopics[1].title}
              </h3>
              <p className="text-sm text-[hsl(220_10%_60%)]">{mathTopics[1].description}</p>
            </div>
          </div>

          {/* Remaining Cards */}
          {mathTopics.slice(2).map((topic) => (
            <div
              key={topic.id}
              className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(45_100%_55%/0.4)] transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/1)] via-[hsl(220_25%_8_/0.7)] to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(220_25%_8_/0.8)] backdrop-blur-sm border border-[hsl(45_100%_55%/0.3)]">
                  <topic.icon className="w-4 h-4 text-[hsl(45_100%_55%)]" />
                  <span className="text-xs text-[hsl(45_100%_55%)]">{topic.subtitle}</span>
                </div>
              </div>
              <div className="p-6 bg-[hsl(220_20%_12%)]">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[hsl(45_100%_55%)] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-[hsl(220_10%_60%)] mb-4">{topic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {topic.highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-[hsl(220_20%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(220_10%_60%)]"
                    >
                      {highlight.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Math Quote Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[hsl(220_20%_12%)] via-[hsl(220_20%_14%)] to-[hsl(220_20%_12%)] border border-[hsl(220_15%_20%)] text-center">
          <Sigma className="w-12 h-12 text-[hsl(45_100%_55%)] mx-auto mb-4" />
          <blockquote className="text-xl md:text-2xl text-white font-light italic mb-4">
            "Mathematics is the language in which God has written the universe."
          </blockquote>
          <cite className="text-[hsl(220_10%_50%)]">— Galileo Galilei</cite>
          <p className="mt-6 text-[hsl(220_10%_60%)] max-w-2xl mx-auto">
            Our mathematics curriculum builds fluency in this universal language, 
            empowering students to describe, analyze, and shape the world around them.
          </p>
        </div>
      </div>
    </section>
  );
}
