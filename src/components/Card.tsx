import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    name: string;
    description: string;
    image: string;
    link: string;
}

interface CardProps {
    project: ProjectProps;
}

const Card = ({ project }: CardProps) => {
    return (
        <div className='border border-zinc-900  rounded-lg  overflow-hidden  w-full'>
            <Image
                className='object-cover border-b border-zinc-900 h-[200px] w-full '
                src={project.image}
                alt=''
                width={300}
                height={200}
            />

            <div className='p-4 space-y-8 '>
                <div>
                    <h3 className='text-lg font-semibold'>{project.name}</h3>
                    <p className='text-sm text-zinc-400'>
                        {project.description}
                    </p>
                </div>

                <div>
                    <Link target='_blank' href={project.link}>
                        <Button
                            className='w-full flex items-center gap-2'
                            variant={'outline'}
                        >
                            Ver mais
                            <ArrowRight size={18} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
