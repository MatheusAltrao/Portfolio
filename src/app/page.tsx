import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <div className='min-h-screen w-full '>
            <Header />

            <div className='w-full max-w-[1200px] mx-auto '>
                <Hero />
            </div>
        </div>
    );
}
