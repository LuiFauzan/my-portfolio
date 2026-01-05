import Container from '@/components/layout/Container';
import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-15 lg:px-4">

                    {/* LEFT */}
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} <a href="#" className='hover:underline'> Lui Fauzan</a>. All rights reserved.
                    </p>

                    {/* CENTER */}
                    <div className="flex gap-6 text-sm text-gray-300">
                        <a
                            href="#projects"
                            className="hover:text-white transition"
                        >
                            Projects
                        </a>
                        <a
                            href="#skills"
                            className="hover:text-white transition"
                        >
                            Skills
                        </a>
                        <a
                            href="#experiences"
                            className="hover:text-white transition"
                        >
                            Experience
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-white transition"
                        >
                            Contact
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex gap-4 text-gray-400">
                        <a
                            href="https://github.com/luifauzan"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            <Github/>
                        </a>
                        <a
                            href="https://instagram.com/lui.fauzan"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            <Instagram/>
                        </a>
                        <a
                            href="https://linkedin.com/in/luifauzan"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            <Linkedin/>
                        </a>
                    </div>

                </div>
            </Container>
        </footer>
    );
}
