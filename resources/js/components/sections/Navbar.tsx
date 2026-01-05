import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experiences' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 z-50 w-full px-4 ">
            <div
                className={`mx-auto flex max-w-[1430px] items-center border-0  justify-between rounded-2xl px-6 py-4 transition-all duration-500 ${
                    scrolled
                        ? `border border-white/10 bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl`
                        : `bg-transparent`
                } `}
            >
                {/* LOGO */}
                <a href="#" className="flex items-center gap-2">
                    <img
                        src="/assets/img/lf-logo-putih.svg"
                        alt="Logo"
                        className="w-10"
                    />
                </a>

                {/* DESKTOP MENU */}
                <div className="hidden items-center gap-8 text-sm md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="relative text-gray-200 transition after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:text-white hover:after:w-full"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    className="rounded-lg border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div  className="
            md:hidden
            mx-auto mt-3 max-w-7xl
            rounded-2xl
            border border-white/10
            bg-white/10
            backdrop-blur-xl
            shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        ">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-base text-gray-200 transition hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
