'use client';

import * as imports from './imports';

import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Computer, Pyramid, Shield, User } from 'lucide-react';
import { useEffect } from 'react';
import Tech from '../Tech';

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills">
      <div className="flex items-start justify-center lg:justify-between flex-col lg:flex-row gap-8">
        <div
          data-aos="fade-right"
          className="max-w-[350px]"
        >
          <h3 className=" text-2xl font-bold  ">Minhas Tecnologias</h3>
          <p className="text-zinc-500">Essas são as ferramentas mais utilizadas por mim.</p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 w-full">
          <Tech
            delay="100"
            name="HTML"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoHtml}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="CSS"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoCss}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Sass"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoSass}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Tailwind"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoTailwind}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Javascript"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoJavascript}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Typescript"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoTs}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="ReactJS"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoReactjs}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="NextJS"
            image={
              <Image
                className="w-[50px] h-[50px]"
                src={imports.LogoNextjs}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Next Auth"
            image={
              <div className=" h-3.125rem] flex items-center justify-center">
                <Shield
                  strokeWidth={1}
                  size={52}
                />
              </div>
            }
          />

          <Tech
            delay="100"
            name="Firebase"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoFirebase}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="MongoDB"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.MongoDB}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Prisma"
            image={
              <div className=" h-3.125rem] flex items-center justify-center">
                <Pyramid
                  strokeWidth={1}
                  size={52}
                />
              </div>
            }
          />

          <Tech
            delay="100"
            name="Axios"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.Axios}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Docker"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.Docker}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Git"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoGit}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="Figma"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoFigma}
                alt=""
                width={50}
                height={50}
              />
            }
          />

          <Tech
            delay="100"
            name="UI"
            image={
              <div className=" h-3.125rem] flex items-center justify-center">
                <Computer
                  strokeWidth={1}
                  size={52}
                />
              </div>
            }
          />

          <Tech
            delay="100"
            name="UX"
            image={
              <div className=" h-3.125rem] flex items-center justify-center">
                <User
                  strokeWidth={1}
                  size={52}
                />
              </div>
            }
          />

          <Tech
            delay="100"
            name="GSAP"
            image={
              <Image
                className="w-[50px] h-[50px] "
                src={imports.LogoGsap}
                alt=""
                width={50}
                height={50}
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
