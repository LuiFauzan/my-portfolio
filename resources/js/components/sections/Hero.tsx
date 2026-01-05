import Container from '@/components/layout/Container';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { Button } from '../ui/button';
import { Link } from '@inertiajs/react';

export default function Hero() {
    const roleRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const iconsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ROLE
            gsap.from(roleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: 'power3.out',
            });

            // TITLE (LETTER BY LETTER)
            const letters = titleRef.current?.querySelectorAll('span');
            if (letters) {
                gsap.from(letters, {
                    y: 80,
                    opacity: 0,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.1,
                    delay: 0.2,
                });
            }

            // DESCRIPTION
            gsap.from(descRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.8,
            });

            // ICONS
            const icons = iconsRef.current?.children;
            if (icons) {
                gsap.from(icons, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    stagger: 0.15,
                    delay: 1.2,
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-10">
                <div className="animate-float absolute top-[-20%] left-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]"></div>
                <div className="animate-float-delay absolute right-[-10%] bottom-[-20%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]"></div>
            </div>

            {/* Grain */}
            {/* <div className="pointer-events-none absolute inset-0 bg-[url('/assets/img/noise.png')] opacity-[0.08]"></div> */}

            <Container>
                <div className="flex w-full flex-col gap-12 px-2 md:px-15 lg:px-4">
                    {/* ROLE */}
                    <p
                        ref={roleRef}
                        className="text-sm tracking-widest text-gray-400 uppercase"
                    >
                        Developer / Designer
                    </p>

                    {/* NAME */}
                    <h1
                        ref={titleRef}
                        className="font-abril text-5xl leading-tight font-extrabold md:text-7xl lg:text-[269px]"
                    >
                        {'Lui Fauzan'.split('').map((char, i) => (
                            <span key={i} className="inline-block">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </h1>

                    {/* DESCRIPTION */}
                    <p
                        ref={descRef}
                        className="max-w-xl text-base text-gray-300 md:text-lg"
                    >
                        I build clean, functional, and thoughtful digital
                        experiences — focusing on web development and UI design.
                    </p>

                    {/* ICONS */}
                    <div ref={iconsRef} className="z-50">
                        <Link href={'#contact'}>
                        <Button className=" text-black font-extrabold" variant={'outline'}>Become Partner</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
