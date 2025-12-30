import AdminLayout from '@/components/layout/AdminLayout';
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
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Project',
        href: '/projects',
    },
    {
        title: 'Create Project',
        href: '/projects/create',
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

const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // hapus karakter aneh
        .replace(/\s+/g, '-') // spasi → dash
        .replace(/-+/g, '-'); // Replace multiple - with single -
};
export default function ProjectCreate() {
    const { flash, projects } = usePage().props as ProjectsIndexProps;
    const [preview, setPreview] = useState<string | null>(null);
    const { data, setData, processing, errors, post } = useForm<{
        title: string;
        slug: string;
        description: string;
        role: string;
        tech_stack: string[];
        thumbnail: File | null;
        demo_url: string;
        repo_url: string;
        type: string;
        is_featured: boolean;
    }>({
        title: '',
        slug: '',
        description: '',
        role: '',
        tech_stack: [],
        thumbnail: null,
        demo_url: '',
        repo_url: '',
        type: '',
        is_featured: false,
    });

    const handleCreateProject = (e: React.FormEvent) => {
        e.preventDefault();
        post('/projects', {
            forceFormData: true,
        });
    };
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title=" Create New Project" />
                <AdminLayout>
                    <form onSubmit={handleCreateProject}>
                        <div>
                            <div className="grid w-full grid-cols-3 gap-2">
                                <Label className="2 flex flex-col gap-2">
                                    Title
                                    <Input
                                        type="text"
                                        placeholder="Input Title"
                                        value={data.title}
                                        onChange={(e) => {
                                            const title = e.target.value;

                                            setData({
                                                ...data,
                                                title,
                                                slug: slugify(title),
                                            });
                                        }}
                                    />
                                    {errors.title && (
                                        <p className="text-sm text-red-500">
                                            {errors.title}
                                        </p>
                                    )}
                                </Label>
                                <Label className="flex flex-col gap-2">
                                    Slug
                                    <Input
                                        type="text"
                                        placeholder="Automatic when you type title"
                                        value={data.slug}
                                        readOnly
                                    />
                                </Label>
                                {errors.slug && (
                                    <p className="text-sm text-red-500">
                                        {errors.slug}
                                    </p>
                                )}
                                <Label className="flex flex-col gap-2">
                                    Role
                                    <Input
                                        type="text"
                                        placeholder="Frontend, Backend, Ui/Ux Designer etc."
                                        value={data.role}
                                        onChange={(e) =>
                                            setData('role', e.target.value)
                                        }
                                    />
                                </Label>
                                {errors.role && (
                                    <p className="text-sm text-red-500">
                                        {errors.role}
                                    </p>
                                )}
                                <Label className="flex flex-col gap-2">
                                    Tech Stack
                                    <Input
                                        type="text"
                                        placeholder="React, Laravel, PHP, Javascript etc."
                                        value={data.tech_stack}
                                        onChange={(e) =>
                                            setData(
                                                'tech_stack',
                                                e.target.value
                                                    .split(',')
                                                    .map((item) => item.trim()),
                                            )
                                        }
                                    />
                                </Label>
                                {errors.tech_stack && (
                                    <p className="text-sm text-red-500">
                                        {errors.tech_stack}
                                    </p>
                                )}
                                <Label className="flex flex-col gap-2">
                                    Demo URL
                                    <Input
                                        type="url"
                                        placeholder="https://demourl/"
                                        value={data.demo_url}
                                        onChange={(e) =>
                                            setData('demo_url', e.target.value)
                                        }
                                    />
                                </Label>
                                {errors.demo_url && (
                                    <p className="text-sm text-red-500">
                                        {errors.demo_url}
                                    </p>
                                )}
                                <Label className="flex flex-col gap-2">
                                    Repository URL
                                    <Input
                                        type="url"
                                        placeholder="https://repositoryurl/"
                                        value={data.repo_url}
                                        onChange={(e) =>
                                            setData('repo_url', e.target.value)
                                        }
                                    />
                                </Label>
                                {errors.repo_url && (
                                    <p className="text-sm text-red-500">
                                        {errors.repo_url}
                                    </p>
                                )}
                                <Label className="flex flex-col gap-2">
                                    Type
                                    <Select
                                        value={data.type}
                                        onValueChange={(value) =>
                                            setData('type', value)
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
                                {errors.type && (
                                    <p className="text-sm text-red-500">
                                        {errors.type}
                                    </p>
                                )}
                                <Label className="mt-5 flex h-fit items-center gap-3 rounded-lg border p-2.5 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        checked={data.is_featured}
                                        onCheckedChange={(checked) =>
                                            setData(
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
                                {errors.is_featured && (
                                    <p className="text-sm text-red-500">
                                        {errors.is_featured}
                                    </p>
                                )}
                                <Label className="col-span-2 flex flex-col gap-2">
                                    Description
                                    <Textarea
                                        placeholder="This project ..."
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                    ></Textarea>
                                </Label>
                                {errors.description && (
                                    <p className="text-sm text-red-500">
                                        {errors.description}
                                    </p>
                                )}
                                <Label className="col-span-2 flex flex-col gap-2">
                                    Image
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file =
                                                e.target.files?.[0] ?? null;
                                            setData('thumbnail', file);

                                            if (file) {
                                                setPreview(
                                                    URL.createObjectURL(file),
                                                );
                                            }
                                        }}
                                    />
                                </Label>
                                {errors.thumbnail && (
                                    <p className="text-sm text-red-500">
                                        {errors.thumbnail}
                                    </p>
                                )}
                                <Button className="mt-5" type="submit">
                                    Save New Project
                                </Button>
                            </div>
                        </div>
                        <div className="flex mt-5 items-center gap-4">
                            {preview && (
                                <img
                                    src={preview}
                                    className="h-32 w-32 rounded-lg border object-cover"
                                />
                            )}

                        </div>
                    </form>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
