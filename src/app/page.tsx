import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Preloading from '@/components/Preloading';

export default function Home() {
    return (
        <div className='min-h-screen w-full '>
            <Preloading />
            <Header />

            <div className='w-full max-w-[1200px] mx-auto '>
                <Hero />
                {/* <About /> */}
            </div>
        </div>
    );
}
