'use client';

import Image from 'next/image';

import { techs } from '@/utils/techs';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
          {techs.map((tech) => (
            <Tech
              key={tech.id}
              delay={tech.delay}
              name={tech.name}
              image={
                tech.type == 'image' ? (
                  <Image
                    className="w-[50px] h-[50px] "
                    src={tech.image}
                    alt={tech.name}
                    width={tech.width}
                    height={tech.height}
                  />
                ) : (
                  tech.image
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
