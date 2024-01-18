'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';

import { loadSlim } from 'tsparticles-slim';

import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Container, Engine } from 'tsparticles-engine';

const Hero = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        [],
    );

    return (
        <div className='space-y-8 mt-24  '>
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    background: {
                        color: {
                            value: '#09090b',
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: false,
                                mode: 'grab',
                            },
                            onclick: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 0,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#ffffff',
                        },
                        links: {
                            color: '#ffffff',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 25,
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#ffffff',
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className='space-y-2 text-center'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none'>
                    Welcome to my portfolio
                </h1>
                <p className='max-w-[600px] mx-auto text-zinc-500 md:text-xl '>
                    Im a front end developer with a passion for building
                    beautiful user interfaces.
                </p>
            </div>

            <div className='flex items-center justify-center gap-2'>
                <Button variant={'outline'}>Ver projeto</Button>
                <Button variant={'outline'}>Contato</Button>
            </div>

            <div className='flex items-center justify-center gap-2'>
                <Link
                    className='text-zinc-500 hover:text-foreground transition-colors'
                    href={'/'}
                >
                    <Github size={20} />
                </Link>
                <Link
                    className='text-zinc-500 hover:text-foreground transition-colors'
                    href={'/'}
                >
                    <Linkedin size={20} />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
