'use client';

import { useCallback } from 'react';

import { loadSlim } from 'tsparticles-slim';

import { gsap } from 'gsap';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import { Container, Engine } from 'tsparticles-engine';

const Hero = () => {
  const title = useRef<HTMLDivElement | null>(null);
  const subtitle = useRef<HTMLDivElement | null>(null);
  const button1 = useRef<HTMLDivElement | null>(null);
  const button2 = useRef<HTMLDivElement | null>(null);
  const link1 = useRef<HTMLDivElement | null>(null);
  const link2 = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(
      () => {
        gsap.to(title.current, {
          opacity: 1,
          delay: 8,
          duration: 0.5,
        });

        gsap.to(subtitle.current, {
          opacity: 1,
          delay: 9,
          duration: 0.5,
        });

        gsap.to(button1.current, {
          opacity: 1,
          delay: 9.2,
          duration: 0.5,
        });

        gsap.to(button2.current, {
          opacity: 1,
          delay: 9.4,
          duration: 0.5,
        });

        gsap.to(link1.current, {
          opacity: 1,
          translateY: 0,
          delay: 10,
          duration: 0.8,
        });

        gsap.to(link2.current, {
          opacity: 1,
          translateY: 0,
          delay: 10.4,
          duration: 0.8,
        });
      },

      title
    );

    return () => {
      ctx.revert();
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <section
      id="hero"
      className="space-y-4 flex items-center justify-center flex-col h-[90vh]  "
    >
      {/* <Particles
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
            /> */}

      <div className="space-y-2 text-center ">
        <div
          className="opacity-0  transition-all duration-200 ease-out  "
          ref={title}
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Conheça o meu portfólio
          </h1>
        </div>

        <div
          className="opacity-0  transition-all duration-200 ease-out  "
          ref={subtitle}
        >
          <p className="max-w-[600px] mx-auto text-zinc-500 md:text-xl ">
            Sou um desenvolvedor Fron-End, com uma paixão em construir boas interfaces.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <div
          className="opacity-0 translate-y-[30px] transition-all duration-200 ease-out  "
          ref={link1}
        >
          <Link
            target="_blank"
            className="text-zinc-500 hover:text-foreground transition-colors"
            href={'https://github.com/MatheusAltrao'}
          >
            <Github size={20} />
          </Link>
        </div>

        <div
          className="opacity-0 translate-y-[30px] transition-all duration-200 ease-out  "
          ref={link2}
        >
          <Link
            target="_blank"
            className="text-zinc-500 hover:text-foreground transition-colors"
            href={'https://www.linkedin.com/in/matheus-altrao/'}
          >
            <Linkedin size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
