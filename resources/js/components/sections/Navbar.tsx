import { Button } from '@/components/ui/button';
import { PanelBottomOpen, PanelTopOpen } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="rounded-md p-2 fixed w-[372px]">
            <div className="flex items-center justify-between">
                <div>
                    <img
                        src="assets/img/lf-logo-putih.svg"
                        className={`transition-transform duration-300 w-[40px] ${open ? 'rotate-90' : 'rotate-0'}`}
                        alt=""
                    />
                </div>
                
                {/*Bar Desktop Mode */}
                <div className="hidden lg:block"></div>
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
                    <div className="absolute  top-14 right-[6.5 px] flex w-[359px] flex-row p-2 gap-1 rounded-md border lg:hidden z-50">
                        <div className='flex flex-col'>
                            <a onClick={() => setOpen(!open)} className='p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-125 rounded-md  w-fit ' href="#about">About</a>
                            <a onClick={() => setOpen(!open)} className='p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-125 rounded-md  w-fit ' href="#about">Project</a>
                            {/* <Button variant={'outline'}>Login</Button> */}
                        </div>
                        <div className='flex flex-col'>
                            <a onClick={() => setOpen(!open)} className='p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-125 rounded-md  w-fit ' href="#about">Skills</a>
                            <a onClick={() => setOpen(!open)} className='p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-125 rounded-md  w-fit ' href="#about">Experience</a>
                        </div>
                        <div className='flex flex-col'>
                            <a onClick={() => setOpen(!open)} className='p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-125 rounded-md  w-fit ' href="#about">Contact</a>
                            <a onClick={() => setOpen(!open)} className='p-2 transition-all duration-300 hover:bg-white hover:text-black hover:scale-125 rounded-md  w-fit ' href="#about"></a>
                        </div>

                    </div>
                )}
            </div>
        </nav>
    );
}
