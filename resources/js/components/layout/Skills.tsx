import Container from '@/components/layout/Container';

export default function Skills() {
    return (
        <section id="skills" className="bg-black text-white py-24">
            <Container>
                <div className="px-2 md:px-15 lg:px-4 space-y-12">

                    {/* HEADER */}
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Skills & Tools
                        </h2>
                        <p className="text-gray-400">
                            Technologies and tools I use to build digital
                            products, from concept to production.
                        </p>
                    </div>

                    {/* SKILL GRID */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {/* FRONTEND */}
                        <div className="border border-white/10 p-6 space-y-4">
                            <h3 className="text-lg font-semibold">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                                <span className="border border-white/20 px-3 py-1">
                                    React
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    TypeScript
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    Tailwind CSS
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    Inertia.js
                                </span>
                            </div>
                        </div>

                        {/* BACKEND */}
                        <div className="border border-white/10 p-6 space-y-4">
                            <h3 className="text-lg font-semibold">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                                <span className="border border-white/20 px-3 py-1">
                                    Laravel
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    PHP
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    MySQL
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    REST API
                                </span>
                            </div>
                        </div>

                        {/* DESIGN & TOOLS */}
                        <div className="border border-white/10 p-6 space-y-4">
                            <h3 className="text-lg font-semibold">
                                Design & Tools
                            </h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                                <span className="border border-white/20 px-3 py-1">
                                    Figma
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    UI / UX
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    Git
                                </span>
                                <span className="border border-white/20 px-3 py-1">
                                    Docker
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
