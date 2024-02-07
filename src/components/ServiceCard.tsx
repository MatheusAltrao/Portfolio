'use client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';
import { Button } from './ui/button';
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useEffect } from 'react';

interface ServiceCardProps {
    title: string;
    image: StaticImageData;
    description: ReactNode;
    reverse: boolean;
}

const ServiceCard = ({
    title,
    image,
    description,
    reverse,
}: ServiceCardProps) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className={`flex items-center gap-8  flex-col-reverse ${
                reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }   w-full  justify-between`}
        >
            <div
                data-aos='fade-right'
                className='w-full max-w-[450px] space-y-8'
            >
                <div className=' space-y-4'>
                    <h2>{title}</h2>

                    {description}
                </div>

                <div className='flex items-center gap-2'>
                    <Link
                        target='_blank'
                        href='https://wa.me//5567999271900?text=Tenho%20interesse%20em%20desenvolver%20um%20projeto'
                    >
                        <Button variant={'outline'}>
                            Criar projeto juntos
                        </Button>
                    </Link>

                    <a href='#skills'>
                        {' '}
                        <Button variant={'outline'}>Ver tecnologias</Button>
                    </a>
                </div>
            </div>

            <div
                data-aos='fade-right'
                className=' overflow-hidden flex items-center justify-center lg:justify-end '
            >
                <Image
                    alt=''
                    src={image}
                    className=' h-auto  w-full max-w-[450px] rounded-lg  '
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw '
                />
            </div>
        </div>
    );
};

export default ServiceCard;
