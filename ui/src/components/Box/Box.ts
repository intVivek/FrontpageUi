import React, {createElement, forwardRef, ElementType} from 'react'

type boxProps = {
    is?: ElementType
    children?: React.ReactNode
    props? : React.HTMLAttributes<HTMLElement>
}

const Box = forwardRef(({
        is = 'div', 
        children, 
        ...props
    }: boxProps, 
    // ref: React.Ref<HTMLElement> 
    ) => {

    return createElement(is, props, children);
})

export default Box