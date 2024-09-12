import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa" ;
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-15 flex items-center justify-between py-6">
    <div className="flex felx-shirk-0 items-center">
        <img className="mx-8 w-10" src={logo} alt="logo" />
    </div>
    <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
      <a  className="hover:animate-pulse hover:text-blue-500" href="https://www.linkedin.com/in/shabbirhossain01">
      
      <FaLinkedin/>
      </a>
      <a className="hover:animate-pulse hover:text-gray-400"  href="#">

      <FaGithub/>
      </a>


      <a className="hover:animate-pulse hover:text-blue-400" href="https://www.facebook.com/shabbirricky">

      <FaFacebook />
      </a>
      <a  className="animate-bounce hover:animate-pulse hover:text-green-400" href="https://wa.me/01633404476">
      
      <FaWhatsapp/>
      </a>
    </div>
  </nav>
}

export default Navbar