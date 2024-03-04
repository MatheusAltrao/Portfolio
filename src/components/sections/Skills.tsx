'use client';

import * as imports from './imports';

import Image from 'next/image';

import { Computer, Pyramid, Shield, User } from 'lucide-react';
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
                    <h3 className=' text-2xl font-bold  '>Minhas Tecnologias</h3>
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
                                src={imports.LogoHtml}
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
                                src={imports.LogoCss}
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
                                src={imports.LogoSass}
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
                                src={imports.LogoTailwind}
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
                                src={imports.LogoJavascript}
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
                                src={imports.LogoTs}
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
                                src={imports.LogoReactjs}
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
                                src={imports.LogoNextjs}
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
                                src={imports.LogoFirebase}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='1000'
                        name='MongoDB'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={imports.MongoDB}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='1000'
                        name='Prisma'
                        image={
                            <div className=' h-3.125rem] flex items-center justify-center'>
                                <Pyramid strokeWidth={1} size={52} />
                            </div>
                        }
                    />

                    <Tech
                        delay='1000'
                        name='Axios'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={imports.Axios}
                                alt=''
                                width={50}
                                height={50}
                            />
                        }
                    />

                    <Tech
                        delay='1000'
                        name='Docker'
                        image={
                            <Image
                                className='w-[50px] h-[50px] '
                                src={imports.Docker}
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
                                src={imports.LogoGit}
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
                                src={imports.LogoFigma}
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
                                src={imports.LogoGsap}
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
