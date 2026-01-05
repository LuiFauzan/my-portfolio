import About from '@/components/layout/About';
import Contact from '@/components/layout/Contact';
import DesignGallery from '@/components/layout/DesignGallery';
import Experiences from '@/components/layout/Experiences';
import Projects from '@/components/layout/Projects';
import Skills from '@/components/layout/Skills';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/sections/Navbar';
import { Head } from '@inertiajs/react';

interface Skill {
    name:string
    category:string
    level:string
    icon:string | null
}


interface HomeProps {
    skills: Skill[]
}
export default function Home({skills}: HomeProps) {
    return (
        <>
            <Head title='Lui Fauzan - Develover & Designer'>
                <link rel="preconnect" href="https://fonts.bunny.net" />

                <link href="https://fonts.bunny.net/css?family=abel:400|aboreto:400|abril-fatface:400|almendra-sc:400" rel="stylesheet" />
            </Head>
            <div className="mx-auto items-center bg-black text-white lg:block font-abel">
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <DesignGallery />
                <Skills skills={skills}/>
                <Experiences />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
