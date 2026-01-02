import AdminLayout from '@/components/layout/AdminLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { DialogTrigger } from '@radix-ui/react-dialog';
import {
    CheckCircle,
    CopyX,
    Download,
    Github,
    ImageUpscale,
    Megaphone,
    PenBoxIcon,
    PlusCircle,
    SquareArrowOutUpRight,
    Trash2,
    XCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Project',
        href: '/projects',
    },
];

interface Projects {
    id: number;
    title: string;
    slug: string;
    description: string;
    role?: string | null;
    tech_stack?: string[] | null;
    thumbnail?: string | null;
    demo_url?: string | null;
    repo_url?: string | null;
    type: string;
    is_featured: boolean;
}
interface ProjectsIndexProps {
    flash: {
        message?: string;
    };
    projects: Projects[];
}
export default function ProjectIndex() {
    const { flash, projects } = usePage().props as ProjectsIndexProps;
    const [showFlash, setShowFlash] = useState(!!flash?.message);
    useEffect(() => {
        if (flash.message) {
            setShowFlash(true);
            const timer = setTimeout(() => {
                setShowFlash(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [flash.message]);
    const { delete: destroy } = useForm();

    const handleDeleteProject = (id: number) => {
        destroy('/projects/' + id);
    };
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Projects" />
                <AdminLayout>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    PROJECTS
                                </h1>
                                <p className="text-gray-500">
                                    List of your projects
                                </p>
                            </div>
                            <div className="absolute top-20 left-5/12 z-auto">
                                {/* Display Message Success */}
                                {showFlash && flash.message && (
                                    <Alert className="w-fit border-green-400 text-green-600 shadow-md">
                                        <Megaphone />
                                        <AlertTitle>Notifications</AlertTitle>
                                        <AlertDescription className="text-green-500">
                                            {flash.message}
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </div>
                            <div className="flex gap-2">
                                <Button variant={'outline'}>
                                    <Download />
                                    Download all projects
                                </Button>
                                <Link href={'/projects/create'}>
                                    <Button>
                                        <PlusCircle />
                                        Create new project
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="rounded-md border p-2">
                            <Table className="rounded-md">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">
                                            #
                                        </TableHead>
                                        <TableHead>Title</TableHead>
                                        {/* <TableHead>Slug</TableHead> */}
                                        <TableHead>Description</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Tech Stack</TableHead>
                                        <TableHead>Thumbnail</TableHead>
                                        <TableHead>Demo URL</TableHead>
                                        <TableHead>Repo URL</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead className="flex items-center justify-center">
                                            Is Featured
                                        </TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project, index) => (
                                        <TableRow key={project.id}>
                                            <TableCell className="font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                {project.title}
                                            </TableCell>
                                            {/* <TableCell>
                                                {project.slug}
                                            </TableCell> */}
                                            <TableCell>
                                                {project.description}
                                            </TableCell>
                                            <TableCell>
                                                {project.role}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech_stack?.map(
                                                        (tech, index) => (
                                                            <Badge
                                                                key={index}
                                                                // variant="default"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className='flex gap-2'>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button>
                                                            <ImageUpscale />
                                                            Preview
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="p-2">
                                                        <img
                                                            src={`/storage/${project.thumbnail}`}
                                                            alt=""
                                                        />
                                                    </DialogContent>
                                                </Dialog>
                                                <Link href={`/project-images/create?project_id=${project.id}`}>
                                                <Button>
                                                    <PlusCircle />
                                                    Add Image
                                                </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link
                                                    href={`${project.repo_url}`}
                                                >
                                                    <Button>
                                                        <SquareArrowOutUpRight />
                                                        Demo App
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link
                                                    href={`${project.repo_url}`}
                                                >
                                                    <Button>
                                                        <Github />
                                                        Github
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                {project.type}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex justify-center">
                                                    {project.is_featured ? (
                                                        <span className="text-green-500">
                                                            <CheckCircle />
                                                        </span>
                                                    ) : (
                                                        <span className="text-red-500">
                                                            <XCircle />
                                                        </span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    <Link
                                                        href={`/projects/${project.id}/edit`}
                                                    >
                                                        <Button
                                                            variant={
                                                                'blueyungkai'
                                                            }
                                                        >
                                                            <PenBoxIcon />
                                                        </Button>
                                                    </Link>
                                                    <Button
                                                        variant={'destructive'}
                                                        onClick={() =>
                                                            handleDeleteProject(
                                                                project.id
                                                            )
                                                        }
                                                    >
                                                        <Trash2 />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {projects.length == 0 && (
                                <div className="mt-10 flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
                                    <CopyX
                                        size={50}
                                        className=""
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-lg font-semibold">
                                        No Projects found
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Try creating a new projects.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
