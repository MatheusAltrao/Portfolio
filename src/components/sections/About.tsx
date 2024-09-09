'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
import Profile from '../../../public/services/profile.jpeg';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about">
      <div className="flex items-center justify-between flex-col-reverse md:flex-row gap-4">
        <div
          data-aos="fade-right"
          className="space-y-4"
        >
          <h2>Sobre mim</h2>
          <p className="max-w-[600px] text-zinc-500 md:text-xl ">
            Com uma paixão pelo desenvolvimento Front-end. Tenho experiência sólida em Next.js,
            Firebase e Tailwind CSS, aproveitando o poder dessas tecnologias para criar interfaces
            dinâmicas e eficientes.
            <br /> <br /> Me atualizo constantemente para expandir meu conjunto de habilidades e
            elevar a qualidade do meu trabalho como desenvolvedor Front-end.
          </p>
        </div>
        <div className="relative h-[450px] max-w-[450px] w-full overflow-hidden rounded-md">
          <Image
            data-aos="fade-left"
            alt=""
            src={Profile}
            className="h-full w-full rounded-md transition-transform hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
