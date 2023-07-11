import { cloneElement, ComponentPropsWithoutRef, memo, ReactNode, useMemo } from 'react'

function Table<T>({ children, data, ...props }: { data: T[], children: JSX.Element[] | JSX.Element } & ComponentPropsWithoutRef<"table">) {
    const arrayChild = useMemo(() => {
        if (Array.isArray(children)) {
            return children
        }
        else {
            return [children]
        }
    }, [])
    const headers:ReactNode[] = arrayChild.map(child => child.props.title)
    return (
        <table {...props}>
            <tr>{headers.map(head => <th>{head}</th>)}</tr>
            {data.map((_, i) => <tr>
                {arrayChild.map(child =>
                    <td>
                        {cloneElement(child, { ...child.props, render: child.props.render(data[i]) })}
                    </td>
                )}
            </tr>
            )}
        </table>
    )
}

export default memo(Table)
