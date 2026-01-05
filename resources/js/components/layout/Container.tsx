

type props = {
    children: React.ReactNode
    className?:string
}

export default function Container({children,className = ''}: props){
    return(
       <div className={`max-w-9/12 mx-auto p-2 ${className}`}>
      {children}
       </div>
    )
}
