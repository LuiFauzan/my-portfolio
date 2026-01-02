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
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Skills',
        href: '/skills',
    },
    {
        title: 'Create Skill',
        href: '/skills/create',
    },
];

interface Skills {
    name: string,
    category: string,
    level: string,
    icon?: string | null
}

interface SkillsProps {
    flash : {
        message?: string
    }
    skill: Skills[]
}
export default function SkillCreate({flash,skill}: SkillsProps) {
    const {data,setData,post,processing,errors} = useForm<{
        name:string,
        category:string,
        level:string,
        icon: File | null
    }>({
        name:'',
        category:'',
        level:'',
        icon:null,
    })
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        post('/skills',{
            forceFormData:true
        })
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Skill Create" />
            <AdminLayout>
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-3 gap-2">
                            <Label>
                                <Input placeholder="Name" value={data.name} onChange={(e) => setData('name',e.target.value)} />
                            </Label>
                            <Select value={data.category} onValueChange={(value) => setData('category',value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        <SelectItem value="backend">
                                            Backend
                                        </SelectItem>
                                        <SelectItem value="frontend">
                                            Frontend
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
                            <Select value={data.level} onValueChange={(value) => setData('level',value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Level</SelectLabel>
                                        <SelectItem value="Beginner">
                                            Beginner
                                        </SelectItem>
                                        <SelectItem value="Intermediate">
                                            Intermediate
                                        </SelectItem>
                                        <SelectItem value="Advanced">
                                            Advanced
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Label>
                                <Input placeholder="Choose icon" type="file" onChange={(e) => {
const file =
                                                e.target.files?.[0] ?? null;
                                            setData('icon', file);}
                                } />
                            </Label>
                            <Button>
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </AppLayout>
    );
}
