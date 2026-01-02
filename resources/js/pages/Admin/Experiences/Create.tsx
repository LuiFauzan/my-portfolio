import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Experiences',
        href: '/experiences',
    },
    {
        title: 'Create Experience',
        href: '/experiences/create',
    },
];

// interface Experiences {
//     title: string;
//     company: string;
//     description: string;
//     type: string;
//     start_date: string;
//     end_date: string;
// }
// interface ExperienceCreateProps {
//     expe: Experiences[];
// }


export default function ExperienceCreate() {
    const { data, setData, processing, errors, post } = useForm<{
        title: string;
        company: string;
        description: string;
        type: string;
        start_date: string;
        end_date: string;
    }>({
        title: '',
        company: '',
        description: '',
        type: '',
        start_date: '',
        end_date: '',
    });

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        post('/experiences');
    };
    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title=" Create New Project" />
                <AdminLayout>
                    <form onSubmit={handleCreate}>
                        <div>
                            <div className="grid w-full grid-cols-3 gap-2">
                                <Label className="2 flex flex-col gap-2">
                                    Title
                                    <Input
                                        type="text"
                                        placeholder="Input Title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                    {errors.title && (
                                        <p className="text-sm text-red-500">
                                            {errors.title}
                                        </p>
                                    )}
                                </Label>
                                <Label className="2 flex flex-col gap-2">
                                    Company
                                    <Input
                                        type="text"
                                        placeholder="Input Company"
                                        value={data.company}
                                        onChange={(e) => setData('company', e.target.value)}
                                    />
                                    {errors.company && (
                                        <p className="text-sm text-red-500">
                                            {errors.company}
                                        </p>
                                    )}
                                </Label>

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
                                                <SelectItem value="Freelance">
                                                    Freelance
                                                </SelectItem>
                                                <SelectItem value="Internship">
                                                    Internship
                                                </SelectItem>
                                                <SelectItem value="Organization">
                                                    Organization
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
                                <Label className="2 flex flex-col gap-2">
                                    Start Date
                                    <Input
                                        type="date"
                                        value={data.start_date}
                                        onChange={(e) => setData('start_date',e.target.value)}
                                    />
                                    {errors.start_date && (
                                        <p className="text-sm text-red-500">
                                            {errors.start_date}
                                        </p>
                                    )}
                                </Label>
                                <Label className="2 flex flex-col gap-2">
                                    End Date
                                    <Input
                                        type="date"
                                        value={data.end_date}
                                       onChange={(e) => setData('end_date',e.target.value)}
                                    />
                                    {errors.end_date && (
                                        <p className="text-sm text-red-500">
                                            {errors.end_date}
                                        </p>
                                    )}
                                </Label>
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

                                <Button className="mt-5" type="submit">
                                    Save New Project
                                </Button>
                            </div>
                        </div>
                    </form>
                </AdminLayout>
            </AppLayout>
        </>
    );
}
