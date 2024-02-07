'use client';
import { Button } from '../ui/button';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';
import Programing from '../../../public/services/ilustration1.png';
import Uiux from '../../../public/services/ilustration3.png';
import Webdesign from '../../../public/services/ilustration4.png';
import Link from 'next/link';

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id='services' className='  space-y-16 '>
            <div
                data-aos='fade-up'
                className='space-y-4  text-left md:text-center '
            >
                <h2>Vamos contruir sua ideia Juntos</h2>
                <p className='description '>
                    Vamos transformar ideias em realizações concretas,
                    explorando cada detalhe com paixão e dedicação.
                </p>
            </div>

            <div className='space-y-8'>
                <div className='flex items-center gap-8  flex-col-reverse md:flex-row justify-between'>
                    <div
                        data-aos='fade-right'
                        className='w-full max-w-[450px] space-y-8'
                    >
                        <div className=' space-y-4'>
                            <h2>Web Design</h2>
                            <div className='text-zinc-500 space-y-2 text-base lg:text-[1.125rem] lg:leading-[1.625rem]'>
                                <p>
                                    {' '}
                                    Para o desenvolvimento de interfaces web,
                                    minha ferramenta de eleição é o Figma.
                                </p>
                                <p>
                                    O uso de wireframes é uma etapa crucial no
                                    meu processo de design. Através de esboços
                                    iniciais no Figma, visualizo a estrutura e o
                                    layout da interface.
                                </p>{' '}
                                <p>
                                    {' '}
                                    Para garantir consistência em todo o
                                    projeto, desenvolvo um style guide incluindo
                                    diretrizes para tipografia, paleta de cores,
                                    elementos de interface e muito mais.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Link
                                target='_blank'
                                href='https://wa.me//5567999271900?text=Tenho%20interesse%20em%20desenvolver%20um%20projeto'
                            >
                                <Button variant={'outline'}>
                                    Criar projeto juntos
                                </Button>
                            </Link>

                            <a href='#skills'>
                                {' '}
                                <Button variant={'outline'}>
                                    Ver tecnologias
                                </Button>
                            </a>
                        </div>
                    </div>

                    <Image
                        data-aos='fade-left'
                        alt=''
                        src={Webdesign}
                        className='h-[350px] lg:h-[400px] max-w-[450px] rounded-lg relative w-full'
                        priority
                        sizes='(max-width: 768px) w-full, 450px '
                    />
                </div>

                <div className='flex items-center gap-8  flex-col-reverse md:flex-row-reverse justify-between'>
                    <div
                        data-aos='fade-left'
                        className='w-full max-w-[450px] space-y-8'
                    >
                        <div className='space-y-4'>
                            <h2>Desenvolvedor</h2>
                            <div className='text-zinc-500 space-y-2 text-base lg:text-[1.125rem] lg:leading-[1.625rem]'>
                                <p>
                                    Sou capaz de desenvolver aplicações web
                                    robustas e interativas. Mantendo um código
                                    limpo e modular que facilita a manutenção e
                                    a escalabilidade.
                                </p>
                                <p>
                                    {' '}
                                    Utilizo ferramentas poderosas para
                                    desenvolver funcionalidades de back-end em
                                    minhas aplicações web. Desde a autenticação
                                    de usuários até o armazenamento de dados em
                                    tempo real.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Link
                                target='_blank'
                                href='https://wa.me//5567999271900?text=Tenho%20interesse%20em%20desenvolver%20um%20projeto'
                            >
                                <Button variant={'outline'}>
                                    Criar projeto juntos
                                </Button>
                            </Link>

                            <a href='#skills'>
                                {' '}
                                <Button variant={'outline'}>
                                    Ver tecnologias
                                </Button>
                            </a>
                        </div>
                    </div>

                    <Image
                        data-aos='fade-right'
                        alt=''
                        src={Programing}
                        className='h-[350px] lg:h-[400px] max-w-[450px] rounded-lg relative w-full'
                        priority
                        sizes='(max-width: 768px) w-full, 450px '
                    />
                </div>

                <div className='flex items-center gap-8  flex-col-reverse md:flex-row justify-between'>
                    <div
                        data-aos='fade-right'
                        className='w-full max-w-[450px] space-y-8'
                    >
                        <div className='space-y-4'>
                            <h2>UI / UX</h2>
                            <div className='text-zinc-500 space-y-2 text-base lg:text-[1.125rem] lg:leading-[1.625rem]'>
                                <p>
                                    Desde a fase de pesquisa inicial até a
                                    entrega final, coloco as necessidades e
                                    expectativas dos usuários no centro de todas
                                    as decisões de design, garantindo que cada
                                    interação seja intuitiva, eficiente e
                                    agradável.
                                </p>

                                <p>
                                    Crio designs responsivos que se adaptam a
                                    uma variedade de tamanhos de tela. Utilizo
                                    layout e grids flexíveis para garantir uma
                                    experiência consistente em todas as
                                    plataformas.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Link
                                target='_blank'
                                href='https://wa.me//5567999271900?text=Tenho%20interesse%20em%20desenvolver%20um%20projeto'
                            >
                                <Button variant={'outline'}>
                                    Criar projeto juntos
                                </Button>
                            </Link>

                            <a href='#skills'>
                                {' '}
                                <Button variant={'outline'}>
                                    Ver tecnologias
                                </Button>
                            </a>
                        </div>
                    </div>

                    <Image
                        data-aos='fade-left'
                        alt=''
                        src={Uiux}
                        className='h-[350px] lg:h-[400px] max-w-[450px] rounded-lg relative w-full'
                        priority
                        sizes='(max-width: 768px) w-full, 450px '
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
