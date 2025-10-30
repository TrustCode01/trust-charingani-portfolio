import {AiFillThunderbolt} from 'react-icons/ai'

const Github = () => {
  return (
    <section>
      <h3 className="">Git and Github</h3>
      <p className="">Version control and collaboration</p>

      <p className="">I leverage Git and GitHub to manage codebases, collaborate effectively, and maintain high-quality software through version control, automation, and peer review. Here is what i have mastered:</p>
      <ul className='mt-4 list-none'>
         <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
                <div className="">
                <h4> Version Control with Git</h4>
              <p> Proficient in using Git for version control, including branching, merging, and resolving conflicts to manage code changes effectively.</p>
              <p>Experienced in maintaining clean commit histories and utilizing Git workflows like Git Flow for organized development.</p>
                </div>
          </li>
          <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4>Collaboration on GitHub</h4>
              <p> Skilled in using GitHub for collaborative development, including pull requests, code reviews, and issue tracking to enhance team productivity.</p>
              <p>Familiar with GitHub Actions for automating workflows such as testing and deployment.</p>
              </div>
            </li>
            <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4>Open Source Contribution</h4>
              <p>Experienced in contributing to open source projects on GitHub, including forking repositories, submitting pull requests, and engaging with the community.</p>
              <p>Understanding of open source licensing and best practices for maintaining open source projects.</p>
              </div>
            </li>
            <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4>Code Quality and Documentation</h4>
              <p>Committed to maintaining high code quality through consistent coding standards, thorough documentation, and effective use of README files and wikis on GitHub.</p>
              <p>Utilizes GitHub's project management features like Projects and Milestones to organize development tasks and track progress.</p>
              </div>
            </li>
            <li className=' flex gap-2 py-4 items-center text-textDark'>
               <span><AiFillThunderbolt className="text-textGreen" /></span>
               <div className="">
                <h4>Security and Best Practices</h4>
              <p>Knowledgeable about Git and GitHub security best practices, including managing sensitive information, using .gitignore effectively, and implementing branch protection rules.</p>
              <p>Stays updated with the latest Git and GitHub features to continuously improve version control and collaboration workflows.</p>
              </div>
            </li>

            </ul>
    </section>
  )
}

export default Github