import { motion } from "framer-motion"

const GenAI = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.6, delay:0.1}}>
      <h3 className="">Generative AI Skills</h3> 
      <p className=""></p>
      <p className=""></p>
      <ul className="">
        
      </ul>
• 	Prompt Engineering: Crafting effective prompts for LLMs to generate accurate, context-aware outputs.
• 	AI Integration: Embedding AI APIs (OpenAI, Hugging Face, LangChain) into web apps and SaaS platforms.
• 	Workflow Automation: Building AI-powered workflows with tools like Zapier, n8n, and custom pipelines.
• 	Conversational Interfaces: Designing intelligent chatbots and assistants with natural language understanding.
• 	Content Generation: Automating text, copywriting, and SEO content creation tailored for African and faith-based audiences.
• 	AI-Powered Features: Implementing summarizers, translators, and recommendation engines in enterprise-grade apps.
• 	Data Handling for AI: Preprocessing text, structuring datasets, and fine-tuning models for specific domains.
• 	Ethical & Responsible AI: Applying bias detection, safe outputs, and compliance with AI usage standards.
• 	Multimodal AI: Leveraging AI for text, image, and code generation to enhance user experiences.
• 	Performance Optimization: Evaluating AI outputs, refining prompts, and integrating feedback loops for continuous improvement.
    </motion.section>
  )
}

export default GenAI