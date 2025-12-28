import Container from '@/components/layout/Container';

export default function Hero() {
    return (
        <section className="mt-14 flex min-h-screen bg-black text-white">
            <Container>
                <div className="flex w-full flex-col gap-10 border px-10">
                    <div className="flex items-center justify-center text-center border left-0">
                        <p className=" text-left rotate-270 top-40">Developer / Designer</p>
                    </div>
                    <div className="w-full border">
                        <h1 className=" text-4xl font-extrabold">
                            Lui Fauzan
                        </h1>

                        <p className="">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi, necessitatibus.
                        </p>
                    </div>
                    <div className="hidden">
                        <span>WELCOME .</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
