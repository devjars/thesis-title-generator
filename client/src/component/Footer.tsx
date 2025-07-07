import { FaSquareFacebook, FaGithub } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 max-w-[1550px] mx-auto">
      <aside className="space-y-2">
       <Link to="home" smooth={true} duration={700}>
  <img
    src="/jarslogo.webp"
    alt="JARS Logo"
    className="w-20 h-auto rounded-xl"
  />
</Link>
        <p>
          Thesis Title Generator
          <br />
          Helping you spark research ideas with AI-powered suggestions.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 text-4xl">
          <a
            href="https://www.facebook.com/john.solana.96/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors"
          >
            <FaSquareFacebook />
          </a>
          <a
            href="https://github.com/devjars"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/anjo_solana/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://jarswebservices.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="hover:text-green-400 transition-colors"
          >
            <IoIosGlobe />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
