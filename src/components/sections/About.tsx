'use client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Ilustration from '../../../public/services/ilustration.png';
import Image from 'next/image';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id='about'>
            <div className='flex items-center justify-between flex-col md:flex-row gap-4'>
                <div data-aos='fade-right' className='space-y-4'>
                    <h2>Sobre mim</h2>
                    <p className='max-w-[600px] text-zinc-500 md:text-xl '>
                        Com uma paixão pelo desenvolvimento Front-end. Tenho
                        experiência sólida em Next.js, Firebase e Tailwind CSS,
                        aproveitando o poder dessas tecnologias para criar
                        interfaces dinâmicas e eficientes.
                        <br /> <br /> Me atualizo constantemente para expandir
                        meu conjunto de habilidades e elevar a qualidade do meu
                        trabalho como desenvolvedor Front-end.
                    </p>
                </div>
                <Image
                    data-aos='fade-left'
                    alt=''
                    src={Ilustration}
                    className='w-full max-w-[450px] h-[400px] rounded-lg '
                    width={450}
                    height={400}
                />
            </div>
        </section>
    );
};

export default About;
