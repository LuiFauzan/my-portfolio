import AdminLayout from '@/components/layout/AdminLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { CopyX, Download, Megaphone, PenBoxIcon, PlusCircle, Trash2 } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Socials',
        href: '/socials',
    },
];

interface Socials {
    id: number;
    platform:string
    url: string | null
    icon: string | null
}

interface SocialProps {
    socials: Socials[];
    flash: {
        message?: string;
    };
}
export default function SocialIndex({ flash, socials }: SocialProps) {
    const {delete:destroy} = useForm()
    const handleDelete = (id:number) => {
        destroy(`/socials/${id}`)
    }
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Socials" />
                <AdminLayout>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    SOCIALS
                                </h1>
                                <p className="text-gray-500">
                                    List of your social
                                </p>
                            </div>
                            <div className="absolute top-20 left-5/12 z-auto">
                                {/* Display Message Success */}
                                {flash.message && (
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
                                    Download all social
                                </Button>
                                <Link href={'/socials/create'}>
                                    <Button>
                                        <PlusCircle />
                                        Create new social
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
                                        <TableHead>Platform</TableHead>
                                        <TableHead>Url</TableHead>
                                        <TableHead>Icon</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {socials.map((social, no) => (
                                        <TableRow key={social.id}>
                                            <TableCell>{no + 1}</TableCell>
                                            <TableCell>{social.platform}</TableCell>
                                            <TableCell>
                                                {social.url}
                                            </TableCell>
                                            <TableCell>
                                                <img
                                                    src={`/storage/${social.icon}`}
                                                    width={60}
                                                    alt=""
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex gap-2'>


                                                <Button variant={'destructive'} onClick={() => handleDelete(social.id)}>
                                                    <Trash2/>
                                                </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {socials.length == 0 && (
                                <div className="mt-10 flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
                                    <CopyX
                                        size={50}
                                        className=""
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-lg font-semibold">
                                        No Socials found
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Try creating a new socials.
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
