import { PanelTopOpen } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="fixed z-50 w-full rounded-md p-2 px-10 pt-4 md:px-39 md:pt-5 lg:w-full lg:px-64 lg:pt-7">
            <div className="flex items-center justify-between lg:py-2">
                <div className="">
                    <a href="#">
                        <img
                            src="assets/img/lf-logo-putih.svg"
                            className={`w-[40px] transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}
                            alt=""
                        />
                    </a>
                </div>

                {/*Bar Desktop Mode */}
                <div className="hidden md:block lg:block">
                    {/* <Button variant={'outline'} className='text-black' disabled>
                        Become a member
                    </Button> */}
                    <a
                        className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                        href="#projects"
                    >
                        Projects
                    </a>
                    <a
                        className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                        href="#skills"
                    >
                        Skills
                    </a>
                    <a
                        className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                        href="#experiences"
                    >
                        Experience
                    </a>
                    <a
                        className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                        href="#contact"
                    >
                        Contact
                    </a>
                </div>
                {/* Bar Mobile Mode */}
                <button
                    className="rounded-md border p-2 md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <div
                        className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'} `}
                    >
                        <PanelTopOpen />
                    </div>
                </button>
                {/* Mobile Menu */}
                {open && (
                    <div className="absolute top-16 right-[40px] z-50 flex w-[305px] flex-row gap-1 rounded-md bg-black p-2 shadow-xs shadow-white lg:hidden">
                        <div className="flex flex-col">
                            <a
                                onClick={() => setOpen(!open)}
                                className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                                href="#about"
                            >
                                About
                            </a>
                            <a
                                onClick={() => setOpen(!open)}
                                className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                                href="#projects"
                            >
                                Project
                            </a>
                            {/* <Button variant={'outline'}>Login</Button> */}
                        </div>
                        <div className="flex flex-col">
                            <a
                                onClick={() => setOpen(!open)}
                                className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                                href="#skills"
                            >
                                Skills
                            </a>
                            <a
                                onClick={() => setOpen(!open)}
                                className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                                href="#experiences"
                            >
                                Experience
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <a
                                onClick={() => setOpen(!open)}
                                className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                                href="#contact"
                            >
                                Contact
                            </a>
                            <a
                                onClick={() => setOpen(!open)}
                                className="w-fit rounded-md p-2 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black"
                                href="#about"
                            ></a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
