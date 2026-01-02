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
import { Head, Link, useForm } from '@inertiajs/react';
import { CopyX, Download, PenBoxIcon, PlusCircle, Trash2 } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Skills',
        href: '/skills',
    },
];

interface Skills {
    id: number;
    name: string;
    category: string;
    level: string;
    icon?: string | null;
}

interface SkillProps {
    skills: Skills[];
    flash: {
        message?: string;
    };
}
export default function SkillIndex({ flash, skills }: SkillProps) {
    const {delete:destroy} = useForm()
    const handleDelete = (id:number) => {
        destroy(`/skills/${id}`)
    }
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Skills" />
                <AdminLayout>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    SKILLS
                                </h1>
                                <p className="text-gray-500">
                                    List of your projects
                                </p>
                            </div>
                            <div className="absolute top-20 left-5/12 z-auto">
                                {/* Display Message Success */}
                                {/* {showFlash && flash.message && (
                                    <Alert className="w-fit border-green-400 text-green-600 shadow-md">
                                        <Megaphone />
                                        <AlertTitle>Notifications</AlertTitle>
                                        <AlertDescription className="text-green-500">
                                            {flash.message}
                                        </AlertDescription>
                                    </Alert>
                                )} */}
                            </div>
                            <div className="flex gap-2">
                                <Button variant={'outline'}>
                                    <Download />
                                    Download all skills
                                </Button>
                                <Link href={'/skills/create'}>
                                    <Button>
                                        <PlusCircle />
                                        Create new skill
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
                                        <TableHead>Name</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Level</TableHead>
                                        <TableHead>Icon</TableHead>
                                        <TableHead>Action</TableHead>
                                        {/* <TableHead>Slug</TableHead> */}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {skills.map((skill, no) => (
                                        <TableRow key={skill.id}>
                                            <TableCell>{no + 1}</TableCell>
                                            <TableCell>{skill.name}</TableCell>
                                            <TableCell>
                                                {skill.category}
                                            </TableCell>
                                            <TableCell>{skill.level}</TableCell>
                                            <TableCell>
                                                <img
                                                    src={`/storage/${skill.icon}`}
                                                    width={60}
                                                    alt=""
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex gap-2'>

                                                <Link
                                                    href={`/skills/${skill.id}/edit`}
                                                >
                                                    <Button variant={'blueyungkai'}>
                                                        <PenBoxIcon />
                                                    </Button>
                                                </Link>
                                                <Button variant={'destructive'} onClick={() => handleDelete(skill.id)}>
                                                    <Trash2/>
                                                </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {skills.length == 0 && (
                                <div className="mt-10 flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
                                    <CopyX
                                        size={50}
                                        className=""
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-lg font-semibold">
                                        No Skills found
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Try creating a new skills.
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
