import { DiReact, DiBootstrap, DiGithubBadge, DiGit, DiSass, DiPython, DiNpm   } from "react-icons/di";
import { SiDotnet, SiMicrosoftsqlserver, SiCsharp, SiPostman, SiMysql, SiKalilinux} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaAngular, FaNodeJs, FaUnity, FaLinkedin  } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";

export type Props = {
    nombre: string,
    apellido: string,
    personaImg: string
    IconName: string
    number: string
}

export default function Pasantes (props: Props) {
    const { nombre, apellido, personaImg, IconName, number } = props;

    const Iconos: Record<string, JSX.Element[]> = {
        Daniel: [<DiReact/>, <DiSass/>, <RiJavascriptFill/>, <BiLogoTypescript/>, <DiBootstrap/>, <SiMicrosoftsqlserver/> , <SiDotnet/>, <DiGithubBadge/>, <DiGit/>, <DiNpm/>, <SiPostman/>, <DiPython/>, <SiCsharp/>],
        Francis: [<SiMicrosoftsqlserver/>, <SiMysql/>, <FaAngular/>, <BiLogoTypescript/>, <FaNodeJs/>, <SiCsharp/>, <SiDotnet/>, <SiKalilinux/>],
        Leonardo: [<SiMysql/>, <FaAngular/>, <BiLogoTypescript/> , <FaNodeJs/>, <FaUnity/>, <SiCsharp/>]
    };

    const Fuentes: Record<string, { icon: JSX.Element, href: string}[]> = {
      Daniel: [
        {icon: <DiGithubBadge />, href: "https://github.com/DanielFelizS" },
        {icon: <FaLinkedin />, href: "https://www.linkedin.com/in/daniel-f%C3%A9liz/" },
        {icon: <MdOutlineEmail />, href: "mailto:felizsdaniel0@gmail.com"},
        {icon: <FaYoutube />, href: "https://youtube.com/@danielfeliz01?si=RtcSgkGO9-NX_6EF" },
        {icon: <ImProfile />, href: "https://daniel-feliz-portfolio.vercel.app/"}
      ],
      Francis: [
      {icon: <AiFillInstagram />, href: "https://www.instagram.com/ghost153798?igsh=bzA4bzY1NWhrdWI3&utm_source=qr"}, 
      {icon: <MdOutlineEmail />, href: "mailto:enmanuelo1530@gmail.com"}
    ],
      Leonardo: [
        {icon: <AiFillInstagram />, href: "https://www.instagram.com/leonardo_rm69/"}, 
        {icon: <MdOutlineEmail />, href: "mailto:lrm.r.m.do@gmail.com"}
      ],
    };
    
  return (
        <div id="contcuadro">
            <div id="contimg">
                <img alt={nombre} src={personaImg}/>
            </div>
            <div id="continfo">
                <h2 className="titulos">{nombre} <br/> {apellido}</h2>
            <br/>
                <div id="cont">
                    <h2 className="titulos">Tecnologias Dominadas</h2>
                    <div id="contredes">
                        {Iconos[IconName].map((icons, index)=> (
                        <span key={index} className="icons">{icons}</span>
                        ))}
                    </div>
                <br/>
                    <h2 id="titulo3" className="titulos">Fuentes Evidenciales</h2>
                    <div id="contredes">
                    {Fuentes[IconName].map((icons, index)=> (
                        <span key={index} className="icons"><a href={icons.href} target="_blank">{icons.icon}</a></span>
                        ))}
                        <br />
                        <span style={{color: "#fff"}}>{number}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}