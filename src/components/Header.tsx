import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className='w-full max-w-[1200px] mx-auto bg-zinc-950'>
                <div className='h-14 flex items-center justify-between border-b '>
                    <h1 className='font-semibold text-xl'>Matheus </h1>

                    <nav className='flex items-center text-zinc-400 gap-4'>
                        <Link className='header-link' href={'/'}>
                            Início
                        </Link>
                        <Link className='header-link' href={'/'}>
                            Sobre
                        </Link>
                        <Link className='header-link' href={'/'}>
                            Projetos
                        </Link>
                        <Link className='header-link' href={'/'}>
                            Contato
                        </Link>
                        <Link className='header-link' href={'/'}>
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
