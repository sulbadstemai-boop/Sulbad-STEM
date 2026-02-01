import { Cpu, Code, Brain, BarChart3, Bot, Globe } from 'lucide-react';

const techTopics = [
  {
    id: 'programming',
    title: 'Computer Programming',
    subtitle: 'Coding Fundamentals to Advanced',
    icon: Code,
    image: '/tech-coding.jpg',
    description: 'Learn programming from basic syntax to complex algorithms with hands-on coding exercises and projects.',
    highlights: [
      { title: 'Python & JavaScript', desc: 'Popular languages for beginners and pros' },
      { title: 'Data Structures', desc: 'Arrays, lists, trees, graphs, hash tables' },
      { title: 'Algorithms', desc: 'Sorting, searching, optimization techniques' },
      { title: 'Object-Oriented', desc: 'Classes, inheritance, polymorphism' },
      { title: 'Web Development', desc: 'HTML, CSS, React, backend APIs' },
      { title: 'Mobile Apps', desc: 'Cross-platform development fundamentals' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence',
    subtitle: 'Machine Learning & Deep Learning',
    icon: Brain,
    image: '/tech-ai.jpg',
    description: 'Explore the cutting edge of AI technology from neural networks to natural language processing.',
    highlights: [
      { title: 'Neural Networks', desc: 'Perceptrons, backpropagation, architectures' },
      { title: 'Computer Vision', desc: 'Image recognition, object detection, CNNs' },
      { title: 'NLP', desc: 'Text processing, sentiment analysis, transformers' },
      { title: 'Reinforcement Learning', desc: 'Q-learning, policy gradients, agents' },
      { title: 'Ethics in AI', desc: 'Bias, fairness, responsible AI development' },
      { title: 'AI Applications', desc: 'Healthcare, finance, education use cases' },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    subtitle: 'From Data to Insights',
    icon: BarChart3,
    image: '/tech-data.jpg',
    description: 'Transform raw data into actionable insights using statistical analysis and visualization tools.',
    highlights: [
      { title: 'Data Wrangling', desc: 'Cleaning, transformation, preprocessing' },
      { title: 'Statistical Analysis', desc: 'Hypothesis testing, regression, ANOVA' },
      { title: 'Data Visualization', desc: 'Matplotlib, Seaborn, Tableau, Power BI' },
      { title: 'Big Data', desc: 'Hadoop, Spark, distributed computing' },
      { title: 'Predictive Modeling', desc: 'Classification, clustering, forecasting' },
      { title: 'Business Intelligence', desc: 'KPIs, dashboards, decision support' },
    ],
  },
  {
    id: 'robotics',
    title: 'Robotics & Automation',
    subtitle: 'Building Intelligent Machines',
    icon: Bot,
    image: '/tech-robotics.jpg',
    description: 'Design, build, and program robots while learning mechanics, electronics, and control systems.',
    highlights: [
      { title: 'Robot Mechanics', desc: 'Kinematics, dynamics, mechanical design' },
      { title: 'Sensors & Actuators', desc: 'Motors, encoders, cameras, LiDAR' },
      { title: 'Control Systems', desc: 'PID control, feedback loops, stability' },
      { title: 'Arduino & Raspberry Pi', desc: 'Microcontroller programming basics' },
      { title: 'Autonomous Navigation', desc: 'SLAM, path planning, obstacle avoidance' },
      { title: 'IoT Integration', desc: 'Connected devices, cloud robotics' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web & Digital Media',
    subtitle: 'Creating Digital Experiences',
    icon: Globe,
    image: '/tech-web.jpg',
    description: 'Master modern web development and digital content creation for the connected world.',
    highlights: [
      { title: 'Frontend Development', desc: 'React, Vue, Angular, responsive design' },
      { title: 'Backend Systems', desc: 'Node.js, databases, REST APIs, GraphQL' },
      { title: 'Cloud Computing', desc: 'AWS, Azure, serverless architectures' },
      { title: 'Cybersecurity', desc: 'Encryption, authentication, threat modeling' },
      { title: 'UI/UX Design', desc: 'User research, prototyping, accessibility' },
      { title: 'Digital Marketing', desc: 'SEO, analytics, content strategy' },
    ],
  },
];

export function Technology() {
  return (
    <section id="technology" className="py-20 md:py-32 bg-[hsl(220_25%_8%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(190_90%_50%/0.1)] border border-[hsl(190_90%_50%/0.3)] mb-6">
            <Cpu className="w-4 h-4 text-[hsl(190_90%_50%)]" />
            <span className="text-sm text-[hsl(190_90%_50%)]">Technology Strand</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Master Modern <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-lg text-[hsl(220_10%_60%)] max-w-3xl mx-auto">
            From coding fundamentals to cutting-edge AI, our technology curriculum 
            prepares students for the digital future with practical, hands-on learning.
          </p>
        </div>

        {/* Featured Topic - Large Card */}
        <div className="mb-8">
          <div className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(190_90%_50%/0.4)] transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={techTopics[0].image}
                  alt={techTopics[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[hsl(220_25%_8_/0.9)] lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/0.9)] to-transparent lg:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 bg-[hsl(220_20%_12%)] flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  {(() => {
                    const IconComponent = techTopics[0].icon;
                    return <IconComponent className="w-5 h-5 text-[hsl(190_90%_50%)]" />;
                  })()}
                  <span className="text-sm text-[hsl(190_90%_50%)]">{techTopics[0].subtitle}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[hsl(190_90%_50%)] transition-colors">
                  {techTopics[0].title}
                </h3>
                <p className="text-[hsl(220_10%_60%)] mb-8">{techTopics[0].description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {techTopics[0].highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-[hsl(220_20%_10%)] border border-[hsl(220_15%_18%)] hover:border-[hsl(190_90%_50%/0.3)] transition-all"
                    >
                      <h4 className="text-sm font-semibold text-white mb-1">{highlight.title}</h4>
                      <p className="text-xs text-[hsl(220_10%_50%)]">{highlight.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Topics - Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {techTopics.slice(1).map((topic) => (
            <div
              key={topic.id}
              className="group relative rounded-2xl overflow-hidden border border-[hsl(220_15%_20%)] hover:border-[hsl(190_90%_50%/0.4)] transition-all duration-500"
            >
              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_8_/1)] via-[hsl(220_25%_8_/0.7)] to-transparent" />
                
                {/* Topic Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(220_25%_8_/0.8)] backdrop-blur-sm border border-[hsl(190_90%_50%/0.3)]">
                  <topic.icon className="w-4 h-4 text-[hsl(190_90%_50%)]" />
                  <span className="text-xs text-[hsl(190_90%_50%)]">{topic.subtitle}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 bg-[hsl(220_20%_12%)]">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[hsl(190_90%_50%)] transition-colors">
                  {topic.title}
                </h3>
                <p className="text-sm text-[hsl(220_10%_60%)] mb-4">{topic.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {topic.highlights.slice(0, 4).map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-[hsl(220_20%_10%)] border border-[hsl(220_15%_18%)] text-[hsl(220_10%_60%)]"
                    >
                      {highlight.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
