import AdminLayout from '@/components/layout/AdminLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { CopyX, Download, Megaphone, PenBoxIcon, PlusCircle, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Experiences',
        href: '/experiences'
    }
]

interface Experiences {
    id: string
    title: string
    company: string
    type: string
    start_date: string
    end_date: string
    description: string
}

interface ExperienceIndexProps {
    flash: {
        message?: string
    }
    experiences: Experiences[]
}

export default function ExperienceIndex({flash, experiences} : ExperienceIndexProps) {
    const {delete:destroy} = useForm()

    const handleDelete = (id:number) => {
        destroy(`/experiences/${id}`)
    }
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title='Experiences'/>
                <AdminLayout>
                     <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    EXPERIENCES
                                </h1>
                                <p className="text-gray-500">
                                    List of your experiences
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
                                    Download all experiences
                                </Button>
                                <Link href={'/experiences/create'}>
                                    <Button>
                                        <PlusCircle />
                                        Create new experience
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
                                        <TableHead>Company</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Description</TableHead>
                                        <TableHead>Start Date</TableHead>
                                        <TableHead>End Date</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {experiences.map((exp,no) => (

                                    <TableRow key={exp.id}>
                                        <TableCell>{no + 1}</TableCell>
                                        <TableCell>{exp.title}</TableCell>
                                        <TableCell>{exp.company}</TableCell>
                                        <TableCell>{exp.type}</TableCell>
                                        <TableCell>{exp.description}</TableCell>
                                        <TableCell>{exp.start_date}</TableCell>
                                        <TableCell>{exp.end_date}</TableCell>
                                        <TableCell>
                                            <div className='flex gap-2'>

                                            {/* <Link href={`/experiences/${exp.id}/edit`}>
                                                <Button variant={'blueyungkai'}>
                                                    <PenBoxIcon/>
                                                </Button>
                                            </Link> */}
                                            <Button variant={'destructive'} onClick={() => handleDelete(exp.id)}>
                                                <Trash2/>
                                            </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {experiences.length == 0 && (
                                <div className="mt-10 flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
                                    <CopyX
                                        size={50}
                                        className=""
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-lg font-semibold">
                                        No Experiences found
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Try creating a new experiences.
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
