import { ArrowUp, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='w-full max-w-[1200px] mx-auto bg-zinc-950 border-t md:px-0'>
                <div className='flex items-center justify-between'>
                    <div className='h-16 flex  justify-center flex-col  '>
                        <p className='font-semibold '>Matheus </p>
                        <p className='text-xs text-zinc-400'>
                            © Todos os direiros reservados
                        </p>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <Link
                                target='_blank'
                                className='text-zinc-500 hover:text-foreground transition-colors'
                                href={'https://github.com/MatheusAltrao'}
                            >
                                <Github size={18} />
                            </Link>

                            <Link
                                target='_blank'
                                className='text-zinc-500 hover:text-foreground transition-colors'
                                href={
                                    'https://www.linkedin.com/in/matheus-altrao/'
                                }
                            >
                                <Linkedin size={18} />
                            </Link>
                        </div>

                        <a
                            className='text-zinc-400 flex items-center  text-xs md:text-sm hover:underline-offset-4 hover:underline hover:text-zinc-50 transition-colors'
                            href='#hero'
                        >
                            Voltar para o topo <ArrowUp size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
