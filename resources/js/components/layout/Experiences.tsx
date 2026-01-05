import Container from '@/components/layout/Container';

export default function Experiences() {
    return (
        <section id="experiences" className="bg-black text-white py-24">
            <Container>
                <div className="px-2 space-y-12 md:px-15 lg:px-4">

                    {/* HEADER */}
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Experiences
                        </h2>
                        <p className="text-gray-400">
                            A brief overview of my professional and organizational
                            experiences.
                        </p>
                    </div>

                    {/* TIMELINE */}
                    <div className="relative border-l border-white/20 pl-8 space-y-10">

                        {/* ITEM */}
                        <div className="relative">
                            <span className="absolute -left-[20px] top-0.5 h-4 w-4 rounded-full bg-white"></span>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-400">
                                    Jan 2024 – Present
                                </p>
                                <h3 className="text-lg font-semibold">
                                    Fullstack Developer
                                </h3>
                                <p className="text-sm text-gray-300">
                                    Freelance
                                </p>
                                <p className="text-sm text-gray-400 max-w-xl">
                                    Working on various web-based projects using
                                    Laravel, React, and modern UI practices.
                                </p>
                            </div>
                        </div>

                        {/* ITEM */}
                        <div className="relative">
                            <span className="absolute -left-[20px] top-0.5 h-4 w-4 rounded-full bg-white"></span>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-400">
                                    2023
                                </p>
                                <h3 className="text-lg font-semibold">
                                    UI / UX Designer
                                </h3>
                                <p className="text-sm text-gray-300">
                                    Organization / Campus Project
                                </p>
                                <p className="text-sm text-gray-400 max-w-xl">
                                    Designed user interfaces and improved user
                                    experiences for internal applications.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
