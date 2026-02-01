import { Cog, Building2, Settings, Zap, Plane, Leaf } from 'lucide-react';

const engineeringTopics = [
  {
    id: 'civil',
    title: 'Civil Engineering',
    subtitle: 'Infrastructure & Construction',
    icon: Building2,
    image: '/eng-civil.jpg',
    description: 'Design and analyze structures, transportation systems, and urban infrastructure that shape our world.',
    highlights: [
      { title: 'Structural Analysis', desc: 'Forces, stress, strain, beam design' },
      { title: 'Surveying', desc: 'Land measurement, GPS, GIS technology' },
      { title: 'Materials Science', desc: 'Concrete, steel, composite materials' },
      { title: 'Transportation', desc: 'Roads, bridges, traffic engineering' },
      { title: 'Water Resources', desc: 'Hydrology, drainage, irrigation systems' },
      { title: 'Construction Management', desc: 'Project planning, cost estimation' },
    ],
  },
  {
    id: 'mechanical',
    title: 'Mechanical Engineering',
    subtitle: 'Machines & Thermal Systems',
    icon: Settings,
    image: '/eng-mechanical.jpg',
    description: 'Master the principles of mechanics, thermodynamics, and machine design for innovative solutions.',
    highlights: [
      { title: 'Statics & Dynamics', desc: 'Force systems, motion, equilibrium' },
      { title: 'Thermodynamics', desc: 'Heat engines, refrigeration cycles' },
      { title: 'Fluid Mechanics', desc: 'Bernoulli, Navier-Stokes, flow analysis' },
      { title: 'Machine Design', desc: 'Gears, bearings, mechanisms' },
      { title: 'Manufacturing', desc: 'CNC, 3D printing, quality control' },
      { title: 'CAD/CAM', desc: 'SolidWorks, AutoCAD, simulation tools' },
    ],
  },
  {
    id: 'electrical',
    title: 'Electrical Engineering',
    subtitle: 'Circuits & Power Systems',
    icon: Zap,
    image: '/eng-electrical.jpg',
    description: 'Explore the fundamentals of electricity, electronics, and power generation and distribution.',
    highlights: [
      { title: 'Circuit Analysis', desc: 'Kirchhoff laws, Thevenin, Norton' },
      { title: 'Electronics', desc: 'Diodes, transistors, op-amps, digital logic' },
      { title: 'Power Systems', desc: 'Generation, transmission, distribution' },
      { title: 'Control Systems', desc: 'Feedback, stability, PID controllers' },
      { title: 'Signal Processing', desc: 'Fourier analysis, filters, modulation' },
      { title: 'Microcontrollers', desc: 'Arduino, PIC, embedded systems' },
    ],
  },
  {
    id: 'aerospace',
    title: 'Aerospace Engineering',
    subtitle: 'Flight & Space Systems',
    icon: Plane,
    image: '/eng-aerospace.jpg',
    description: 'Understand the principles of flight, spacecraft design, and the challenges of space exploration.',
    highlights: [
      { title: 'Aerodynamics', desc: 'Lift, drag, airfoil design, CFD' },
      { title: 'Propulsion', desc: 'Jet engines, rockets, thrust analysis' },
      { title: 'Flight Mechanics', desc: 'Stability, control, navigation' },
      { title: 'Orbital Mechanics', desc: 'Kepler laws, satellite orbits' },
      { title: 'Spacecraft Design', desc: 'Structures, thermal, power systems' },
      { title: 'Avionics', desc: 'Flight instruments, autopilot systems' },
    ],
  },
  {
    id: 'environmental',
    title: 'Environmental Engineering',
    subtitle: 'Sustainability & Green Tech',
    icon: Leaf,
    image: '/eng-environmental.jpg',
    description: 'Develop sustainable solutions for environmental challenges and green infrastructure.',
    highlights: [
      { title: 'Water Treatment', desc: 'Purification, wastewater management' },
      { title: 'Air Quality', desc: 'Pollution control, emissions monitoring' },
      { title: 'Waste Management', desc: 'Recycling, composting, disposal' },
      { title: 'Renewable Energy', desc: 'Solar, wind, hydro, geothermal' },
      { title: 'Green Buildings', desc: 'LEED certification, energy efficiency' },
      { title: 'Climate Adaptation', desc: 'Resilient design, mitigation strategies' },
    ],
  },
];

