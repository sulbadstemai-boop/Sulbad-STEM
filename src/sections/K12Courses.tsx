import { useState } from 'react';
import { Baby, BookOpen, School, GraduationCap, ChevronRight, Star } from 'lucide-react';

const courses = [
  {
    id: 'kindergarten',
    title: 'Kindergarten',
    subtitle: 'Early STEM Exploration',
    icon: Baby,
    image: '/kindergarten.jpg',
    color: 'from-[hsl(45_100%_55%)] to-[hsl(35_100%_45%)]',
    description: 'Building foundational curiosity through playful discovery and hands-on exploration.',
    topics: [
      { name: 'Nature & Environment', desc: 'Exploring plants, animals, and weather patterns' },
      { name: 'Basic Shapes & Patterns', desc: 'Recognizing geometric forms and sequences' },
      { name: 'Simple Machines', desc: 'Understanding levers, pulleys, and wheels' },
      { name: 'Water & States of Matter', desc: 'Solid, liquid, gas experiments' },
      { name: 'Colors & Light', desc: 'Mixing colors and exploring shadows' },
      { name: 'Counting & Sorting', desc: 'Basic numeracy and classification' },
    ],
  },
  {
    id: 'elementary',
    title: 'Elementary Education',
    subtitle: 'Grades 1-6 Foundation',
    icon: BookOpen,
    image: '/elementary.jpg',
    color: 'from-[hsl(140_70%_50%)] to-[hsl(160_70%_40%)]',
    description: 'Developing core STEM competencies through inquiry-based learning and experiments.',
    topics: [
      { name: 'Life Science', desc: 'Plants, animals, ecosystems, and human body' },
      { name: 'Physical Science', desc: 'Forces, motion, energy, and simple circuits' },
      { name: 'Earth & Space', desc: 'Solar system, weather, rocks, and natural resources' },
      { name: 'Basic Programming', desc: 'Block coding and computational thinking' },
      { name: 'Measurement & Data', desc: 'Collecting and analyzing simple data' },
      { name: 'Engineering Design', desc: 'Problem-solving through design challenges' },
    ],
  },
  {
    id: 'junior-high',
    title: 'Junior High School',
    subtitle: 'Grades 7-10 Core',
    icon: School,
    image: '/junior-high.jpg',
    color: 'from-[hsl(190_90%_50%)] to-[hsl(210_90%_45%)]',
    description: 'Deepening understanding through specialized subjects and laboratory investigations.',
    topics: [
      { name: 'General Science', desc: 'Integrated approach to biology, chemistry, physics' },
      { name: 'Earth Science', desc: 'Geology, meteorology, oceanography, astronomy' },
      { name: 'Basic Electronics', desc: 'Circuits, components, and digital logic' },
      { name: 'Computer Science', desc: 'Programming fundamentals and algorithms' },
      { name: 'Algebra & Geometry', desc: 'Equations, functions, and spatial reasoning' },
      { name: 'Research Methods', desc: 'Scientific inquiry and experimental design' },
    ],
  },
  {
    id: 'senior-high',
    title: 'Senior High School',
    subtitle: 'STEM Strand Specialization',
    icon: GraduationCap,
    image: '/senior-high.jpg',
    color: 'from-[hsl(280_70%_55%)] to-[hsl(300_70%_50%)]',
    description: 'Advanced specialization preparing students for STEM careers and higher education.',
    topics: [
      { name: 'General Physics 1 & 2', desc: 'Mechanics, thermodynamics, electricity, magnetism' },
      { name: 'General Chemistry', desc: 'Stoichiometry, bonding, reactions, equilibrium' },
      { name: 'Pre-Calculus & Calculus', desc: 'Functions, limits, derivatives, integrals' },
      { name: 'Empowerment Technologies', desc: 'ICT, productivity tools, digital citizenship' },
      { name: 'Research/Capstone', desc: 'Independent investigation and thesis writing' },
      { name: 'Work Immersion', desc: 'Industry experience and practical application' },
    ],
  },
];

export function K12Courses() {
  const [activeCourse, setActiveCourse] = useState(courses[0]);

  return (
    <section id="k12-courses" className="py-20 md:py-32 bg-[hsl(220_25%_8%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(190_90%_50%/0.1)] border border-[hsl(190_90%_50%/0.3)] mb-6">
            <GraduationCap className="w-4 h-4 text-[hsl(190_90%_50%)]" />
            <span className="text-sm text-[hsl(190_90%_50%)]">Philippine K-12 Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-gradient">K-12</span> STEM Programs
          </h2>
          <p className="text-lg text-[hsl(220_10%_60%)] max-w-3xl mx-auto">
            From early exploration to advanced specialization, our curriculum aligns with 
            DepEd's K-12 standards and Republic Act 10533 requirements.
          </p>
        </div>

        {/* Course Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveCourse(course)}
              className={`relative p-4 rounded-xl border transition-all duration-300 text-left group ${
                activeCourse.id === course.id
                  ? 'bg-[hsl(220_20%_14%)] border-[hsl(190_90%_50%)] shadow-[0_0_20px_hsl(190_90%_50%/0.2)]'
                  : 'bg-[hsl(220_20%_10%)] border-[hsl(220_15%_20%)] hover:border-[hsl(190_90%_50%/0.4)]'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              <course.icon
                className={`w-6 h-6 mb-2 transition-colors ${
                  activeCourse.id === course.id
                    ? 'text-[hsl(190_90%_50%)]'
                    : 'text-[hsl(220_10%_50%)]'
                }`}
              />
              <h3
                className={`font-semibold text-sm ${
                  activeCourse.id === course.id ? 'text-white' : 'text-[hsl(220_10%_70%)]'
                }`}
              >
                {course.title}
              </h3>
              <p className="text-xs text-[hsl(220_10%_50%)]">{course.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Active Course Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)]">
              <img
                src={activeCourse.image}
                alt={activeCourse.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/0.9)] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <activeCourse.icon className="w-5 h-5 text-[hsl(190_90%_50%)]" />
                  <span className="text-sm text-[hsl(190_90%_50%)]">{activeCourse.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{activeCourse.title}</h3>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[hsl(190_90%_50%/0.3)] rounded-tr-xl" />
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-[hsl(280_70%_55%/0.3)] rounded-bl-xl" />
          </div>

          {/* Topics */}
          <div className="space-y-4">
            <p className="text-[hsl(220_10%_70%)] text-lg mb-6">{activeCourse.description}</p>
            <h4 className="text-sm font-semibold text-[hsl(220_10%_50%)] uppercase tracking-wider mb-4">
              Key Learning Areas
            </h4>
            <div className="grid gap-3">
              {activeCourse.topics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[hsl(220_20%_12%)] border border-[hsl(220_15%_20%)] hover:border-[hsl(190_90%_50%/0.3)] transition-all group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(190_90%_50%/0.2)] to-[hsl(280_70%_55%/0.2)] flex items-center justify-center">
                    <Star className="w-4 h-4 text-[hsl(190_90%_50%)]" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-white group-hover:text-[hsl(190_90%_50%)] transition-colors">
                      {topic.name}
                    </h5>
                    <p className="text-sm text-[hsl(220_10%_50%)]">{topic.desc}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[hsl(220_10%_40%)] group-hover:text-[hsl(190_90%_50%)] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
