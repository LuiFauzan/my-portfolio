import Container from '@/components/layout/Container';

export default function Projects() {
    return (
        <section id="projects" className="bg-black text-white py-24">
            <Container>
                <div className="px-2 space-y-12 md:px-15 lg:px-4">

                    {/* HEADER */}
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Selected Projects
                        </h2>
                        <p className="text-gray-400">
                            A collection of projects I’ve worked on, ranging from
                            web applications to design-focused works.
                        </p>
                    </div>

                    {/* PROJECT GRID */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* PROJECT CARD */}
                        <div className="group border border-white/10 p-6 transition hover:border-white/90">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Project Title
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Short description about what this project is,
                                    what problem it solves, and what makes it
                                    interesting.
                                </p>

                                <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                                    <span className="border border-white/20 px-2 py-1">
                                        React
                                    </span>
                                    <span className="border border-white/20 px-2 py-1">
                                        Laravel
                                    </span>
                                    <span className="border border-white/20 px-2 py-1">
                                        Tailwind
                                    </span>
                                </div>

                                <div className="pt-4 flex gap-4 text-sm">
                                    <a
                                        href="#"
                                        className="underline underline-offset-4 hover:text-gray-300"
                                    >
                                        View Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="underline underline-offset-4 hover:text-gray-300"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group border border-white/10 p-6 transition hover:border-white/90">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Project Title
                                </h3>

                                <p className="text-sm text-gray-400">
                                    Short description about what this project is,
                                    what problem it solves, and what makes it
                                    interesting.
                                </p>

                                <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                                    <span className="border border-white/20 px-2 py-1">
                                        React
                                    </span>
                                    <span className="border border-white/20 px-2 py-1">
                                        Laravel
                                    </span>
                                    <span className="border border-white/20 px-2 py-1">
                                        Tailwind
                                    </span>
                                </div>

                                <div className="pt-4 flex gap-4 text-sm">
                                    <a
                                        href="#"
                                        className="underline underline-offset-4 hover:text-gray-300"
                                    >
                                        View Demo
                                    </a>
                                    <a
                                        href="#"
                                        className="underline underline-offset-4 hover:text-gray-300"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </Container>
        </section>
    );
}