export function Engineering() {
  return (
    <section id="engineering" className="py-20 md:py-32 bg-gradient-to-b from-[hsl(220_25%_8%)] to-[hsl(220_30%_10%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(280_70%_55%/0.1)] border border-[hsl(280_70%_55%/0.3)] mb-6">
            <Cog className="w-4 h-4 text-[hsl(280_70%_55%)]" />
            <span className="text-sm text-[hsl(280_70%_55%)]">Engineering Strand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Build the <span className="text-gradient">Future</span>
          </h2>
          <p className="text-lg text-[hsl(220_10%_60%)] max-w-3xl mx-auto">
            From bridges to spacecraft, our engineering curriculum combines theoretical knowledge 
            with practical design challenges to create the innovators of tomorrow.
          </p>
        </div>

        {/* Engineering Topics - Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Card */}
          <div className="md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(280_70%_55%/0.4)] transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={engineeringTopics[0].image}
                  alt={engineeringTopics[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(220_25%_8_/0.9)] lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/0.9)] to-transparent lg:hidden" />
              </div>
              <div className="p-8 bg-[hsl(220_20%_12%)] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {(() => {
                    const IconComponent = engineeringTopics[0].icon;
                    return <IconComponent className="w-5 h-5 text-[hsl(280_70%_55%)]" />;
                  })()}
                  <span className="text-sm text-[hsl(280_70%_55%)]">{engineeringTopics[0].subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[hsl(280_70%_55%)] transition-colors">
                  {engineeringTopics[0].title}
                </h3>
                <p className="text-[hsl(220_10%_60%)] mb-6">{engineeringTopics[0].description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {engineeringTopics[0].highlights.slice(0, 4).map((highlight, index) => (
                    <div key={index} className="p-3 rounded-lg bg-[hsl(220_20%_10%)] border border-[hsl(220_15%_18%)]">
                      <h4 className="text-xs font-semibold text-white">{highlight.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Side Card */}
          <div className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(280_70%_55%/0.4)] transition-all duration-500">
            <div className="relative h-40 overflow-hidden">
              <img
                src={engineeringTopics[1].image}
                alt={engineeringTopics[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/1)] via-[hsl(220_25%_8_/0.7)] to-transparent" />
            </div>
            <div className="p-6 bg-[hsl(220_20%_12%)]">
              <div className="flex items-center gap-2 mb-2">
                {(() => {
                  const IconComponent = engineeringTopics[1].icon;
                  return <IconComponent className="w-4 h-4 text-[hsl(280_70%_55%)]" />;
                })()}
                <span className="text-xs text-[hsl(280_70%_55%)]">{engineeringTopics[1].subtitle}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[hsl(280_70%_55%)] transition-colors">
                {engineeringTopics[1].title}
              </h3>
              <p className="text-sm text-[hsl(220_10%_60%)]">{engineeringTopics[1].description}</p>
            </div>
          </div>

          {/* Remaining Cards */}
          {engineeringTopics.slice(2).map((topic) => (
            <div
              key={topic.id}
              className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(280_70%_55%/0.4)] transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/1)] via-[hsl(220_25%_8_/0.7)] to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(220_25%_8_/0.8)] backdrop-blur-sm border border-[hsl(280_70%_55%/0.3)]">
                  <topic.icon className="w-4 h-4 text-[hsl(280_70%_55%)]" />
                  <span className="text-xs text-[hsl(280_70%_55%)]">{topic.subtitle}</span>
                </div>
              </div>
              <div className="p-6 bg-[hsl(220_20%_12%)]">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[hsl(280_70%_55%)] transition-colors">
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

        {/* Engineering Process Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[hsl(220_20%_12%)] to-[hsl(220_20%_14%)] border border-[hsl(220_15%_20%)]">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Identify', desc: 'Define the problem' },
              { step: '02', title: 'Design', desc: 'Create solutions' },
              { step: '03', title: 'Build', desc: 'Develop prototypes' },
              { step: '04', title: 'Test', desc: 'Evaluate & improve' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-bold text-[hsl(280_70%_55%/0.3)] mb-2">{item.step}</div>
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-[hsl(220_10%_50%)]">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-[hsl(280_70%_55%/0.3)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
