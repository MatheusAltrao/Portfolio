'use client';

import { gsap } from 'gsap';
import { useRef, useLayoutEffect } from 'react';

interface PreloadingProps {
    setIsPreLoading: (v: boolean) => void;
}

const Preloading = ({ setIsPreLoading }: PreloadingProps) => {
    const area = useRef<HTMLDivElement | null>(null);
    const barBg = useRef<HTMLDivElement | null>(null);
    const content = useRef<HTMLDivElement | null>(null);
    const barContent = useRef<HTMLDivElement | null>(null);
    const name = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(
            () => {
                gsap.to(name.current, {
                    opacity: 1,
                    translateY: 0,
                    delay: 1,
                    duration: 0.5,
                });
                gsap.to(barBg.current, { opacity: 1, delay: 2, duration: 1 });
                gsap.to(barContent.current, {
                    width: 180,
                    delay: 4,
                    duration: 1,
                });
                gsap.to(content.current, {
                    opacity: 0,
                    delay: 6,
                    visibility: 'hidden',
                    duration: 0.7,
                });
                gsap.to(area.current, {
                    opacity: 0,
                    display: 'none',
                    delay: 7,
                    duration: 0.7,
                    onComplete: () => {
                        setIsPreLoading(false);
                    },
                });
            },

            barBg,
        );

        return () => {
            ctx.revert();
        };
    }, [setIsPreLoading]);

    return (
        <div
            ref={area}
            className='w-screen h-screen  fixed overflow-hidden z-40 top-0 left-0  bg-black flex items-center justify-center '
        >
            <div
                ref={content}
                className=' opacity-1  flex items-center justify-center flex-col gap-4 relative'
            >
                <div
                    className=' opacity-0  transition-all duration-200 ease-out  translate-y-[30px]'
                    ref={name}
                >
                    <h2 className='text-2xl font-semibold   '>Matheus</h2>
                </div>

                <div
                    ref={barBg}
                    className='w-[180px] h-[4px] opacity-0  bg-zinc-700  rounded-[30px]'
                >
                    <div
                        ref={barContent}
                        className='w-0 h-full rounded-[30px] bg-zinc-200 transition-all ease-in '
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Preloading;
