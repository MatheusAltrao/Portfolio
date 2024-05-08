import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className=" w-full bg-zinc-950 border-zinc-800 border-b z-10 fixed top-0 left-0">
      <div className="w-full max-w-[1200px] mx-auto px-4  py-3 flex items-center justify-between">
        <a
          className="font-semibold text-xl"
          href="#hero"
        >
          Matheus
        </a>

        <nav className=" hidden lg:flex items-center text-zinc-400 gap-4">
          <a
            className="header-link"
            href="#about"
          >
            Sobre
          </a>
          <a
            className="header-link"
            href="#services"
          >
            Serviços
          </a>
          <a
            className="header-link"
            href="#skills"
          >
            Tecs
          </a>
          <a
            className="header-link"
            href="#projects"
          >
            Projetos
          </a>

          <Link
            target="_blank"
            className="header-link"
            href={'https://matheus-blog-oauq.vercel.app/'}
          >
            Blog
          </Link>
        </nav>
        <Link
          target="_blank"
          href="https://wa.me//5567999271900?text=Tenho%20interesse%20em%20desenvolver%20um%20projeto"
        >
          <Button variant={'outline'}>Entrar em contato</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
