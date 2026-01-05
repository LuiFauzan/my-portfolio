import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { AppWindow, Bolt,Github, Images, Instagram, LayoutGrid, ShieldCheck, Sparkles, UserRoundSearch } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Project',
        href: '/projects',
        icon: AppWindow
    },
    {
        title: 'Project Image',
        href: '/project-images',
        icon: Images
    },
    {
        title: 'Skill',
        href: '/skills',
        icon: Bolt
    },
    // {
    //     title: 'Skill Image',
    //     href: '/skill-images',
    //     icon: Images
    // },
    {
        title: 'Experience',
        href: '/experiences',
        icon: Sparkles
    },
    {
        title: 'Social',
        href: '/socials',
        icon: UserRoundSearch
    },
    {
        title: 'Testimonial',
        href: '/testimonials',
        icon: ShieldCheck
    }
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/luifauzan',
        icon: Github,
    },
    {
        title: 'Documentation',
        href: 'https://instagram.com/lui.fauzan',
        icon: Instagram,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
