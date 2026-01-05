import Container from '@/components/layout/Container';

export default function Contact() {
    return (
        <section id="contact" className="bg-black text-white py-24">
            <Container>
                <div className="px-6 md:px-15 lg:px-4 space-y-12 max-w-3xl">

                    {/* HEADER */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400">
                            Interested in working together or have a question?
                            Feel free to reach out.
                        </p>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="space-y-4 text-gray-300">
                        <p>
                            Email:{' '}
                            <a
                                href="mailto:luifauzan03@email.com"
                                className="underline underline-offset-4 hover:text-white"
                            >
                                luifauzan03@email.com
                            </a>
                        </p>

                        <p>
                            GitHub:{' '}
                            <a
                                href="https://github.com/luifauzan"
                                target="_blank"
                                className="underline underline-offset-4 hover:text-white"
                            >
                                github.com/luifauzan
                            </a>
                        </p>

                        <p>
                            Instagram:{' '}
                            <a
                                href="https://instagram.com/lui.fauzan"
                                target="_blank"
                                className="underline underline-offset-4 hover:text-white"
                            >
                               instagram.com/lui.fauzan
                            </a>
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                        <a
                            href="mailto:luifauzan@email.com"
                            className="inline-block border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition"
                        >
                            Say Hello
                        </a>
                    </div>

                </div>
            </Container>
        </section>
    );
}
