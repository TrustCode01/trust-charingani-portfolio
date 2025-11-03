import { AiFillThunderbolt } from 'react-icons/ai'

const Standards = () => {
  return (
    <section>
      <h3 className='text-2xl font-bold'>W3C Coding Essentials & Best Practices</h3>
      <p className='text-lg font-bold pb-4'>Following the W3C standards for better web apps</p>

      <p>
        I follow the World Wide Web Consortium (W3C) standards to ensure my web development work is accessible, performant, and future-proof. Through the W3Cx curriculum, I’ve mastered the core principles of semantic HTML5, responsive design, and clean coding practices that align with global web standards. This foundation allows me to create web applications that are not only visually appealing but also optimized for search engines and accessible to all users, including those with disabilities. By adhering to W3C guidelines, I ensure that my projects maintain high quality, interoperability across different browsers and devices, and a strong focus on user experience.
      </p>
      <p>Here are some of the key skills i have mastered:</p>
      <ul className="">
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>Semantic HTML5</h4>
            <p>Using appropriate HTML5 elements to enhance the meaning and structure of web content, improving accessibility, SEO and maintainability. </p>
          </div>
        </li>
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>CSS Best Practices</h4>
            <p> I write modular, scalable styles with clear naming conventions and minimal redundancy.</p>
          </div>
        </li>
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>Responsive Design</h4>
            <p>Creating fluid layouts and flexible media queries to ensure optimal viewing experiences across various devices and screen sizes.</p>
          </div>
        </li>
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>Accessibility (a11y)</h4>
            <p>Implementing W3C Web Accessibility Initiative (WAI) guidelines to make web content usable for people with disabilities, including proper use of ARIA roles and keyboard navigation.</p>
          </div>
        </li>
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>Performance Optimization</h4>
            <p>Following best practices for optimizing web performance, including minimizing HTTP requests, leveraging browser caching, and optimizing images and assets.</p>
          </div>
        </li>
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>Cross-Browser Compatibility</h4>
            <p>Testing and ensuring that web applications function consistently across different browsers and platforms by adhering to W3C standards.</p>
          </div>
        </li>
        <li className='flex gap-2 py-4 items-center'>
          <span><AiFillThunderbolt className='text-textGreen'/></span>
          <div>
            <h4 className='text-xl font-bold py-2'>Clean Code Practices</h4>
            <p>Writing well-structured, readable, and maintainable code that follows W3C guidelines and industry best practices. </p>
          </div>
        </li>
      </ul>
      <p className="">
        These practices not only improve user experience but also ensure that my projects meet international standards for interoperability and longevity. I’m committed to writing clean, accessible, and standards-compliant code that reflects the best of modern web development.

      </p>
    </section>
  )
}

export default Standards