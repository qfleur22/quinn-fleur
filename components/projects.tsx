'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface Project {
  name: string
  description: string
  image: string
  url: string
  stats: {
    label1: string
    value1: string
    label2: string
    value2: string
  }
  technologies: string[]
  skills: string[]
}

export const Projects = () => {
  const projects: Project[] = [
    {
      name: 'T4TCLT',
      description: 'Community platform creating trans-centered spaces and resources in Charlotte. Facilitating multiple recurring events and connecting transgender individuals with vital support services.',
      image: '/projects/t4t.png',
      url: 'https://t4tclt.com',
      stats: {
        label1: 'Unique Visitors (Monthly)',
        value1: '3.47k',
        label2: 'Total Requests (Monthly)',
        value2: '46.02k',
      },
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
      ],
      skills: [
        'Full-Stack Development',
        'Community Platform Design',
        'WCAG Accessibility',
        'Content Management',
        'User-Centered Design',
      ],
    },
    {
      name: 'DBT Coping Skills',
      description: 'Interactive web application helping users learn and practice Dialectical Behavior Therapy coping techniques for emotional regulation. Currently in development - not yet released.',
      image: '/projects/dbt-skills.png',
      url: 'https://quinnfleur.com/coping-skills',
      stats: {
        label1: 'Visitors',
        value1: 'N/A',
        label2: 'Engagement',
        value2: 'N/A',
      },
      technologies: [
        'React',
        'TypeScript',
        'CSS3',
        'Local Storage API',
        'Responsive Design',
      ],
      skills: [
        'Interactive UI Development',
        'Mental Health Tech',
        'Progressive Web App',
        'User Experience Design',
        'Accessibility Standards',
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-neon-blue/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Featured Projects
        </h2>
        <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">
          A showcase of my recent work in web development, focusing on creating 
          meaningful and impactful digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-neon-green mb-3">
                  {project.name}
                </h3>
                
                <p className="text-white/80 mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-black/30 rounded-lg">
                  <div>
                    <p className="text-neon-cyan text-sm">{project.stats.label1}</p>
                    <p className="text-white font-semibold">{project.stats.value1}</p>
                  </div>
                  <div>
                    <p className="text-neon-cyan text-sm">{project.stats.label2}</p>
                    <p className="text-white font-semibold">{project.stats.value2}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-neon-cyan text-sm font-semibold mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neon-blue/20 text-white text-sm rounded-full border border-neon-blue/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills Demonstrated */}
                <div className="mb-6">
                  <h4 className="text-neon-cyan text-sm font-semibold mb-2">
                    Skills Demonstrated
                  </h4>
                  <ul className="space-y-1">
                    {project.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-white/70 text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visit Website Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
                >
                  Visit Website
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
