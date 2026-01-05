import Container from '@/components/layout/Container';

export default function About() {
    return (
        <section id='about' className="bg-black text-white py-24">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 px-2 md:px-15 lg:px-4">

                    {/* LEFT */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            About Me
                        </h2>

                        <p className="text-gray-300 leading-relaxed">
                            I’m a developer with a strong interest in building
                            clean, functional, and user-focused digital
                            products. I enjoy turning ideas into real,
                            usable experiences through code and design.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            
                            My main focus is web development, but I also care
                            deeply about UI/UX, performance, and maintaining
                            clean, scalable code.
                        </p>

                        {/* OPTIONAL CTA */}
                        <div className="pt-4">
                            <a
                                href="#projects"
                                className="inline-block border border-white/20 px-6 py-2 text-sm hover:bg-white hover:text-black transition"
                            >
                                View My Projects
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-gray-200">
                            What I Do
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li>• Web Development (Frontend & Backend)</li>
                            <li>• UI / UX Design</li>
                            <li>• REST API & Database Design</li>
                            <li>• Performance & Code Optimization</li>
                        </ul>

                        <p className="text-sm text-gray-500">
                            Currently open to freelance projects, collaborations,
                            or full-time opportunities.
                        </p>
                    </div>

                </div>
            </Container>
        </section>
    );
}
