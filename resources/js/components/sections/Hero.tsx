import Container from '@/components/layout/Container';

export default function Hero() {
    return (
        <section className="pt-14 flex min-h-screen bg-black text-white border">
            <Container>
                <div className="flex w-full flex-col gap-10 px-10 justify-between">
                    <div className="flex items-center justify-center text-center left-0">
                        <p className=" text-left top-40">Developer / Designer</p>
                    </div>
                    <div className="w-12/12 border">
                        <h1 className=" text-6xl font-extrabold">
                            Lui Fauzan
                        </h1>

                        <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sequi, necessitatibus.
                        </p>
                    </div>
                    <div className=''>
                        <div className='border'>
                            icon
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
