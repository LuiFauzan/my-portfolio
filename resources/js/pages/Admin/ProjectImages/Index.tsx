import AdminLayout from '@/components/layout/AdminLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';
import { Download, ImageOff, Megaphone, PlusCircle, Trash2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Project Images',
        href: '/project-images',
    },
];
interface Project {
    id: number;
    title: string;
    description: string;
}

interface ProjectImage {
    id: number;
    image: string;
    project: Project;
}

interface ProjectImageProps {
    flash: {
        message?: string;
    };
    projectImages: ProjectImage[];
}

export default function ProjectImageIndex({
    flash,
    projectImages,
}: ProjectImageProps) {
    const {delete:destroy} = useForm()
    const handleDelete = (id:number) => {
        destroy('/project-images/' + id)
    }
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Project Images" />
                <AdminLayout>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold">
                                    Project Images
                                </h1>
                                <p className="text-gray-500">
                                    List of your project images
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
                                    Download all images
                                </Button>
                                {/* <Link href={'/project-images/create'}>
                                    <Button>
                                        <PlusCircle />
                                        Create new Image
                                    </Button>
                                </Link> */}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {projectImages.map((pi, no) => (
                                <Card
                                    key={pi.id}
                                    className="group overflow-hidden transition-all hover:shadow-lg"
                                >
                                    {/* IMAGE */}
                                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                        <img
                                            src={`/storage/${pi.image}`}
                                            alt={pi.project.title}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />

                                        {/* PROJECT ID / LABEL */}
                                        <span className="absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                                            #{no + 1}
                                        </span>

                                        {/* HOVER ACTION */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                            <Button
                                                size="sm"
                                                variant="secondary"
                                            >
                                                Preview
                                            </Button>
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <CardContent className="space-y-1 p-3">
                                        <div className="truncate flex gap-2 text-sm font-semibold">
                                            <span className="rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                                                #{pi.project.id}
                                            </span>
                                            {pi.project.title}
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {pi.project.description}
                                        </p>
                                    </CardContent>

                                    {/* FOOTER */}
                                    <CardFooter className="flex justify-end gap-2 p-3">
                                        <Button
                                            size="icon"
                                            variant="destructive"
                                            onClick={() => handleDelete(pi.id)}
                                        >
                                            <Trash2/>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                    {projectImages.length == 0 && (
                          <div className="mt-10 flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center">
                                    <ImageOff
                                        size={50}
                                        className=""
                                        strokeWidth={1.5}
                                    />
                                    <h3 className="mt-5 text-lg font-semibold">
                                        No Images found
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Try to add new images.
                                    </p>
                                </div>
                    )}
                </AdminLayout>
            </AppLayout>
        </>
    );
}
