import { BreadcrumbItem } from "@/types";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/components/layout/AdminLayout";



const breadcrumbs : BreadcrumbItem[] = [
    {

        title:'All Projects',
        href: '/projects/'
    },
    {

        title:'Edit',
        href: '/projects/{project}/edit'
    }
]

export default function ProjectEdit(){
    return(
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title=" Edit Project" />
                <AdminLayout>
                    Hello
                </AdminLayout>
            </AppLayout>
        </>
    )
}
