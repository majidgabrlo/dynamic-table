import { ReactNode } from "react"

type ColumnProps<T> = {
    render: (data:T)=>ReactNode
    title: ReactNode,
}
function Column<T>({render}: ColumnProps<T>) {        
    return <>{render}</>
}


export default Column