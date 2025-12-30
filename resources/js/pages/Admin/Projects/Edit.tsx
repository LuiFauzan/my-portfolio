import AdminLayout from '@/components/layout/AdminLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Projects',
        href: '/projects/',
    },
    {
        title: 'Edit',
        href: `/projects/{project.id}/edit`,
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
    project: Projects;
}
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // hapus karakter aneh
        .replace(/\s+/g, '-') // spasi → dash
        .replace(/-+/g, '-'); // Replace multiple - with single -
};
export default function ProjectEdit({ project }: ProjectsIndexProps) {
    const [preview, setPreview] = useState<string | null>(
        project.thumbnail ? `/storage/${project.thumbnail}` : null,
    );
    const { data: dataUpdate, setData: setDataUpdate, post, processing, errors } = useForm({
        _method:'put',
        title: project.title,
        slug: project.slug,
        description: project.description,
        role: project.role ?? '',
        tech_stack: project.tech_stack ?? [],
        thumbnail: null as File | null,
        demo_url: project.demo_url ?? '',
        repo_url: project.repo_url ?? '',
        type: project.type,
        is_featured: project.is_featured,
    });

    const handleUpdateProject = (e: React.FormEvent) => {
    e.preventDefault();

    post(`/projects/${project.id}`, {

        forceFormData: true,
    });
};

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title=" Edit Project" />
                <AdminLayout>
                    {Object.keys(errors).length > 0 && (
                        <Alert variant={'destructive'}>
                            <CircleAlert />
                            <AlertTitle>Errors</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(
                                        ([key, message]) => (
                                            <li key={key}>
                                                {message as string}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}
                    <form onSubmit={handleUpdateProject}>
                        <div>
                            <div className="grid w-full grid-cols-3 gap-2">
                                <Label className="2 flex flex-col gap-2">
                                    Title
                                    <Input
                                        type="text"
                                        placeholder="Input Title"
                                        value={dataUpdate.title}
                                        onChange={(e) => {
                                            const title = e.target.value;
                                            setDataUpdate('title', title);
                                            setDataUpdate('slug', slugify(title));
                                        }}
                                    />
                                    {/* {errors.title && (
                                        <p className="text-sm text-red-500">
                                            {errors.title}
                                        </p>
                                    )}
                                    {errors.thumbnail && (
                                        <p className="text-sm text-red-500">
                                            {errors.thumbnail}
                                        </p>
                                    )} */}
                                </Label>
                                <Label className="flex flex-col gap-2">
                                    Slug
                                    <Input
                                        type="text"
                                        placeholder="Automatic"
                                        value={dataUpdate.slug}
                                        // onChange={() => setData('slug',slugify(title))}
                                        readOnly
                                    />
                                </Label>

                                <Label className="flex flex-col gap-2">
                                    Role
                                    <Input
                                        type="text"
                                        placeholder="Frontend, Backend, Ui/Ux Designer etc."
                                        value={dataUpdate.role}
                                        onChange={(e) =>
                                            setDataUpdate('role', e.target.value)
                                        }
                                    />
                                </Label>
                                <Label className="flex flex-col gap-2">
                                    Tech Stack
                                    <Input
                                        type="text"
                                        placeholder="React, Laravel, PHP, Javascript etc."
                                        value={dataUpdate.tech_stack?.join(',') ?? ''}
                                        onChange={(e) =>
                                            setDataUpdate(
                                                'tech_stack',
                                                e.target.value
                                                    .split(',')
                                                    .map((item) => item.trim()),
                                            )
                                        }
                                    />
                                </Label>
                                <Label className="flex flex-col gap-2">
                                    Demo URL
                                    <Input
                                        type="url"
                                        placeholder="https://demourl/"
                                        value={dataUpdate.demo_url}
                                        onChange={(e) =>
                                            setDataUpdate('demo_url', e.target.value)
                                        }
                                    />
                                </Label>
                                <Label className="flex flex-col gap-2">
                                    Repository URL
                                    <Input
                                        type="url"
                                        placeholder="https://repositoryurl/"
                                        value={dataUpdate.repo_url}
                                        onChange={(e) =>
                                            setDataUpdate('repo_url', e.target.value)
                                        }
                                    />
                                </Label>
                                <Label className="flex flex-col gap-2">
                                    Type
                                    <Select
                                        value={dataUpdate.type}
                                        onValueChange={(value) =>
                                            setDataUpdate('type', value)
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel className="text-xs text-gray-500">
                                                    Type
                                                </SelectLabel>
                                                <SelectItem value="coding">
                                                    Coding
                                                </SelectItem>
                                                <SelectItem value="design">
                                                    Design
                                                </SelectItem>
                                                <SelectItem value="video">
                                                    Video
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Label>

                                <Label className="mt-5 flex h-fit items-center gap-3 rounded-lg border p-2.5 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        checked={dataUpdate.is_featured}
                                        onCheckedChange={(checked) =>
                                            setDataUpdate(
                                                'is_featured',
                                                Boolean(checked),
                                            )
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />

                                    <p className="text-sm leading-none font-medium">
                                        Enable is Featured
                                    </p>
                                </Label>

                                <Label className="col-span-2 flex flex-col gap-2">
                                    Description
                                    <Textarea
                                        placeholder="This project ..."
                                        value={dataUpdate.description}
                                        onChange={(e) =>
                                            setDataUpdate(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                    ></Textarea>
                                </Label>
                                <Label className="col-span-2 flex flex-col gap-2">
                                    Image
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file =
                                                e.target.files?.[0] ?? null;
                                            setDataUpdate('thumbnail', file);
                                            if (file)
                                                setPreview(
                                                    URL.createObjectURL(file),
                                                );
                                        }}
                                    />
                                </Label>
                                <Button
                                    disabled={processing}
                                    className="mt-5"
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                        {preview && (
                            <img
                                src={preview}
                                className="mt-4 h-40 w-40 rounded-lg object-cover"
                            />
                        )}
                    </form>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
