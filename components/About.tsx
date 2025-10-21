import SectionTitle from '@/components/SectionTitle'
interface props{
   title: string;
   titleNo: string;
}
const About = () => {
  return (
    <section className='max-w-containerSmall mx-auto py-10 lgl:py-12 flex flex-col gap-8'>
        <SectionTitle titleNo ='01' title='About'/>
    </section>
  )
}

export default About