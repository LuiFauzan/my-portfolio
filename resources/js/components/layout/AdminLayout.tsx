import React from "react"

type props = {
    children : React.ReactNode
    className?: string
}

export default function AdminLayout({
    children,className = ''
}: props){
    return(
        <main className={` min-h-screen p-4${className}`}>
            { children }
        </main>
    )
}
