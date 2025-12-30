import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Project Images',
        href: '/project-images',
    },
    {
        title: 'Project Images Create',
        href: '/project-images/create',
    },
];

interface ProjectProps {
    project: {
        id: number;
        title: string;
    };
}

export default function ProjectImageCreate({ project }: ProjectProps) {
    const { data, setData, post } = useForm({
        // _method: 'put',
        project_id: project.id,
        image: null as File | null,
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/project-images', {
            forceFormData: true,
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Project Images Create" />
            <AdminLayout>
                {/* PROJECT CONFIRMATION */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">
                        Add Image to Project:
                    </h2>
                    <p className="text-muted-foreground">{project.title}</p>
                </div>

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="file"
                        onChange={(e) =>
                            setData('image', e.target.files?.[0] ?? null)
                        }
                    />

                    <Button className="mt-4">Save Image</Button>
                </form>
            </AdminLayout>
        </AppLayout>
    );
}
