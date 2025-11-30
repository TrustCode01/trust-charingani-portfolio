import { motion } from "framer-motion"
import { AiFillThunderbolt } from "react-icons/ai"

function Sdlc() {
  return (
    <motion.section
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6, delay:0.1}}
    >
      <h3 className="font-bold text-2xl">Software Development Life Cycle</h3>
      <p className="text-md font-bold pb-4">Mastering software development from start to finish</p>
      <p className=""> I</p>

       <ul>
                 <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'> Requirements & Planning</h4>
                    <p>Requirement gathering and analysis (user stories, use cases, acceptance criteria).</p>
                    <p>Stakeholder communication and documentation</p>
                    <p>Feasibility studies and risk assessment</p>
                    <p>Agile/Scrum sprint planning and backlog management</p>
                    </div>
                  </li>
                   <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'>Design</h4>
                    <p>System architecture design (monolithic, microservices, event-driven).</p>
                    <p>Database schema design (ER diagrams, normalization, relational & NoSQL)</p>
                    <p>	UI/UX wireframing and prototyping (Figma, accessibility-first design)</p>
                    <p>Applying design patterns (MVC, MVVM, Singleton, Observer)</p>
                    </div>
                  </li>
                   <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'> Implementation / Development</h4>
                    <p>Writing clean, maintainable, and scalable code (OOP & functional programming).</p>
                    <p>API design and integration (REST, GraphQL)</p>
                    <p>	Version control and collaboration (Git, GitHub workflows, branching strategies)</p>
                    <p>Secure coding practices (OWASP Top 10, input validation, encryption)</p>
                    </div>
                  </li>
                   <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'> Testing</h4>
                    <p>Unit, integration, and end-to-end testing (Jest, Cypress, Playwright).</p>
                    <p>Test-driven development (TDD) and behavior-driven development (BDD)</p>
                    <p>Automated CI/CD testing pipelines</p>
                    <p>Performance and load testing</p>
                    </div>
                  </li>
                   <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'> Deployment</h4>
                    <p>CI/CD pipelines (GitHub Actions, Jenkins, GitLab CI)</p>
                    <p>Containerization and orchestration (Docker, Kubernetes)</p>
                    <p>Cloud deployment (AWS, Azure, Google Cloud, Vercel, Netlify)</p>
                    <p>Serverless architecture and edge deployments</p>
                    </div>
                  </li>
                   <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'> Maintenance & Monitoring</h4>
                    <p>Bug tracking and resolution (Jira, Linear, Trello)</p>
                    <p>Continuous improvement and refactoring</p>
                    <p>Security patching and dependency management</p>
                    </div>
                  </li>
                   <li className=' flex gap-2 py-4 items-center'>
                     <span><AiFillThunderbolt className="text-textGreen" /></span>
                     <div className="">
                      <h4 className='text-xl font-bold py-2'> Project & Process Management</h4>
                    <p>Agile methodologies (Scrum, Kanban)</p>
                    <p>Documentation (technical specs, API docs, README, wikis)</p>
                    <p>Code reviews and peer collaboration</p>
                    <p>Metrics-driven improvement (velocity, defect density, deployment frequency)</p>
                    </div>
                  </li>

                  </ul>
    </motion.section>
  )
}

export default Sdlc

{
  /*
  Software Development Life Cycle (SDLC) Skills
• 	Requirements & Planning: Skilled in gathering user stories, defining acceptance criteria, and managing Agile/Scrum backlogs.
• 	System & UI Design: Experienced in multi-tenant SaaS architecture, database schema modeling (Postgres, MongoDB), and accessibility-first UI/UX prototyping.
• 	Implementation: Proficient in building scalable applications with React, Next.js, Tailwind CSS, and secure API integrations (REST, GraphQL).
• 	Testing & Quality Assurance: Strong in TDD/BDD, automated unit/integration testing (Jest, Cypress), and performance optimization.
• 	Deployment & Delivery: Hands-on with CI/CD pipelines, containerization (Docker, Kubernetes), and cloud platforms (AWS, Vercel, Netlify).
• 	Maintenance & Monitoring: Skilled in bug tracking, logging/monitoring (Prometheus, Grafana), and continuous improvement through refactoring and security patching.
• 	Collaboration & Documentation: Adept at code reviews, technical documentation, and metrics-driven process improvement. */
}