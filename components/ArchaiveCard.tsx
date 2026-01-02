import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react"
import { FaGithub, FaRegFolder } from "react-icons/fa"
import { RxOpenInNewWindow } from "react-icons/rx"
interface props{
  github: string,
  link: string,
  title: string,
  des: string,
  ListItem:string[] 
}
const ArchaiveCard = ({github,link,title,des,ListItem}:props) => {
  return (
    <article className="w-full h-80 rounded-lg bg-[#112240] p-4 flex flex-col justify-center gap-6 group">
        <div className="flex justify-between items-center">
        <a href={github} target="_blank" className=" hover:-translate-y-2 transtisotion-transform duration-300" title="Open github repository"><FaGithub className="text-2xl text-white hover:text-textGreen"/></a>
        <a href={link} target="_blank" className=" hover:-translate-y-2 transtisotion-transform duration-300" title="View the Project in a new window"><RxOpenInNewWindow className="text-2xl text-white hover:text-textGreen"/></a>
        </div>
        <h3 className="text-xl font-titleFont font-semibold tracking-wide group-hover:textGreen">{title}</h3>
        <p className="text-sm mt-3">{des}</p>
        <ul className="text-xs md:text-sm flex items-center justify-between gap-2">
            {
                ListItem.map((item: string ,index: Key )=>(<li key={index}>{item}</li>))
            }
        </ul>
    </article>
  )
}

export default ArchaiveCard