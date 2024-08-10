'use client';
import { projects } from '@/utils/projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Card from '../Card';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="space-y-16 "
    >
      <div
        data-aos="fade-up"
        className="space-y-4  text-left md:text-center "
      >
        <h2>Meus Projetos</h2>
        <p className="max-w-[600px] mx-auto text-zinc-500 md:text-xl ">
          Conheça os meus principais projetos desenvolvidos durante a minha carreira.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
          >
            <Card project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
