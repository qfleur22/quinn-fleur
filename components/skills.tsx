'use client'

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React & Web Components',
        'Next.js & TypeScript',
        'Tailwind CSS & SCSS',
        'HTML5 & Bootstrap',
        'Responsive Design',
        'jQuery & Modern Frameworks',
      ],
    },
    {
      title: 'Backend & DevOps',
      skills: [
        'Node.js & Express',
        'AWS Lambdas & DynamoDB',
        'Java & Linux',
        'Splunk & Monitoring',
        'Serverless Architecture',
      ],
    },
    {
      title: 'Testing & Accessibility',
      skills: [
        'Jest & Jasmine Testing',
        'WCAG Compliance',
        'JAWS/NVDA Screen Readers',
        'Chrome Dev Tools',
        'Accessibility Advocacy',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Skills & Expertise
        </h2>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          Practiced front-end DevOps engineer with a strong focus on accessibility and user experience. 
          Proven track record of driving 15% year-over-year improvements in customer satisfaction 
          through collaborative development and adherence to WCAG standards.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-white/80 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-neon-green rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
