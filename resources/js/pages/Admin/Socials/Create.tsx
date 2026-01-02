import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'All Socials',
        href: '/socials',
    },
    {
        title: 'Create Socials',
        href: '/socials/create',
    },
];

export default function SkillCreate() {
    const {data,setData,post,processing} = useForm<{
        platform: string
        url: string
        icon: File | null
    }>({
        platform: '',
        url: '',
        icon:null,
    })
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        post('/socials',{
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
                                <Input placeholder="Name" value={data.platform} onChange={(e) => setData('platform',e.target.value)} />
                            </Label>
                            <Label>
                                <Input placeholder="Url" value={data.url} type='url' onChange={(e) => setData('url',e.target.value)} />
                            </Label>


                            <Label>
                                <Input placeholder="Choose icon" type="file" onChange={(e) => {
const file =
                                                e.target.files?.[0] ?? null;
                                            setData('icon', file);}
                                } />
                            </Label>
                            <Button disabled={processing}>
                                Save
                            </Button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </AppLayout>
    );
}
