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
import { CopyX, Download, Megaphone } from 'lucide-react';
import { useEffect, useState } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testimonial',
        href: '/testimonials',
    },
];

interface Testimonials {
    id:number
    name:string
    role:string
    message:string
    avatar: string | null
}
interface ProjectsIndexProps {
    flash: {
        message?: string;
    };
    testimonials: Testimonials[];
}
export default function ProjectIndex() {
    const { flash, testimonials } = usePage().props as ProjectsIndexProps;
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
    // const { delete: destroy } = useForm();

    // const handleDeleteProject = (id: number) => {
    //     destroy('/testimonials/' + id);
    // };
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Testimonials" />
                <AdminLayout>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    TESTIMONIALS
                                </h1>
                                <p className="text-gray-500">
                                    List of your testimonials
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
                                    Download all testimonials
                                </Button>
                                {/* <Link href={'/testimonials/create'}>
                                    <Button>
                                        <PlusCircle />
                                        Create new testimonial
                                    </Button>
                                </Link> */}
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
                                        <TableHead>Role</TableHead>
                                        <TableHead>Message</TableHead>
                                        <TableHead>Avatar</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {testimonials.map((test, index) => (
                                        <TableRow key={test.id}>
                                            <TableCell className="font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                {test.name}
                                            </TableCell>
                                            <TableCell>
                                                {test.role}
                                            </TableCell>
                                            <TableCell>
                                                {test.message}
                                            </TableCell>
                                            <TableCell>
                                                {test.avatar}
                                            </TableCell>
                                            {/* <TableCell>
                                                {project.slug}
                                            </TableCell> */}

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {testimonials.length == 0 && (
                                <div className="mt-10 flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
                                    <CopyX
                                        size={50}
                                        className=""
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-lg font-semibold">
                                        No Testimonials found
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Try creating a new testimonial.
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
