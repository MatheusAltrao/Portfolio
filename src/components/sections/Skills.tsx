'use client';
import LogoFigma from '../../../public/techs/logoFigma.svg';
import LogoFirebase from '../../../public/techs/logoFirebase.svg';
import LogoGit from '../../../public/techs/logoGit.svg';
import LogoNextjs from '../../../public/techs/logoNextjs.svg';
import LogoSass from '../../../public/techs/logoSass.svg';
import LogoTailwind from '../../../public/techs/logoTailwind.svg';
import LogoTs from '../../../public/techs/logoTs.svg';
import LogoReactjs from '../../../public/techs/logoReactjs.svg';
import LogoHtml from '../../../public/techs/logoHtml.svg';
import LogoCss from '../../../public/techs/logoCss.svg';
import LogoJavascript from '../../../public/techs/logoJavascript.svg';
import LogoGsap from '../../../public/techs/logoGsap.svg';
import Image from 'next/image';
import { Computer, Shield, User } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import Tech from '../Tech';

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id='skills'>
            <div className='flex items-start justify-between flex-col lg:flex-row gap-8'>
                <div data-aos='fade-right' className='max-w-[350px]'>
                    <h3 className=' text-2xl font-bold  '>
                        Minhas Tecnologias
                    </h3>
                    <p className='text-zinc-500'>
                        Essas são as ferramentas mais utilizadas por mim.
                    </p>
                </div>
                <div className='flex items-center justify-start  flex-wrap max-w-[700px] gap-4'>
                    <Tech
                        delay='100'
                        name='HTML'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoHtml}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='200'
                        name='CSS'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoCss}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='300'
                        name='Sass'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoSass}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='400'
                        name='Tailwind'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoTailwind}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='500'
                        name='Javascript'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoJavascript}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='600'
                        name='Typescript'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoTs}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='700'
                        name='ReactJS'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoReactjs}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='800'
                        name='NextJS'
                        image={
                            <Image
                                className='w-[50px] h-[50px]'
                                src={LogoNextjs}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='900'
                        name='Next Auth'
                        image={
                            <div className=' h-3.125rem] flex items-center justify-center'>
                                <Shield strokeWidth={1} size={52} />
                            </div>
                        }
                    />

                    <Tech
                        delay='1000'
                        name='Firebase'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoFirebase}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='1100'
                        name='Git'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoGit}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='1200'
                        name='Figma'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoFigma}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='1300'
                        name='UI'
                        image={
                            <div className=' h-3.125rem] flex items-center justify-center'>
                                <Computer strokeWidth={1} size={52} />
                            </div>
                        }
                    />

                    <Tech
                        delay='1400'
                        name='UX'
                        image={
                            <div className=' h-3.125rem] flex items-center justify-center'>
                                <User strokeWidth={1} size={52} />
                            </div>
                        }
                    />

                    <Tech
                        delay='1500'
                        name='GSAP'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={LogoGsap}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />
                </div>{' '}
            </div>
        </section>
    );
};

export default Skills;
