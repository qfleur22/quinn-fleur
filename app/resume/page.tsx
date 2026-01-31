import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Briefcase, GraduationCap, Users, Code, TestTube, Accessibility, Download } from 'lucide-react'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="pt-20">
        <ResumeContent />
      </div>
      <Footer />
    </main>
  )
}

const ResumeContent = () => {
  const skills = [
    {
      category: 'Front End',
      icon: <Code className="w-5 h-5" />,
      items: ['React', 'Next.js', 'Web Components', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'jQuery', 'HTML5', 'SCSS', 'Bootstrap'],
    },
    {
      category: 'Backend & Tools',
      icon: <Code className="w-5 h-5" />,
      items: ['Java', 'NodeJS', 'Express', 'Linux', 'Splunk', 'Git', 'JIRA', 'Agile', 'Scrum', 'Kanban', 'Atlassian Tool Suite', 'DynamoDB', 'SVG'],
    },
    {
      category: 'Testing/QA',
      icon: <TestTube className="w-5 h-5" />,
      items: ['Jest', 'Jasmine', 'Chrome Dev Tools'],
    },
    {
      category: 'Accessibility',
      icon: <Accessibility className="w-5 h-5" />,
      items: ['JAWS/NVDA', 'WCAG'],
    },
  ]

  const workHistory = [
    {
      title: 'Full Stack Developer',
      company: 'Gray Media',
      period: 'October 2024 - Present',
      achievements: [
        'Developed applications for use by Gray Media news casters while on air',
        'Balance of Power touchboard application to display election info live updated from AP data',
        'Basketball bracket \'prediction\' mode which allows newscasters to show potential match results',
        'Developed app using Run3TV\'s ATSC framework to display a dashboard on Gray\'s local news channels',
      ],
    },
    {
      title: 'Application Engineer 2',
      company: 'Vanguard - Phoenix Team',
      period: 'January 2023 - October 2024',
      achievements: [
        'Added user notifications for asset transfers processes and failures',
        'Utilized AWS, Lambdas, & DynamoDB to ensure timely notifications to clients',
        'Implemented batch status update predicate to retrieve statuses of transfers',
        'Designed and developed serverless microservice to clean up transfer records when no longer relevant',
      ],
    },
    {
      title: 'Application Engineer 2',
      company: 'Vanguard - NavLab',
      period: 'November 2021 - January 2023',
      achievements: [
        'Continued work on Vanguard\'s Global Navigation that split from C3',
        'Increased search queries by over 100% with strategic changes to layout',
        'Spearheaded redesign of Global Navigation into React & Web Components, aligning with brand vision in Figma and enhancing user experience',
        'Implemented and adapted in-house tools to align with enterprise-wide initiatives',
      ],
    },
    {
      title: 'Application Engineer 2',
      company: 'Vanguard - Cross Cutting Concerns Team (C3)',
      period: 'October 2021 - November 2021',
      achievements: [
        'Promoted from Application Engineer 1',
      ],
    },
    {
      title: 'Application Engineer 1',
      company: 'Vanguard - Cross Cutting Concerns Team (C3)',
      period: 'March 2019 - October 2021',
      achievements: [
        'Facilitated teams at Vanguard by supporting essential page tools like idle log out, Adobe Launch, standard Custom Security Policy, OpinionLabs, AppDynamics, etc.',
        'Reskinned global header and footer with visual, accessibility and brand updates',
        'Rewrote splunk alerts with a focus on maintainability; reduced resource load and false alert noise by 30%',
        'Advocated for and implemented accessibility improvements to the header/footer like moving from hover-to-open menus to click-to-open',
        'Authored and shared a blog post about accessibility and design, contributing to the dissemination of best practices within the company',
      ],
    },
  ]

  const community = [
    {
      organization: 'T4Tclt',
      role: 'Lead Organizer',
      period: 'November 2023 - Present',
      description: 'Facilitate creating trans centered spaces and resources in Charlotte, including multiple recurring events',
    },
    {
      organization: 'Feed the Movement',
      role: 'Organizer',
      period: 'March 2020 - Present',
      description: 'Work with local organizations to provide homemade meals for the houseless with dietary restrictions in mind.',
    },
    {
      organization: 'Vanguard',
      role: 'IT WILS Facilitator & OPEN Initiative Participant',
      period: '',
      description: 'Facilitated the Vanguard IT WILS to coordinate several events both virtual and in person. Participated with Vanguard\'s OPEN Initiative.',
    },
  ]

  return (
    <div className="py-12 bg-black">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Quinn Fleur
          </h1>
          <p className="text-xl text-neon-cyan mb-6">
            Full Stack Developer & DevOps Engineer
          </p>
          <a
            href="/ResumeQF.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-green to-neon-cyan text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neon-green mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            Professional Summary
          </h2>
          <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg p-6">
            <p className="text-white/90 text-lg leading-relaxed">
              Practiced front-end DevOps engineer, skilled in troubleshooting and collaboration with cross-functional teams to enhance user experience and streamline processes. Led collaboration efforts to enhance user experience, ensuring compliance with accessibility standards and drove a <span className="text-neon-green font-semibold">15% year-over-year improvement</span> in customer satisfaction ratings.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neon-green mb-6 flex items-center gap-3">
            <Code className="w-8 h-8" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-neon-cyan mb-4 flex items-center gap-2">
                  {skillGroup.icon}
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neon-green/20 text-white text-sm rounded-full border border-neon-green/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neon-green mb-6 flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {workHistory.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg p-6"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-neon-cyan text-lg">
                    {job.company}
                  </p>
                  <p className="text-white/60 text-sm">
                    {job.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-white/80 flex items-start gap-3"
                    >
                      <span className="w-2 h-2 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neon-green mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>
          <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Bachelor of Arts in Computer Science
            </h3>
            <p className="text-neon-cyan text-lg mb-1">
              The University of North Carolina at Charlotte
            </p>
            <p className="text-white/60">
              Graduated: December 2018
            </p>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neon-green mb-6 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Community Involvement
          </h2>
          <div className="space-y-6">
            {community.map((involvement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-cyan/30 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-1">
                  {involvement.organization}
                </h3>
                <p className="text-neon-cyan text-lg mb-1">
                  {involvement.role}
                </p>
                {involvement.period && (
                  <p className="text-white/60 text-sm mb-3">
                    {involvement.period}
                  </p>
                )}
                <p className="text-white/80">
                  {involvement.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
