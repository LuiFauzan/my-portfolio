import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
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
import { CopyX, Download, PenBoxIcon, PlusCircle, Trash2 } from 'lucide-react';
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
    flash?: {
        message: string;
    };
    projects: Projects[];
}
export default function ProjectIndex() {
    const { flash, projects } = usePage().props as ProjectsIndexProps;
    const {delete:destroy , } = useForm();

    const handleDeleteProject = ( id:number) => {
        destroy('/projects/' + id)
    }
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Projects" />
                <AdminLayout>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    Projects
                                </h1>
                                <p className="text-gray-500">
                                    List of your projects
                                </p>
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
                                        <TableHead>Slug</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Role</TableHead>
                                        <TableHead>Tech Stack</TableHead>
                                        <TableHead>Thumbnail</TableHead>
                                        <TableHead>Demo URL</TableHead>
                                        <TableHead>Repo URL</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Is Featured</TableHead>
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
                                            <TableCell>
                                                {project.slug}
                                            </TableCell>
                                            <TableCell>
                                                {project.description}
                                            </TableCell>
                                            <TableCell>
                                                {project.role}
                                            </TableCell>
                                            <TableCell>
                                                {project.tech_stack}
                                            </TableCell>
                                            <TableCell>
                                                <img src={`/storage/${project.thumbnail}`} width={50} alt="" />
                                            </TableCell>
                                            <TableCell>
                                                {project.demo_url}
                                            </TableCell>
                                            <TableCell>
                                                {project.repo_url}
                                            </TableCell>
                                            <TableCell>
                                                {project.type}
                                            </TableCell>
                                            <TableCell>
                                                {project.is_featured}
                                            </TableCell>
                                            <TableCell>
                                                <Button variant={'outline'}>
                                                    <PenBoxIcon />
                                                </Button>
                                                <Button variant={'destructive'} onClick={() => handleDeleteProject(project.id)}>
                                                    <Trash2 />
                                                </Button>
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
