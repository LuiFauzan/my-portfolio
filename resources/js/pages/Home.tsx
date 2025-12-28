import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';

export default function Home() {
    return (
        <>
            <div className="bg-black p-2 mx-auto items-center lg:block text-white lg:px-40 md:px-32 md:py-2 lg:py-2">
                <header>
                    <a href="/login">login</a>
                    <Navbar />
                </header>
                <Hero />
            </div>
        </>
    );
}
