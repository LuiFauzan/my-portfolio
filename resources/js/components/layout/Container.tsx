import { ReactNode } from "react"

type props = {
    children: React.ReactNode
    className?:string
}

export default function Container({children,className = ''}: props){
    return(
       <div className={`max-w-6xl mx-auto p-2 ${className}`}>
        {children}
       </div>
    )
}
