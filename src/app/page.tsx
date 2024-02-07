'use client';
import About from '@/components/sections/About';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Preloading from '@/components/Preloading';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [isPreloading, setIsPreLoading] = useState(true);

    console.log(isPreloading);

    return (
        <div
            className={` w-screen overflow-x-hidden ${
                isPreloading
                    ? 'h-screen  overflow-hidden overflow-x-hidden overflow-y-hidden'
                    : 'min-h-screen'
            }  `}
        >
            <Preloading setIsPreLoading={setIsPreLoading} />
            <Header />

            <div className='w-full max-w-[1200px] mx-auto px-2 '>
                <Hero />
                <About />
                <Services />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}
