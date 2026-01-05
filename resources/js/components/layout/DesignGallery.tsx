import Container from '@/components/layout/Container';

export default function DesignGallery() {
    return (
        <section className="bg-black text-white py-24">
            <Container>
                <div className="px-2 md:px-15 lg:px-4 space-y-12">

                    {/* HEADER */}
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Design Gallery
                        </h2>
                        <p className="text-gray-400">
                            A selection of UI and visual designs I’ve created.
                        </p>
                    </div>

                    {/* GALLERY GRID */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

                        {/* IMAGE ITEM */}
                        <div className="group relative overflow-hidden border border-white/10">
                            <img
                                src="/assets/design-1.jpg"
                                alt="Design 1"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* HOVER OVERLAY */}
                            <div className="absolute inset-0 flex items-end bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="p-3 text-sm text-gray-200">
                                    Landing Page UI
                                </div>
                            </div>
                        </div>

                        {/* DUPLICATE ITEM */}
                        <div className="group relative overflow-hidden border border-white/10">
                            <img
                                src="/assets/design-2.jpg"
                                alt="Design 2"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
}
